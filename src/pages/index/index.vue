<script setup>
console.log(HTTP_BASE_URL)
import Taro, { useLoad } from '@tarojs/taro'
import { Dongdong } from '@nutui/icons-vue-taro'
import { useGet, usePost } from '@/utils/request'

import { uploadFile } from '@/api/upload'
import dayjs from 'dayjs'
import HomeSwiper from './components/swiper'
import Entrance from './components/entrance'
const state = reactive({
  msg: '欢迎使用 NutUI4.0 开发小程序',
  msg2: '你成功了～',
  type: 'text',
  show: false,
  cover: false,
  testImgSrc: '',
})

const handleClick = (type, msg, cover = false) => {
  state.show = true
  state.msg2 = msg
  state.type = type
  state.cover = cover
}

const requestData = shallowRef()
const handleClick2 = async () => {
  requestData.value = await useGet('/')
}

const toUpload = () => {
  Taro.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
    success: async function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths
      // 调用上传函数
      const src = await uploadFile(tempFilePaths[0])
      console.log(src)
      state.testImgSrc = src
    },
  })
}

const toLogin = () => {
  Taro.getUserProfile({
    desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      console.log(res)
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      Taro.login({
        success: function (res) {
          console.log(res)
          if (res.code) {
            //发起网络请求
            // Taro.request({
            //   url: 'https://test.com/onLogin',
            //   data: {
            //     code: res.code
            //   }
            // })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        },
      })
    },
  })
}
useLoad(() => {
  // Taro.login({
  //   success: async function (res) {
  //     console.log(res)
  //     if (res.code) {
  //       //发起网络请求
  //       const { updatedAt, createdAt } = await usePost('/user/login', { code: res.code })
  //       console.log(dayjs(updatedAt).format('YYYY:MM:DD HH:mm:ss'))
  //     } else {
  //       console.log('登录失败！' + res.errMsg)
  //     }
  //   },
  // })
})
</script>

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.home-page {
  .home-content {
    box-sizing: border-box;
    top: 666px;
    width: 100vw;
    min-height: calc(100vh - 666px);
    background-color: var(--app-primary-bg);
    z-index: 2;
    border-radius: 60px 60px 0 0;
    padding: 0 30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}
</style>

<template>
  <view class="page-container home-page">
    <HomeSwiper />
    <div class="home-content absolute">
      <Entrance />
    </div>
  </view>
  <Footer />
</template>
