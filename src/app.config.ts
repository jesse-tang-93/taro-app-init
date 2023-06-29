const defaultConfig = defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/find/index',
    'pages/about/index',
    'pages/sitter/index',
    'pages/sitterDetail/index'
  ],
  window: {
    /**
     * 导航栏表现
     */
    // 导航栏背景颜色
    navigationBarBackgroundColor: '#ffffff',
    // 导航栏标题
    navigationBarTitleText: '橘胖胖',
    // 导航栏标题颜色
    navigationBarTextStyle: 'black',
    // 导航栏样式
    navigationStyle: 'custom', // default - 默认  custom -自定义导航栏-只保留右上胶囊按钮
    /**
     * 窗口表现
     */
    // 窗口背景色
    backgroundColor: undefined,
    // 下拉 loading 的样式，仅支持 dark / light
    backgroundTextStyle: 'light',
    // 顶部窗口的颜色  仅 ios 支持
    backgroundColorTop: '#ffffff',
    // 底部窗口的背景色，仅 iOS 支持
    backgroundColorBottom: '#ffffff',
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/find/index',
        text: '发现',
      },
      {
        pagePath: 'pages/about/index',
        text: '关于',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
      },
    ],
  },
  /**
 * 小程序端特有属性
 */
  entryPagePath: 'pages/index/index', // 指定小程序默认启动路径
  debug: true,
  // 接口权限相关设置
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示',
    },
  },
  // 后台使用的能力
  requiredBackgroundModes: ['audio', 'location'], // 后台运行时需要的权限类型-后台使用的能力
})
/**
 * wx小程序端特有属性
 */
if (process.env.TARO_ENV === 'weapp') {
  const weAppConfig = defineAppConfig({
    // 申明需要使用的地理位置接口
    requiredPrivateInfos: [
      // 'getFuzzyLocation',
      'getLocation',
      'onLocationChange',
      'startLocationUpdate',
      'startLocationUpdateBackground',
      'chooseLocation',
      'chooseAddress',
      'choosePoi',
    ],
  })
  Object.assign(defaultConfig, weAppConfig)
}

/**
 * h5端特有属性
 */
if (process.env.TARO_ENV === 'h5') {
  const h5Config = defineAppConfig({
    animation: { duration: 300, delay: 50 }, // 开启路由动画功能
  })
  Object.assign(defaultConfig, h5Config)
}

export default {
  ...defaultConfig,
}

