// const pxtoviewport = require("postcss-px-to-viewport");

module.exports = {
  plugins: {
    autoprefixer: {},
    // 'postcss-px-to-viewport': {
    //   viewportWidth: 375,
    //   unitPrecision: 3, // px to vw无法整除时，保留几位小数
    //   viewportUnit: 'vw', // 转换成vw单位
    //   selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
    //   minPixelValue: 1, // 小于1px不转换
    //   mediaQuery: false // 允许媒体查询中转换
    // }
  }
}
