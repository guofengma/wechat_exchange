// pages/user/user.js
import fetch from '../../utils/fetch.js';

var app = getApp();
Page({

   /**
    * 页面的初始数据
    */
   data: {
     
   },
   messageView(){
      wx.navigateTo({
         url: '../message/message',
      })
   },
   mywishView(){
      wx.navigateTo({
         url: '../mywish/mywish',
      })
   },
   collectView(){
      wx.navigateTo({
         url: '../collect/collect',
      })
   },
   goodsView(){
      wx.navigateTo({
         url: '../goods/goods',
      })
   },
   publishView(){
      wx.navigateTo({
         url: '../publish/publish',
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {
      let that = this;

      wx.getUserInfo({
         success: function (res) {
            console.log('nihao')
            //  var objz = {};
            //  objz.avatarUrl = res.userInfo.avatarUrl;
            //  objz.nickName = res.userInfo.nickName;
            wx.setStorageSync('userInfo', res.userInfo);//存储userInfo  
            that.setData({
               avatarUrl: wx.getStorageSync('userInfo').avatarUrl
            })
         },
         fail:function(err){
            that.setData({
               avatarUrl: '../../image/user.png'
            })
         }
      });

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
      var that = this;
      // fetch({
      //    url: "/CVS/user/query",
      //    //   baseUrl: "http://192.168.50.57:9888",
      //    baseUrl: "https://store.lianlianchains.com",
      //    data: {
      //       openid: wx.getStorageSync('user').openid
      //    },
      //    noLoading: true,
      //    method: "GET",
      //    header: { 'content-type': 'application/x-www-form-urlencoded' }
      //    //   header: { 'content-type': 'application/json' }
      // }).then(result => {
      //    console.log(result)

      //    if (result) {
      //       let mobile = result.phoneno.substr(0, 3) + "****" + result.phoneno.substr(7)
      //       this.setData({
      //          mobile: mobile
      //       })
      //    } else {
      //       this.setData({
      //          mobile: ""
      //       })
      //    }
      // }).catch(err => {
      //    console.log("出错了")
      //    console.log(err)
      // });
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

   }
})