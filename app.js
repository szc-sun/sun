//app.js
App({
  onLaunch: function () {
    // 获取手机系统信息
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46;
      }, fail(err) {
        console.log(err);
      }
    })

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    navHeight: 0,
    selected:0,
    getWindowSize(){
      try{
        var res = wx.getSystemInfoSync()
        return {
          width:res.windowWidth,
          height:res.windowHeight
        }
      } catch(e) {
        console.log(e)
      }
    }
  },

  // 自定义显示tabbar
  onTabBar: function (key) {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.tabBarData[key];
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true; // 根据页面地址设置当前页面状态    
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  },
  tabBarData: {
    userInfo: null,
    pop: 2,
    num: 0,
    user: {
      "color": "#7A7E83",
      "selectedColor": "#3cc51f",
      "borderStyle": "black",
      "backgroundColor": "#ffffff",
      "position": "bottom",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "iconPath": "/resources/images/icon_component.png",
          "selectedIconPath": "/resources/images/icon_component_HL.png",
          "text": "首页",
          "clas": "tabbar-item",
          "active": true
        },
        {
          "pagePath": "/pages/media/video/index",
          "iconPath": "/resources/images/icon_recommend.png",
          "selectedIconPath": "/resources/images/icon_recommend_HL.png",
          "text": "视频",
          "clas": "tabbar-item",
          "active": false
        },    
        {
          "pagePath": "/pages/recommend/index",
          "iconPath": "/resources/images/icon_recommend.png",
          "selectedIconPath": "/resources/images/icon_recommend_HL.png",
          "text": "推荐",
          "clas": "tabbar-item",
          "active": false
        },
        {
          "pagePath": "/pages/map/map",
          "iconPath": "/resources/images/icon_API.png",
          "selectedIconPath": "/resources/images/icon_API_HL.png",
          "text": "地图",
          "clas": "tabbar-item",
          "active": false
        }
        
      ]
    },
    staff: {
      "color": "#7A7E83",
      "selectedColor": "#3cc51f",
      "borderStyle": "black",
      "backgroundColor": "#ffffff",
      "position": "bottom",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "iconPath": "/resources/images/icon_component.png",
          "selectedIconPath": "/resources/images/icon_component_HL.png",
          "text": "首页",
          "clas": "tabbar-item",
          "active": true
        },
        {
          "pagePath": "/pages/media/video/index",
          "iconPath": "/resources/images/icon_recommend.png",
          "selectedIconPath": "/resources/images/icon_recommend_HL.png",
          "text": "视频",
          "clas": "tabbar-item",
          "active": false
        },
        {
          "pagePath": "/pages/recommend/index",
          "iconPath": "/resources/images/icon_recommend.png",
          "selectedIconPath": "/resources/images/icon_recommend_HL.png",
          "text": "推荐",
          "clas": "tabbar-item",
          "active": false
        },
        {
          "pagePath": "/pages/map/map",
          "iconPath": "/resources/images/icon_API.png",
          "selectedIconPath": "/resources/images/icon_API_HL.png",
          "text": "地图",
          "clas": "tabbar-item",
          "active": false
        }
      ]
    }
  }
})