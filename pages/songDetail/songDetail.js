import request from '../../utils/request';
import moment from 'moment';
import {useState, defineComponent, useEffect, useLoad, onRendered, useRef} from '../../utils/hook';
import {useRequestWithProcessError} from '../../custome-hook/useRequest';
import {usePlayMusic} from '../../custome-hook/usePlayMusic';

const {globalData} = getApp();
function SongDetail(params) {
    const [currentTime, setCurrentTime] = useState(0);
    const [durationTime, setDurationTime] = useState(0);
    const [currentWidth, setCurrentWidth] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const durationWidthRef = useRef(0);
    const [songInfo, setSongInfo] = useState(0);
    const fetchSong = useRequestWithProcessError((fetchData) => fetchData());
    const musicManager = usePlayMusic();

    useLoad((options) => {
        const {musicId} = options;

        getSong(musicId);

        onRendered(() => {
            const query = wx.createSelectorQuery();
            query.select('.barControl').boundingClientRect();
            query.exec((res) => {
                durationWidthRef.current = res[0].width;
            });
        });
    });

    useEffect(()=>{
        return musicManager.destroy;
    }, []);

    useEffect(() => {
        const {value: res} = fetchSong;

        if (!res) {
            return;
        }

        const [songData, songUrlData] = res;
        const songInfo = songData.songs[0];
        const songUrl = songUrlData.data[0].url;
        const {
            dt: duration,
            name,
            al: {picUrl},
        } = songInfo;

        setSongInfo(songInfo);
        musicManager.setMusic(songUrl, {duration: duration, coverImgUrl: picUrl, title: name});
        musicManager.play();
    }, [fetchSong.value]);

    useEffect(() => {
        if (!durationWidthRef.current) {
            return;
        }

        const {time, duration} = musicManager;
        const currentTime = moment(time).format('mm:ss');
        const durationTime = moment(duration).format('mm:ss');
        const currentWidth = (time / duration) * durationWidthRef.current;

        setCurrentTime(currentTime);
        setDurationTime(durationTime);
        setCurrentWidth(currentWidth);
    }, [musicManager.time]);

    useEffect(() => {
        console.log(musicManager.status);
        if (musicManager.status === 'play') {
            setIsPlaying(true);
        } else {
            if (musicManager.status === 'no') {
                wx.showToast({
                    title: '没找到歌曲',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false,
                });
            }
            setIsPlaying(false);
        }
    }, [musicManager.status]);


    function getSong(musicId) {
        fetchSong.call(() => {
            const promises = [
                request('/song/detail', {
                    ids: musicId,
                }),
                request('/song/url', {
                    id: musicId,
                }),
            ];

            return Promise.all(promises);
        });
    }

    function switchMusic(event) {
        const {musicIds, playIndex} = globalData;
        const type = event.currentTarget.id;
        let nextIndex = playIndex;

        if (type === 'pre') {
            nextIndex--;
        } else {
            nextIndex++;
        }

        if (nextIndex > musicIds.length - 1) {
            wx.showToast({
                title: '到达最后一首了~',
                duration: 1500,
                icon: 'none',
                mask: false,
            });

            return;
        }

        if (nextIndex < 0) {
            wx.showToast({
                title: '已经是第一首了~',
                duration: 1500,
                icon: 'none',
                mask: false,
            });

            return;
        }

        globalData.playIndex = nextIndex;

        const nextId = musicIds[nextIndex];
        getSong(nextId);
        musicManager.pause();
    }

    return {
        data: {
            currentTime,
            durationTime,
            currentWidth,
            song: songInfo,
            isPlaying,
        },
        methods: {
            playOrPause: musicManager.change,
            switchMusic,
        },
    };
}

defineComponent(SongDetail);
