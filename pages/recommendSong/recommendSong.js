import request from '../../utils/request';
import moment from 'moment';
import {useState, defineComponent, useEffect} from '../../utils/hook';
import {useRequestWithProcessError} from '../../custome-hook/useRequest';

function RecommendSong(params) {
    const [day, setDay] = useState([]);
    const [month, setMonth] = useState([]);
    const [recommendList, setRecommendList] = useState([]);
    const fetchRecommendList = useRequestWithProcessError(() => request('/recommend/songs'));

    useEffect(() => {
        if (!wx.getStorageSync('cookie')) {
            wx.redirectTo({
                url: '/pages/login/login',
            });
            wx.showToast({
                title: '请先登录',
                icon: 'loading',
                duration: 1500,
            });
            return;
        }

        fetchRecommendList.call();

        const day = moment().format('DD');
        const month = moment().format('MM');
        setDay(day);
        setMonth(month);
    }, []);

    useEffect(() => {
        const {value: res} = fetchRecommendList;

        if (!res) {
            return;
        }

        setRecommendList(res.data.dailySongs);
    }, [fetchRecommendList.value]);

    return {
        data: {
            day,
            month,
            recommendList,
        },
        methods: {
            // 跳转到音乐播放详细页
            toSongDetail(event) {
                const {song} = event.currentTarget.dataset;
           
                wx.navigateTo({
                    // 不能直接传递 song 对象，长度过长会被截取掉。
                    url: '/pages/songDetail/songDetail?musicId=' + song.id,
                });
            },
        },
    };
}

defineComponent(RecommendSong);
