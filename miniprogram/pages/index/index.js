//index.js
const app = getApp()

Page({
  data: {
    PageCur: 'page1'
  },

  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  }
})
