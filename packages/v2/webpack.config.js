/*
* @Author: muzidx
* @Date:   2018-04-08 16:03:18
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-10 16:07:57
*/

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: node_modules,
        loader: 'babcl-loader',
        options: {
          presets: ["es2015"]
        }
      }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.resolve(__dirname, 'src')]
  },
  target: 'web'
}
