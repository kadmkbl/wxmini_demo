// pages/complainseller/complainseller.js
const app = getApp();
Page({
  data: {
    imgList: [],
    modalName: null,
    textareaAValue: '',
    ColorList: app.globalData.ColorList,
    complainList:[{
      name: '卖家消失'
    },{
      name: '卖家拖货'
    }],
    complainselect: '2',
    modalName: 'defalut'
  },

  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },

  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },

  DelImg(e) {
    wx.showModal({
      title: '确认',
      content: '确认要删除此照片吗？',
      cancelText: '不了不了',
      confirmText: '是的',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },

  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },

  SetShadow(e) {
    this.setData({
      shadow: e.detail.value
    })
  },

  SetBorderSize(e) {
    this.setData({
      bordersize: e.detail.value
    })
  },

  complainSelect(e) {
    this.setData({
      complainselect: e.currentTarget.dataset.id
    })
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  }
})