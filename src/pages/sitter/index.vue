<script lang="ts" setup>
import Taro, { useLoad, usePullDownRefresh, useReachBottom } from '@tarojs/taro'
import './index.scss'

// page config
definePageConfig({
  navigationBarTitleText: '橘胖胖',
  navigationStyle: 'default',
  navigationBarBackgroundColor: '#FE7301',
  navigationBarTextStyle: 'white',
  onReachBottomDistance: 100, // 触底触发距离
  enablePullDownRefresh: true, // 允许下拉刷新
})

const state = reactive({
  sitterList: [],
})

// list 列表数据
const pageNo = ref(0) // 分页-默认1
const getSitterList = async () => {
  pageNo.value = pageNo.value + 1
}

useLoad(() => {
  getSitterList()
})
// 触底加载更多
useReachBottom(() => {
  getSitterList()
})
// 下拉刷新
usePullDownRefresh(async () => {
  // console.log('onPullDownRefresh')
  pageNo.value = 0
  state.sitterList = []
  await getSitterList()
  Taro.stopPullDownRefresh()
  Taro.showToast({
    title: '刷新成功',
    icon: 'success',
    duration: 1000,
  })
})
import { Location2 } from '@nutui/icons-vue-taro'
</script>

<template>
  <view class="page-container sitter-list-page">
    <!-- location -->
    <div class="location-box flex justify-start items-center">
      <Location2 />
      <div class="text">海伦春天1011</div>
    </div>
    <div class="list-title">橘胖胖宠物保姆</div>
    <div class="list-box">
      <SitterItem />
      <SitterItem />
      <SitterItem />
      <SitterItem />
    </div>
  </view>
</template>
