import Components from 'unplugin-vue-components/webpack';
import AutoImport from 'unplugin-auto-import/webpack'

import NutUIResolver from '@nutui/nutui-taro/dist/resolver';
import path from "node:path"


// webpack 配置
const commonChain = (chain) => {
  // 自动导入
  // https://github.com/antfu/unplugin-auto-import
  chain.plugin('unplugin-auto-import').use(
    AutoImport({
      imports: [
        'vue',
        // https://vuejs.org/guide/extras/reactivity-transform.html#refs-vs-reactive-variables
        'vue/macros',
      ],
      // 自动生成 ts 声明文件的位置
      dts: 'types/auto-imports.d.ts',
      // 自动导入方法所在的文件目录- 这里添加 utils 和 store
      dirs: ['src/utils', 'src/store'],
      vueTemplate: true,
    }),
  )
  chain.plugin('unplugin-vue-components').use(Components({
    resolvers: [NutUIResolver({ taro: true })]
  }))

}

const config = {
  projectName: 'miaooo-new',
  date: '2023-6-7',
  designWidth (input) {
    if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
      return 375
    }
    return 750
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    // 添加 taro-plugin-unocss
    [
      'taro-plugin-unocss',
      {
        preset: {
          remToRpx: {
            // 设置 unocss 转 rpx基数，保证1:1 转换。 例如  10rem 转为10rpx
            baseFontSize: 4,
          },
        },
      },
    ],
    '@tarojs/plugin-http',
    '@tarojs/plugin-html'
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false }
  },
  cache: {
    enable: true // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  sass: {
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  // 路径别名设置
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  mini: {
    webpackChain (chain) {
      commonChain(chain)
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          // selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    webpackChain (chain) {
      commonChain(chain)
    },
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nutui-taro', 'icons-vue-taro'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
