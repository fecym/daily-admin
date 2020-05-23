// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const devServer = require('./config/devServer')
const { chainWebpack, configureWebpack } = require('./config/webpack')

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, on Mac: sudo npm run / sudo yarn
// const devServerPort = 9527 // TODO: get this variable from setting.ts
// const mockServerPort = 9528 // TODO: get this variable from setting.ts
const name = 'Daily Admin' // TODO: get this variable from setting.ts
const isProduction = process.env.NODE_ENV === 'production'
const analyzerPort = 8989

module.exports = {
  // 打包的文件放在哪
  outputDir: 'love',
  // 部署虚拟文件夹配置
  publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer,
  pwa: {
    name: name,
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: path.resolve(__dirname, 'src/pwa/service-worker.js')
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: isProduction,
      analyzerPort
    }
  },
  chainWebpack,
  configureWebpack,
  // 生产环境的sourceMap
  productionSourceMap: false,
  // 并行优化
  parallel: require('os').cpus().length > 1
}
