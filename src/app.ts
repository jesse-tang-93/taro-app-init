import Taro from '@tarojs/taro'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'uno.css'
import './app.scss'
import './assets/font/iconfont.css'
// 版本更新
const updateManager = Taro.getUpdateManager()

const App = createApp({
  // 程序启动或者由后台切换到前台时触发
  onShow() {
    updateManager.onCheckForUpdate((res) => {
      // 请求完新版本信息的回调
      // console.log(res.hasUpdate)
      if (res.hasUpdate) {
        updateManager.onUpdateReady(() => {
          Taro.showModal({
            title: '更新提示',
            content: '新版本已经准备好，点击确定重启小程序',
            success(res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            },
          })
        })
      }
    })
    // 新版本下载失败
    updateManager.onUpdateFailed((res) => {
      console.error(res)
    })
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())

export default App
