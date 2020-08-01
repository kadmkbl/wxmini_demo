// pages/page2.js
const app = getApp();
Page({
  data: {
    PageCur: '-1',
    ColorList: app.globalData.ColorList,
    TabCur: 0,
    scrollLeft: 0 
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  }
})