import {useState, useRef, useCallback, useEffect} from '../utils/hook';
function useRequest(action, option = {skipOnLoading: true}) {
    const actionRef = useRef(action);
    const optionRef = useRef(option);
    const [loading, setLoading] = useState(false);
    const taskIdRef = useRef();
    const argsRef = useRef();
    const [value, setValue] = useState();
    const [error, setError] = useState();

    const call = useCallback(async (...args) => {
        argsRef.current = args;

        if (loading && optionRef.current.skipOnLoading) {
            return;
        }

        const taskId = Math.floor(Math.random() * 10000) + Date.now().toString(16);
        taskIdRef.current = taskId;

        // 已经有新的任务在执行了，什么都不做
        const shouldContinue = () => {
            if (taskId !== taskIdRef.current) {
                return false;
            }
            return true;
        };

        try {
            setLoading(true);
            setError(undefined);
            const res = await actionRef.current(...args);

            if (!shouldContinue()) return;
            setValue(res);
            return res;
        } catch (err) {
            if (shouldContinue()) {
                setError(err);
            }
            throw err;
        } finally {
            if (shouldContinue()) {
                setLoading(false);
            }
        }
    }, [loading]);

    // 不抛出异常
    const callIgnoreError = useCallback(
        async (...args) => {
            try {
                return await call(...args);
            } catch {
                // ignore
            }
        },
        [call]
    );

    const reset = useCallback(() => {
        setLoading(false);
        setValue(undefined);
        setError(undefined);
    }, []);

    // 失败后重试
    const retry = useCallback(() => {
        if (argsRef.current && error) {
            return callIgnoreError(...argsRef.current);
        }
        throw new Error(`not call yet`);
    }, [error]);

    return {
        loading,
        error,
        call,
        callIgnoreError,
        value,
        setValue,
        reset,
        retry,
    };
}


function useRequestWithProcessError(action, option = {skipOnLoading: true}) {
    const fetchData = useRequest(action, option);
    const [value, setValue] = useState();

    useEffect(() => {
        const {loading, error, value: res} = fetchData;
        
        if (loading) {
            wx.showLoading({
                title: '加载中',
                mask: true,
            });
            return;
        }

        wx.hideLoading();

        if (error) {
            wx.showModal({
                title: '数据请求失败，请重试',
                content: '',
                showCancel: true,
                cancelText: '取消',
                confirmText: '重试',
                success: (result) => {
                    if (result.confirm) {
                        fetchData.retry();
                    }
                },
            });
            return;
        }

        if (!res) {
            return;
        }

        setValue(res);
    }, [fetchData.loading]);

    return {
        call: fetchData.callIgnoreError, value,
    };
}

export {useRequest, useRequestWithProcessError};
