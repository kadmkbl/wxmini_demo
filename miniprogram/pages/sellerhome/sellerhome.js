// pages/sellerhome/sellerhome.wxss
const app = getApp();
Page({
  data: {
    ColorList: app.globalData.ColorList,
    TabCur: 0,
    scrollLeft: 0,
    follow: 0
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },

  FollowChange(e) {
    this.setData({
      follow: e.currentTarget.dataset.cur
    })
  }
})