// pages/gemmology/gemmology.js
const app = getApp();
Page({
  data: {
    imgList: ["https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg"],
    modalName: 'defalut',
    buttonselect: 0,
    graphcheckbox: [{
      value: 0,
      name: '图1',
      checked: false,
    }, {
      value: 1,
      name: '图2',
      checked: true,
    }, {
      value: 2,
      name: '图3',
      checked: true,
    }, {
      value: 3,
      name: '图4',
      checked: false,
    }, {
      value: 4,
      name: '图5',
      checked: false,
    }, {
      value: 5,
      name: '图6',
      checked: false,
    }, {
      value: 6,
      name: '图7',
      checked: false,
    }, {
      value: 7,
      name: '图8',
      checked: false,
    }]
  },

  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
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
  },

  //真
  ButtonSelect1(e) {
    if(this.data.buttonselect != 1){
      this.setData({
        buttonselect: e.currentTarget.dataset.id
      })
    }
    else{
      this.setData({
        buttonselect: 0
      })
    }
  },

  //假
  ButtonSelect2(e) {
    if(this.data.buttonselect != 2){
      this.setData({
        buttonselect: e.currentTarget.dataset.id
      })
    }
    else{
      this.setData({
        buttonselect: 0
      })
    }
  },

  //无法鉴别
  ButtonSelect3(e) {
    if(this.data.buttonselect != 3){
      this.setData({
        buttonselect: e.currentTarget.dataset.id,
        modalName: "CannotModal"
      })
    }
    else{
      this.setData({
        buttonselect: 0
      })
    }
  },

  // 选择补图
  ButtonSelect4(e) {
    if(this.data.buttonselect != 4){
      this.setData({
        buttonselect: e.currentTarget.dataset.id,
        modalName: "GraphModal"
      })
    }
    else{
      this.setData({
        buttonselect: 0
      })
    }
  },

  //选择补图选项
  GraphCheckbox(e) {
    let items = this.data.graphcheckbox;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      graphcheckbox: items
    })
  }

});