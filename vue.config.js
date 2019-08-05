const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 基本路径
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  assetsDir: "static",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    //  配置对应外网访问时对应的 host ,可从 window.location.host  取到
    // 解决外网访问无法热更新的问题
    // sockHost: "test.lcsw.cn:8057",
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 8000,
    hot: true,
    https: false,
    hotOnly: false,
    proxy: null
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  // configureWebpack: {
  //     externals: {
  //         'vue': 'Vue',
  //         'vue-router': 'VueRouter',
  //         'vuex': 'Vuex',
  //         'aixos': 'aixos',
  //         'dayjs': 'dayjs'
  //     }
  // },
  parallel: require("os").cpus().length > 1
};
