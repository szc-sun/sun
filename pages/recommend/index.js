const app = getApp()
Page({
  data: {
    recommend: [],
    title: '推荐'
  },
  onLoad: function () {
    console.log(123)
    this.setData({
      title: '推荐页面'
    })
  },
  onShow: function () {
    // 这里的传入的参数user往往由登录时的角色判断获取，本例如果改为staff则呈现不同效果，app由const app = getApp()获取
    wx.hideTabBar({
      success: function () {
        app.onTabBar('user');
      }
    })
  },
})