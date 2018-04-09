/*
* @Author: muzidx
* @Date:   2018-04-08 16:50:53
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-09 11:15:20
*/

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const colros = require('colors')


module.exports = require('./webpack.config.js')({
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production")
    }),
    function () {
      this.plugin('done', function (state) {
        console.log(state.compilation.errors.red)
        process.exit(1)
      })
    }
  ]
}, 'production')
