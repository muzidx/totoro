const webpack = require('webpack')

module.exports = require('./webpack.config.js')({
  cache: true,
  devtool: 'eval',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
}, 'dev')
