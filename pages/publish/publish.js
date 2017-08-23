// pages/publish/publish.js
import * as types from '../../utils/uploadImage'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     classify: 'exchage',
     exchage_active:true,
     give_active: false,
     wish_active: false,
     idx: -1,
     imageDefault: "../../image/pulish/upload.png",
     previewImg1:"",
     previewImg2: "",
     previewImg3: "",
     previewImg4: ""
  },
  exchangeTab() {
   this.setData({
      classify: 'exchage',
      exchage_active: true,
      give_active: false,
      wish_active: false
   })
  },
  giveTab() {
     this.setData({
        classify: 'give',
        exchage_active: false,
        give_active: true,
        wish_active: false
     })
  },
  wishTab() {
     this.setData({
        classify: 'wish',
        exchage_active: false,
        give_active: false,
        wish_active: true
     })
  },
  typeSelect(e) {
   let id = e.target.dataset.id;
   this.setData({
      idx: id
   })
  },
  imageView(e){
     console.log(e.target.dataset.idx)
     let idx = e.target.dataset.idx;
     types.uploadImage().then(res => {
        console.log(res)
        let path = res.tempFilePaths[0];
        if (idx === "previewImg1") {
         this.setData({
            previewImg1: path
         })
        } else if (idx === "previewImg2") {
           this.setData({
              previewImg2: path
           })
        } else if (idx === "previewImg3") {
           this.setData({
              previewImg3: path
           })
        } else if (idx === "previewImg4") {
           this.setData({
              previewImg4: path
           })
        }
     })
  },
  formSubmit(e) {
   let param = e.detail.value;
   console.log(param)

   var tempFilePaths = res.tempFilePaths
   wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
         'user': 'test'
      },
      success: function (res) {
         var data = res.data
         //do something
      }
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})