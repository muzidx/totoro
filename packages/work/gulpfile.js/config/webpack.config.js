const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const BROWSERLIST_CONFIG = ['ios >= 8', 'android >= 4', 'safari >= 6', 'chrome >= 34']

module.exports = function(customConfig, NODE_ENV) {

  const defaultConfig = {
    output: {
      path: path.resolve(__dirname, './../../static'),
      filename: '[name].js',
      chunkFilename: '[chunkhash].js',
      sourceMapFilename: 'debugging/[file].map'
    },

    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          exclude: '/node_modules/',
          use: ExtracTextPlugin.extract({
            fallback: [{
              loader: 'style-loader'
            }],
            use: [{
              loader: 'css-loader'
            }, {
              loader: 'postcss-loader'
            }, {
              loader: 'sass-loader'
            }]
          })
        },
        {
          test: /\.(js|jsx)$/,
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 250000
            }
          }]
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: 'file-loader?name=fonts/[name].[ext]'
        },
        {
          test: /\.json$/,
          use: [{
            loader: 'json-loader'
          }]
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx', '.web.js'],
      modules: ['node_modules', './static_resource']
    },

    plugins: [
      new webpack.IgnorePlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          context: __dirname,
          postcss: [autoprefixer(BROWSERLIST_CONFIG)]
        }
      })
    ],

    target: 'web'
  }

  customConfig.plugins = defaultConfig.plugins.concat(customConfig.plugins || [])

  const result = Object.assign({}, defaultConfig, customConfig)

  return result
}
