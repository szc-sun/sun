Component({
  data: {
    recommend: [],
    title: '推荐'
  },
  methods:{
    onLoad: function () {
      console.log(123)
      this.setData({
        title: '推荐页面'
      })
    },
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