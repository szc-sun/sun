// pages/map/map.js
//获取应用实例
const app = getApp()
Component({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:'', // 经度
    latitude:'', // 纬度
    controls:[
      {
        id: 1,
        iconPath:"/resources/images/center.svg",
        position: {
          left: 10,
          top: app.globalData.getWindowSize().height - 46 -106,
          width:32,
          height:32
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: "/resources/images/pin.svg",
        position: {
          left: app.globalData.getWindowSize().width / 2 - 18,
          top: (app.globalData.getWindowSize().height - 46) / 2 -58,
          width: 32,
          height: 32
        }
      }
    ]
  },
  methods:{
    controltap(e) {
      // console.log(e.controlId)
      if (e.controlId === 1) {
        this.moveToLocation()
      }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      this.mapCtx = wx.createMapContext("map", this)
    },
    moveToLocation() {
      wx.getLocation({
        success(res) {
          console.log(res)
        }
      })
      this.mapCtx.moveToLocation()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      wx.getLocation({
        type: 'gcj02',
        // success(res) {
        //   console.log(res)
        // }
        success: this.handleGetLocationSuccess.bind(this)
      })
    },
    handleGetLocationSuccess(res) {
      console.log(res)
      this.setData({
        longitude: res.longitude,
        latitude: res.latitude
      })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }
    }
  }
  
})