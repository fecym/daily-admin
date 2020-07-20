const chalk = require("chalk");

const PROXY_ENV = process.env.PROXY_ENV || "prod";

const targets = {
  dev: "http://localhost:3000",
  uat: "http://106.75.126.203:3000",
  // prod: "https://chengyuming.cn"
  prod: "http://chengyuming.cn"
};

if (process.env.NODE_ENV === 'development') {
  console.log(chalk.green.bold(`代理到${PROXY_ENV}环境：${targets[PROXY_ENV]}`))
}

module.exports = {
  overlay: {
    warnings: false,
    errors: true
  },
  progress: false,
  open: true,
  proxy: {
    "/api": {
      target: targets[PROXY_ENV],
      ws: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api/": "/api/"
      }
    }
  }
}