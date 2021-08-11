import config from '../config/config';

function travelRes(obj) {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const val = obj[key];
            if ((key === 'code' || key === 'statusCode') && val !== 200) {
                return false;
            }

            if (typeof val === 'object') {
                const is = travelRes(val);

                if (!is) {
                    return false;
                }
            }
        }
    }

    return true;
}

export default (url, data = {}, method = 'GET') => {
    const cookie = wx.getStorageSync('cookie');

    if (method === 'GET' && cookie) {
        data.cookie = cookie;
    }

    return new Promise((resolve, reject) => {
        const startTime = wx.getStorageSync('startTime');
        if (startTime && Date.now() - startTime > 12 * 60 * 60 * 1000) {
            wx.clearStorage();
        }

        const storedRequest = wx.getStorageSync(config.host + url + JSON.stringify(data));
        if (storedRequest) {
            console.log('storedRequest', storedRequest);
            resolve(storedRequest);
            return;
        }

        wx.request({
            url: config.host + url,
            // url: config.ddnsHost + url,
            data,
            method,
            header: {
                cookie: wx.getStorageSync('cookies') ?
                    wx.getStorageSync('cookies').find((item) => item.indexOf('MUSIC_U') !== -1) :
                    '',
            },
            success: (res) => {
                console.log('请求成功', config.host + url, res);

                if (res.statusCode !== 200 || (res.data && res.data.code !== 200) || !travelRes(res.data)) {
                    // console.log('请求失败', err)
                    reject(res);
                    return;
                }

                if (data.isLogin) {
                    // 登录请求
                    // 将用户的cookie存入本地
                    wx.setStorage({
                        key: 'cookies',
                        data: res.cookies,
                    });
                    wx.setStorage({
                        key: 'cookie',
                        data: res.data.cookie,
                    });
                }

                if (!url.includes('login')) {
                    wx.setStorageSync(config.host + url + JSON.stringify(data), res.data);
                    const startTime = wx.getStorageSync('startTime');
                    if (!startTime) {
                        wx.setStorageSync('startTime', Date.now());
                    }
                }
                resolve(res.data);
            },
            fail: (err) => {
                console.log('请求失败', config.host + url, err);
                reject(err);
            },
        });
    });
};
