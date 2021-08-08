import request from '../../utils/request';
import {useState, defineComponent, useEffect} from '../../utils/hook';
import {useRequest, useRequestWithProcessError} from '../../custome-hook/useRequest';

function Index() {
    const [bannerList, setBannerList] = useState([]);
    const [recommendList, setRecommendList] = useState([]);
    const [topList, setTopList] = useState([]);
    const [success, setSuccess] = useState(false);

    const fetchDataWithProcessError = useRequestWithProcessError((fetchData) => fetchData());
    const fetchTopList = useRequest((fetchTopList) => fetchTopList());

    useEffect(async () => {
        fetchTopList.callIgnoreError(()=>{
            const promises = [];
            let index = 1;

            while (index < 2) {
                promises.push(
                    request('/playlist/detail', {
                        id: index++,
                    })
                );
            }
            return Promise.all(promises);
        });

        const {system} = wx.getSystemInfoSync();

        fetchDataWithProcessError.call(() => {
            const promises = [];
            let type = 1;
            if (system.toLocaleLowerCase().includes('ios')) {
                type = 2;
            }
            promises.push(
                request('/banner', {
                    type,
                })
            );
            promises.push(
                request('/personalized', {
                    limit: 8,
                })
            );
            return Promise.all(promises);
        });
    }, []);

    useEffect(() => {
        const {value: res} = fetchDataWithProcessError;
        
        if (!res) {
            return;
        }

        const [bannerListData, recommendListData] = res;
        const oBannerList = bannerListData.banners.filter((item) => item.song);
        const oRecommendList = recommendListData.result;
     
        setBannerList(oBannerList);
        setRecommendList(oRecommendList);
        setSuccess(true);
    }, [fetchDataWithProcessError.value]);

    useEffect(() => {
        const {value: topListData} = fetchTopList;

        if (!topListData) {
            return;
        }

        const oTopList = topListData.map((item) => {
            return {
                name: item.playlist.name,
                tracks: item.playlist.tracks.slice(0, 3),
            };
        });
        setTopList(oTopList);
    }, [fetchTopList.loading]);

    return {
        data: {bannerList, recommendList, topList, success},
        methods: {
            toRecommendSong() {
                wx.redirectTo({
                    url: '/pages/recommendSong/recommendSong',
                });
            },
            toSongListDetail(event) {
                wx.redirectTo({
                    url: '/pages/songListDetail/songListDetail?id=' + event.currentTarget.dataset.id,
                });
            },
            // 跳转至 SongDetail
            toSongDetail(event) {
                const songDetail = event.currentTarget.dataset;
                const {song} = songDetail;
                wx.navigateTo({
                    // 不能直接传递 song 对象，长度过长会被截取掉。
                    url: '/pages/songDetail/songDetail?musicId=' + song.id,
                });
            },
            // 跳转搜索页
            toSearch() {
                wx.navigateTo({
                    url: '/pages/search/search',
                });
            },
        },
    };
}

defineComponent(Index);
