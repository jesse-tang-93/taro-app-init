<script setup>
console.log(HTTP_BASE_URL)
import Taro, { useLoad } from '@tarojs/taro'
import { Dongdong } from '@nutui/icons-vue-taro'
import { useGet, usePost } from '@/utils/request'

import { uploadFile } from '@/api/upload'
import dayjs from 'dayjs'
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
  Taro.login({
    success: async function (res) {
      console.log(res)
      if (res.code) {
        //发起网络请求
        const { updatedAt, createdAt } = await usePost('/user/login', { code: res.code })
        console.log(dayjs(updatedAt).format('YYYY:MM:DD HH:mm:ss'))
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    },
  })
})
</script>

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<template>
  <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    {{ state.msg }} <Dongdong />
    <view class="btn">
      <nut-button
        type="primary"
        openType="getPhoneNumber"
        @getphonenumber="wxLogin"
        @click="toLogin"
        >登录</nut-button
      >
    </view>
    <nut-toast
      :msg="state.msg2"
      v-model:visible="state.show"
      :type="state.type"
      :cover="state.cover"
    />
    <button @click="handleClick2">请求</button>
    {{ requestData }}
    <!-- <Counter /> -->
    <!-- oss 测试 -->
    <nut-button type="primary" @click="toUpload">oss图片</nut-button>
    <img :src="state.testImgSrc" v-if="state.testImgSrc" />
  </view>
</template>
