const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = function (config, NODE_ENV) {

  const defaultConfig = {
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "./../../static"),
      chunkFilename: "[chunkhash].js"
    },

    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          exclude: "/node_modules/",
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader'
          })
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: ['url-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
        }
      ]
    },

    resolve: {
      extensions: [".js", ".jsx"],
      modules: ["node_modules", "./static_resource"],
      alias: {
        common: path.resolve('./static_resource/common')
      }
    },

    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          context: __dirname,
          postcss: [autoprefixer()]
        }
      })
    ],

    target: "web"
  }

  config.plugins = defaultConfig.plugins.concat(config.plugins||[])

  var result = Object.assign({}, defaultConfig, config)

  return result
}
