const webpack = require('webpack')
const path = require('path')
const DLL_DIR = '../public/dll/'

const TerserPlugin = require('terser-webpack-plugin')

const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

const isProduction = process.env.NODE_ENV === "production";

const HappyPack = require('happypack')
const parallel = require('os').cpus().length
const happyThreadPool = HappyPack.ThreadPool({ size: parallel })
const createHappyPlugin = (id, loaders) => new HappyPack({
  id,
  loaders,
  threadPool: happyThreadPool,
  verbose: process.env.HAPPY_VERBOSE === '1' // make happy more verbose with HAPPY_VERBOSE=1
});

module.exports = {
  // webpack的层叠配置
  chainWebpack: config => {

    config.resolve.alias
      .set('@', path.resolve(__dirname, "../src/"))

    // config.plugins.delete('prefetch')
    // 移除 preload 插件
    // config.plugins.delete('preload')
    // 编译 js
    const jsRule = config.module.rule("js");
    jsRule.uses.clear();
    jsRule
      .use("happypack/loader?id=babel")
      .loader("happypack/loader?id=babel")
      // .include.add('src')
      .end();

    // cdn
    // config.externals({
    //   'echarts': "echarts"
    // })
    // 分割vendor

    if (isProduction) {
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' //只打包初始时依赖的第三方
          },
          echarts: {
            name: 'chunk-echarts', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]echarts[\\/]/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons-components',
            test: path.join(__dirname, '../src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      config.optimization.runtimeChunk('single')

      config.optimization.minimizer('js').use(TerserPlugin, [{
        terserOptions: {
          cache: true,
          parallel: parallel - 1,
          compress: {
            drop_console: true,
            pure_funcs: ['console.log']
          }
        }
      }])
    }
  },
  configureWebpack: config => {
    const pluginsBase = [
      // new HappyPack({
      //   id: "babel",
      //   loaders: ["babel-loader?cacheDirectory=true"],
      //   threadPool: happyThreadPool,
      // }),
      createHappyPlugin('babel', [{
        loader: 'babel-loader',
        options: {
          babelrc: true,
          cacheDirectory: true // 启用缓存
        }
      }]),
      new webpack.DllReferencePlugin({
        // context: process.cwd(), // 与DllPlugin中的context保持一致
        /* 这个地址对应webpack.dll.conf.js中生成的那个json文件的路径，这样webpack打包的时候
        会检测当前文件中的映射，不会把已经存在映射的包再次打包进bundle.js */
        manifest: require(DLL_DIR + 'vendor-manifest.json')
      }),
      new webpack.DllReferencePlugin({
        manifest: require(DLL_DIR + 'elementUI-manifest.json')
      }),
      new webpack.DllReferencePlugin({
        manifest: require(DLL_DIR + 'vue-manifest.json')
      }),
    ]
    const pluginsPro = [
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
    if (isProduction) {
      config.plugins = [...config.plugins, ...pluginsBase, ...pluginsPro]
    } else {
      config.plugins = [...config.plugins, ...pluginsBase]
    }
  },
}