import request from '../../utils/request';
import {useState, defineComponent, useEffect, useLoad, onRendered, useRef} from '../../utils/hook';
import {usePromisesWithProcessError, useRequestWithProcessError} from '../../custome-hook/useRequest';
import {toSongDetail, debounce} from '../../utils/util';

function Search() {
    const [placeholderContent, setPlaceholderContent] = useState('');
    const [hotList, setHotList] = useState([]);
    const [searchContent, setSearchContent] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const fetchData = usePromisesWithProcessError();
    const fetchSearchList = useRequestWithProcessError((keywords) =>
        request('/search', {
            keywords: keywords,
            limit: 10,
        })
    );

    useEffect(() => {
        fetchData.call([request('/search/default'), request('/search/hot/detail')]);
    }, []);

    useEffect(() => {
        const {value: res} = fetchData;

        if (!res) {
            return;
        }

        const [placeholderData, hostListData] = res;
        setPlaceholderContent(placeholderData.data.showKeyword);
        setHotList(hostListData.data);
    }, [fetchData.value]);

    useEffect(() => {
        const {value: res} = fetchSearchList;
        console.log(res);

        if (!res) {
            return;
        }

        const searchListData = res;
        setSearchList(searchListData.result.songs);
    }, [fetchSearchList.value]);

    function handleInputChange(event) {
        const content = event.detail.value.trim();
        setSearchValue(content);
        // 当表单项内容为空时，将结果直接清空并return出这个函数，避免后续节流出现一系列问题
        if (!content) {
            setSearchList([]);
            return;
        }
    
        fetchSearchList.call(content);
        setSearchContent(content);
    }

    function clear() {
        setSearchContent('');
        setSearchList([]);
        setSearchValue('');
    }

    function searchHotSong(e) {
        const {index} = e.currentTarget.dataset;
        const content = hotList[index].searchWord;
        
        fetchSearchList.call(content);
        setSearchValue(content);
    }

    return {
        data: {
            placeholderContent,
            hotList,
            searchList,
            searchContent,
            searchValue,
        },
        methods: {
            handleInputChange: debounce(handleInputChange, 300, false),
            toSongDetail,
            clear,
            searchHotSong: debounce(searchHotSong),
        },
    };
}

defineComponent(Search);

// Page({
//     /**
//      * 页面的初始数据
//      */
//     data: {
//         placeholderContent: '', // placeholder的内容
//         hotList: [], // 热搜榜数据
//         searchContent: '', // 搜索内容
//         searchList: [], // 关键字模糊匹配的数据
//     },

//     /**
//      * 生命周期函数--监听页面加载
//      */
//     onLoad: function(options) {
//         this.getInitData();
//     },

//     // 获取初始化数据
//     async getInitData() {
//         const placeholderData = await request('/search/default');
//         const hostListData = await request('/search/hot/detail');
//         this.setData({
//             placeholderContent: placeholderData.data.showKeyword,
//             hotList: hostListData.data,
//         });
//     },

//     // 表单项内容发生改变的回调
//     handleInputChange(event) {
//         this.setData({
//             searchContent: event.detail.value.trim(),
//         });
//         // 当表单项内容为空时，将结果直接清空并return出这个函数，避免后续节流出现一系列问题
//         if (!this.data.searchContent) {
//             this.setData({
//                 searchList: [],
//             });
//             return;
//         }
//         if (timeOut) {
//             console.log('触发节流，不执行回调');
//             return;
//         }
//         timeOut = true;
//         this.getSearchList();
//         // 函数节流
//         setTimeout(() => {
//             timeOut = false;
//         }, 300);
//     },

//     async getSearchList() {
//         const searchListData = await request('/search', {
//             keywords: this.data.searchContent,
//             limit: 10,
//         });
//         this.setData({
//             searchList: searchListData.result.songs,
//         });
//     },

//     // 跳转至 SongDetail
//     toSongDetail(event) {
//         const songDetail = event.currentTarget.dataset;
//         const {song, listIndex, musicIndex} = songDetail;
//         if (listIndex !== undefined && musicIndex !== undefined) {
//             this.setData({
//                 listIndex,
//                 musicIndex,
//             });
//         }

//         wx.navigateTo({
//             // 不能直接传递 song 对象，长度过长会被截取掉。
//             url: '/pages/songDetail/songDetail?musicId=' + song.id,
//         });
//     },

//     /**
//      * 生命周期函数--监听页面初次渲染完成
//      */
//     onReady: function() {},

//     /**
//      * 生命周期函数--监听页面显示
//      */
//     onShow: function() {},

//     /**
//      * 生命周期函数--监听页面隐藏
//      */
//     onHide: function() {},

//     /**
//      * 生命周期函数--监听页面卸载
//      */
//     onUnload: function() {},

//     /**
//      * 页面相关事件处理函数--监听用户下拉动作
//      */
//     onPullDownRefresh: function() {},

//     /**
//      * 页面上拉触底事件的处理函数
//      */
//     onReachBottom: function() {},

//     /**
//      * 用户点击右上角分享
//      */
//     onShareAppMessage: function() {},
// });
