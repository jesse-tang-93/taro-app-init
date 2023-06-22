<script setup>
import Taro, { useDidShow, useLoad } from '@tarojs/taro'
import { Check } from '@nutui/icons-vue-taro'

const state = reactive({})

useLoad(() => {})
</script>

<template>
  <view class="mine-page"> 关于 <Footer /> </view>
</template>
