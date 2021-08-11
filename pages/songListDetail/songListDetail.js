import request from '../../utils/request';
import {useState, defineComponent, useEffect, useLoad, useParams} from '../../utils/hook';
import {useRequestWithProcessError} from '../../custome-hook/useRequest';

const {globalData} = getApp();
function SongListDetail(params) {
    const [songList, setSongList] = useState({});
    const fetchSongList = useRequestWithProcessError((id) => request('/playlist/detail', {id}));
    const options = useParams();

    useEffect(() => {
        fetchSongList.call(options.id);
    }, []);

    useEffect(() => {
        const {value: res} = fetchSongList;

        if (!res) {
            return;
        }

        setSongList(res.playlist);
    }, [fetchSongList.value]);

    return {
        data: {
            songList,
        },
        methods: {
            // 跳转到音乐播放详细页
            toSongDetail(event) {
                const songDetail = event.currentTarget.dataset;
                const {song, index, musics} = songDetail;

                if (index !== undefined && musics !== undefined) {
                    const ids = musics.map((music)=> music.id);
                    globalData.musicIds = ids;
                    globalData.playIndex = index;
                }
      
                wx.navigateTo({
                    // 不能直接传递 song 对象，长度过长会被截取掉。
                    url: '/pages/songDetail/songDetail?musicId=' + song.id,
                });
            },
        },
    };
}

defineComponent(SongListDetail);
