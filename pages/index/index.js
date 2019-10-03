//index.js
//获取应用实例
const app = getApp()

Component({
  data: {
    navH: app.globalData.navHeight,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // banner swiper配置
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    bannerList:[
      {
        url: '../../image/meishi1.jpg',
      },
      {
        url: '../../image/meishi2.jpg',
      },
      {
        url: '../../image/meishi3.jpg',
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    // 列表内容
    list:[
      {
        imgUrl:'../../image/meishi1.jpg',
        title:'烧烤',
        content:'烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊'
      },
      {
        imgUrl: '../../image/meishi1.jpg',
        title: '烧烤',
        content: '烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊'
      },
      {
        imgUrl: '../../image/meishi1.jpg',
        title: '烧烤',
        content: '烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊'
      },
      {
        imgUrl: '../../image/meishi1.jpg',
        title: '烧烤',
        content: '烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊'
      },
      {
        imgUrl: '../../image/meishi1.jpg',
        title: '烧烤',
        content: '烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊'
      },
      {
        imgUrl: '../../image/meishi1.jpg',
        title: '烧烤',
        content: '烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊'
      },
      {
        imgUrl: '../../image/meishi1.jpg',
        title: '烧烤',
        content: '烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊'
      },
      {
        imgUrl: '../../image/meishi1.jpg',
        title: '烧烤',
        content: '烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊'
      },
      {
        imgUrl: '../../image/meishi1.jpg',
        title: '烧烤',
        content: '烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊烧烤好吃啊'
      }
    ]
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  methods:{
    onLoad: function () {
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    },
    getUserInfo: function (e) {
      console.log(123)
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },
    navHome: function () {
      wx.reLaunch({
        url: '../index/index'
      })
    },
  }
})
