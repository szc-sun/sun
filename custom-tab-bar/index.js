Component({
  data: {
    // selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    "list": [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/image/icon_component.png",
        "selectedIconPath": "/image/icon_component_HL.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/media/video/index",
        "iconPath": "/image/icon_recommend.png",
        "selectedIconPath": "/image/icon_recommend_HL.png",
        "text": "视频"
      },
      {
        "pagePath": "/pages/recommend/index",
        "iconPath": "/image/icon_recommend.png",
        "selectedIconPath": "/image/icon_recommend_HL.png",
        "text": "推荐"
      },
      {
        "pagePath": "/pages/map/map",
        "iconPath": "/image/icon_API.png",
        "selectedIconPath": "/image/icon_API_HL.png",
        "text": "地图"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.setData({
        selected: data.index
      })
      // if (typeof this.getTabBar === 'function' &&
      //   this.getTabBar()) {
      //   this.getTabBar().setData({
      //     selected: data.index
      //   })
      // }
      console.log(data.index)
      wx.switchTab({ url })
    }
  }
})