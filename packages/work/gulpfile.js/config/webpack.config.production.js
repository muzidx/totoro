const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const color = require('color')

module.exports = require('./webpack.config.js')({
  devtool: 'inline-source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: true
    }),
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}, 'production')
