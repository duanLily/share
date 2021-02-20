const webpack = require('webpack')
//gizp插件
const CompressionPlugin = require('compression-webpack-plugin')
/*打包进度条*/
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
/*模块打包分析*/
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const publicPath = process.env.NODE_ENV === 'production' ? '/vms/' : '/'

const proxy = require('./proxy.config')
module.exports = {
  publicPath,
  outputDir: 'vms',
  assetsDir: 'static',
  devServer: {
    //前端访问端口
    port: 8082,
    //是否自动打开浏览器
    open: false,
    //是否启用https
    https: false,

    hotOnly: false,

    proxy: proxy,

    before: app => {}
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: /\.js$|.\css/, //匹配文件名
        threshold: 10240,//对超过10k的数据压缩
        deleteOriginalAssets: false //不删除源文件
      }),
      new ProgressBarPlugin({
        format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
        clear: false
      }),
      // new BundleAnalyzerPlugin({
      // 	analyzerMode: 'static',
      // 	openAnalyzer: true,
      // 	logLevel: 'info'
      // })
    ]
  },
  css: {
    sourceMap: process.env.NODE_ENV === 'production' ? false : true,
    loaderOptions: {
      sass: {
        // 全局引入variables
        additionalData: '@import "~@/sass/variables.scss";'
      }
    }
  },
  transpileDependencies: ["vue-echarts", "resize-detector"],
  chainWebpack: config => {
    // 移除 prefetch 插件
    // config.plugins.delete("prefetch");
    // // 移除 preload 插件
    // config.plugins.delete('preload');
    // // 压缩代码
    config.optimization.minimize(process.env.NODE_ENV === 'production' ? true : false);
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
  }
};
