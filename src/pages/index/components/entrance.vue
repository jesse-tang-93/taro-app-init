<script setup>
const state = reactive({
  list: [
    require('@/assets/images/index/cat.png'),
    require('@/assets/images/index/dog.png'),
    require('@/assets/images/index/wash.png'),
    require('@/assets/images/index/join.png'),
  ],
})
</script>

<style lang="scss">
.entrance-box {
  padding-top: 20px;
  .items {
    width: 50%;
    &:nth-child(1) {
      width: 323px;
      height: 248px;
      margin-right: 17px;
    }
    &:nth-child(2) {
      width: 354px;
      height: 221px;
      margin-top: 34px;
    }
    &:nth-child(3) {
      width: 323px;
      height: 212px;
    }
    &:nth-child(4) {
      width: 325px;
      height: 206px;
      margin-top: 4px;
    }
  }
}
.active-banner {
  padding-top: 20px;
  .active {
    width: 100%;
    height: 300px;
    border-radius: 20px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }
}
</style>
<template>
  <div class="entrance-box flex flex-wrap flex-justify-between">
    <div v-for="(item, index) in state.list" :key="index" class="items">
      <img :src="item" alt="" mode="aspectFill" />
    </div>
  </div>
  <!-- 活动 banner -->
  <div class="active-banner">
    <img
      class="active"
      mode="aspectFill"
      src="https://miaoo-oss.oss-cn-chengdu.aliyuncs.com/home/%E6%88%91%E4%BB%AC%E6%9D%A5%E5%95%A6.png"
    />
  </div>
</template>
