Component({
  data: {
    recommend: [],
    title: '推荐'
  },
  onLoad: function () {
    this.setData({
      title: '推荐页面'
    })
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    }
  }
})