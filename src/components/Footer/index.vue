<!-- eslint-disable indent -->
<script setup>
import Taro, { useDidShow } from '@tarojs/taro'
import { IconFont } from '@nutui/icons-vue-taro'

const pages = ['/pages/index/index', '/pages/find/index', '/pages/about/index', '/pages/mine/index']

const appStore = useAppStore()
function setSelected(index) {
  appStore.setActiveTabBar(index)
}
const tabSwitch = (val, index) => {
  setSelected(index)
  Taro.switchTab({
    url: pages[index],
  })
}
useDidShow(() => {
  // 使得当前激活tabindex 等于当前页
  const { path } = Taro.getCurrentInstance().router
  if (pages.includes(path) && pages.indexOf(path) !== appStore.activeTabBar)
    setSelected(pages.indexOf(path))
})
</script>
<style lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
}
</style>
<template>
  <div class="footer">
    <nut-tabbar
      v-model="appStore.activeTabBar"
      bottom
      safe-area-inset-bottom
      placeholder
      @tab-switch="tabSwitch"
    >
      <nut-tabbar-item tab-title="首页">
        <template #icon>
          <IconFont font-class-name="iconfont" class-prefix="icon" name="maoyou" size="30px" />
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="发现">
        <template #icon>
          <IconFont
            font-class-name="iconfont"
            class-prefix="icon"
            name="red-chongwuroudian"
            size="28px"
          />
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="关于">
        <template #icon>
          <IconFont font-class-name="iconfont" class-prefix="icon" name="caidan" size="24px" />
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="我的">
        <template #icon>
          <IconFont font-class-name="iconfont" class-prefix="icon" name="faxian1" size="24px" />
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>
