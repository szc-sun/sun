//获取应用实例
const app = getApp()
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  inputValue: '',
  data: {
    src: '',
    danmuList:
      [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  onShow: function () {
    // 这里的传入的参数user往往由登录时的角色判断获取，本例如果改为staff则呈现不同效果，app由const app = getApp()获取
    wx.hideTabBar({
      success: function () {
        app.onTabBar('user');
      }
    })
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  bindPlay: function () {
    this.videoContext.play()
  },
  bindPause: function () {
    this.videoContext.pause()
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  moreVideo: function () {
    console.log('../../media/video/more/more')
    wx.navigateTo({
      url: '../../media/video/more/more'
    })
  }

  
})
