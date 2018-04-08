/*
* @Author: muzidx
* @Date:   2018-04-08 16:50:53
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-08 17:54:03
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
      compress: {
        warnings: false
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production")
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("[name].css"),
    function () {
      this.plugin('done', function (state) {
        console.log(state.compilation.errors.red)
        process.exit(1)
      })
    }
  ]
}, 'production')
