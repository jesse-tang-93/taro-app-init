import { defineStore } from 'pinia'


// 公用全局store
export const useAppStore = defineStore('appStore', {
  state: () => {
    return {
      activeTabBar: 0,
      serverDate: '', // 服务器端时间
    }
  },
  actions: {
    setActiveTabBar(val) {
      this.activeTabBar = val
    },
    // 获取服务器时间
    setServerDate(v) {
      this.serverDate = v
    },
  },
})
