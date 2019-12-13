// pages/map/map.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '', // 经度
    latitude: '', // 纬度
    controls: [
      {
        id: 1,
        iconPath: "/resources/images/center.svg",
        position: {
          left: 10,
          top: app.globalData.getWindowSize().height - 46 - 70,
          width: 32,
          height: 32
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: "/resources/images/pin.svg",
        position: {
          left: app.globalData.getWindowSize().width / 2 - 17,
          top: (app.globalData.getWindowSize().height - 46) / 2 - 37,
          width: 32,
          height: 32
        }
      }
    ]
  },
  controltap(e) {
    // console.log(e.controlId)
    if (e.controlId === 1) {
      this.moveToLocation()
    }
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
    // 这里的传入的参数user往往由登录时的角色判断获取，本例如果改为staff则呈现不同效果，app由const app = getApp()获取
    wx.hideTabBar({
      success: function () {
        app.onTabBar('user');
      }
    })
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
  }

})