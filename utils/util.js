const {globalData} = getApp();

export function toSongDetail(event) {
    const songDetail = event.currentTarget.dataset;
    const {song, index, musics} = songDetail;

    if (!song) {
        return;
    }

    if (index !== undefined && musics !== undefined) {
        console.log(index);
        const ids = musics.map((music)=> music.id);
        globalData.musicIds = ids;
        globalData.playIndex = index;
    }

    wx.navigateTo({
        // 不能直接传递 song 对象，长度过长会被截取掉。
        url: '/pages/songDetail/songDetail?musicId=' + song.id,
    });
}

export function debounce(fn, timeout = 300, fisrtExe = true) {
    if (typeof fn !== 'function') {
        throw new Error('argument(s) error');
    }
    let timer = null;
  
    return function(...args) {
        if (fisrtExe) {
            fn(...args);
            fisrtExe = false;
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
            clearTimeout(timer);
        }, timeout);
    };
}
