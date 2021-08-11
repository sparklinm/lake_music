import {useState, useRef, useCallback, useEffect, useMemo} from '../utils/hook';
function usePlayMusic() {
    const musicSrc = useRef('');
    const musicInfo = useRef({});
    let [status, setStatus] = useState('init');
    const [duration, setDuration] = useState(0);
    const [time, setTime] = useState(0);

    const audioManager = useMemo(()=>{
        const audio = wx.createInnerAudioContext();
        audio.onCanplay(()=>{
            setStatus('ready');

            audio.onPlay(()=>{
                setStatus('play');
            });
            audio.onPause(()=>{
                setStatus('pause');
            });
            audio.onStop(()=>{
                setStatus('ready');
            });
            audio.onEnded(()=>{
                setStatus('pause');
            });
            audio.onTimeUpdate(()=>{
                setTime(audio.currentTime * 1000);
            });
        });

    
        return audio;
    }, []);


    function setMusic(src, info={}) {
        if (!src) {
            setStatus('no');
            return;
        }

        // if (src === musicSrc.current) {
        //     return;
        // }

        audioManager.title = info.title;
        audioManager.coverImgUrl = info.coverImgUrl;
        audioManager.src = src;
        musicSrc.current = src;
        musicInfo.current = info;

        status = 'init';
        setStatus(status);
        if (info.duration) {
            setDuration(info.duration);
        }
    }

    function play() {
        if (!musicSrc.current) {
            setStatus('no');
            return;
        }
        if (status === 'init') {
            audioManager.onCanplay(()=>{
                audioManager.play();
            });
        } else {
            audioManager.play();
        }
    }

    function pause() {
        audioManager.pause();
    }

    function change() {
        if (status === 'play') {
            pause();
        } else {
            play();
        }
    }

    return {
        status,
        duration,
        time,
        play,
        pause,
        setMusic,
        change,
        destroy: audioManager.destroy,
        // wx bug，可能无法停止
        stop: audioManager.stop,
    };
}


export {usePlayMusic};
