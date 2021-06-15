// vue.config.js
const webpack = require('webpack')
const path = require("path");
const IS_PROD = process.env.NODE_ENV === "production";

function resolve(dir) {
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  //基本路径
  publicPath: IS_PROD ? '/' : './',
  //构建时的输出目录
  outputDir: process.env.outputDir,
  //放置静态资源的目录
  assetsDir: "assets",
  //文件名哈希
  filenameHashing: true,
  //是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: true,
  //是否为生产环境构建生成 source map？
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  //启动项目在8080端口自动打开
  devServer: {
    open: true,
    port: 8080,
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@utils", resolve("src/common/utils"))

    if (IS_PROD) {
      // 压缩代码
      config.optimization.minimize(true);
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },
  // 第三方插件配置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/common/less/variables.less')  // 引入全局样式变量
      ] 
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}