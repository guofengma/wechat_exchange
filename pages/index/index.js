//index.js
import fetch from "../../utils/fetch.js";
var app = getApp();
import {recharge, query, transfer} from '../../utils/score'
Page({
   data: {
      selectID:-1,
      kinds:[
         {
            title: "3C数码",
            titleColor: "#527991",
            desc: "手机、电脑重在性价比",
            desc_style: "border: 1px solid #527991; color: #527991",
            img_url: "../../image/digital.png",
            img_styles: "width: 320rpx; height: 192rpx",
            bgColor: "#DFF0FB"
         },
         {
            title: "服装鞋帽",
            titleColor: "#656E91",
            desc: "总有一款你需要的",
            desc_style: "border: 1px solid #656E91; color: #656E91",
            img_url: "../../image/clothing.png",
            img_styles: "width: 258rpx; height: 236rpx",
            bgColor: "#E7EAFB"
         },
         {
            title: "母婴用品",
            titleColor: "#DEA654",
            desc: "婴幼服饰、玩具图书",
            desc_style: "border: 1px solid #DEA654; color: #DEA654",
            img_url: "../../image/baby.png",
            img_styles: "width: 300rpx; height: 192rpx",
            bgColor: "#FDFDDF"
         },
         {
            title: "家具家电",
            titleColor: "#AE8077",
            desc: "时尚家居，恰我所需",
            desc_style: "border: 1px solid #AE8078; color: #AE8078",
            img_url: "../../image/furnishing.png",
            img_styles: "width: 324rpx; height: 206rpx",
            bgColor: "#FBF0EE"
         },
         {
            title: "图书音像",
            titleColor: "#6F7E68",
            desc: "阅读提升品位",
            desc_style: "border: 1px solid #6F7E68; color: #6F7E68",
            img_url: "../../image/books.png",
            img_styles: "width: 284rpx; height: 198rpx",
            bgColor: "#E9F9E2"
         },
         {
            title: "其他分类",
            titleColor: "#597185",
            desc: "其实包含一切可能",
            desc_style: "border: 1px solid #597185; color: #597185",
            img_url: "../../image/others.png",
            img_styles: "width: 326rpx; height: 244rpx",
            bgColor: "#E7EFF5"
         }
      ]
   },
   onLoad: function (options) {
      let kinds = this.data.kinds.map((v, i) => {
         let elem = Object.assign({}, v, { select: false })
         return elem
      })
      this.setData({
         kinds: kinds
      });
   },
   onShow: function () {

   },
   listView(e){
      console.log(e)
      let i = e.target.dataset.id;
      this.data.kinds[i].select = !this.data.kinds[i].select;
      this.setData({
         kinds: this.data.kinds
      })
   },
   detailView() {
      wx.navigateTo({
         url: '../giveDetail/giveDetail',
      })
   },
   /**
  * 用户点击右上角分享
  */
   onShareAppMessage: function () {

   }
})
