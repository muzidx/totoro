/*
* @Author: muzidx
* @Date:   2018-04-08 16:50:38
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-08 17:57:03
*/

const webpack = require('webpack')
const colros = require('colors')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = require('./webpack.config.js')({
  cache: true,
  devtool: 'eval',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("dev")
    }),
    new ExtractTextPlugin("[name].css")
  ],
  devServer: {
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    contentBase: './static_resource'
  }
}, 'dev')
