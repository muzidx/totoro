/*
* @Author: muzidx
* @Date:   2018-04-08 16:03:18
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-08 16:31:55
*/

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
    library: 'main.js',
    libraryTarget: 'umd'
  },
  module: {

  }
}
