export function uploadImage() {
   return new Promise((resolve, reject) => {
      wx.chooseImage({
         // count: 1, // 默认9
         // sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
         // sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
         success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            // var tempFilePaths = res.tempFilePaths
            resolve(res)
                var tempFilePaths = res.tempFilePaths
                wx.uploadFile({
                  // url: 'http://192.168.50.115:8123/upload', //仅为示例，非真实的接口地址
                  url: 'https://store.lianlianchains.com/exchange/upload', //仅为示例，非真实的接口地址
                  filePath: tempFilePaths[0],
                  name: 'test',
                  formData: {
                    'openid': wx.getStorageSync('user').openid
                  },
                  success: function (res) {
                    var data = res.data
                    //do something
                    console.log(data)
                  }
                })
         }
      })
   })
   
}