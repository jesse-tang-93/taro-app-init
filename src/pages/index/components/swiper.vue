<script setup>
const state = reactive({
  list: [
    'https://miaoo-oss.oss-cn-chengdu.aliyuncs.com/home/646b78c4ea67981baec68b02a05cba6.png',
    'https://miaoo-oss.oss-cn-chengdu.aliyuncs.com/home/035b7de0ba85638d863ce7b9e020de5.png',
  ],
})
</script>

<style lang="scss">
.home-swiper-box {
  height: 466 + Px;
  .banner-box {
    min-height: 466 + Px;
    image {
      height: 100%;
    }
  }
}
</style>
<template>
  <view class="home-swiper-box">
    <nut-swiper
      :init-page="state.page"
      :pagination-visible="false"
      pagination-color="#426543"
      auto-play="3000"
      :height="466"
      class="banner-box"
    >
      <nut-swiper-item v-for="item in state.list" :key="item">
        <img :src="item" alt="img" mode="aspectFill" />
      </nut-swiper-item>
    </nut-swiper>
  </view>
</template>
