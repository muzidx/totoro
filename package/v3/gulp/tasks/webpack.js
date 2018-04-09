/*
* @Author: muzidx
* @Date:   2018-04-08 16:46:54
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-09 11:16:26
*/

const gulp = require('gulp')
const path = require('path')
const util = require('gulp-util')
const inquirer = require("inquirer")
const webpack = require('webpack')
const requireDir = require('require-dir')

const webpackEntry = requireDir(path.resolve(__dirname, '../entry'))

const argv = require('yargs')
           .array('entry')
           .default('entry', [])
           .alias('e', 'entry')
           .argv;

const question = [
  {
    name: "entry",
    type: "checkbox",
    message: "Select entry",
    choices: [{name: 'ALL'}].concat(Object.keys(webpackEntry).map(function(item) {
      return {
        name: item
      }
    })),
    validate: function(answer) {
      if (answer.length < 1) {
        return "You must choose at least one entry."
      }
      return true
    }
  }
]

var module_name = ''

function prompt(entry) {
  function getEntryMap(entry) {
    return entry.reduce(function(result, item) {
      if(webpackEntry[item]) {
        result = Object.assign(result, webpackEntry[item])
      }
      return result
    }, {})
  }

  if(entry.length > 0) {
    return getEntryMap(entry)
  }

  return new Promise(function(resolve, reject) {
    inquirer.prompt(question).then(function(answers) {
      if(~answers.entry.indexOf('ALL')) {
        resolve(getEntryMap(Object.keys(webpackEntry)))
      } else {
        module_name = answers.entry[0]
        resolve(getEntryMap(answers.entry))
      }
    })
  })
}

function getEntry() {
  return Promise.resolve(argv.entry).then(prompt)
}

gulp.task('webpack:dev', function(callback) {
  getEntry().then(function(entry) {
    var webpackConfig = require('../config/webpack.dev.js');
    webpackConfig.entry = Object.assign({}, entry, webpackConfig.entry)
    var devCompiler = webpack(webpackConfig)

    var first = true

    devCompiler.watch({
      aggregateTimeout: 500,
      poll: true
    }, function(err, stats) {
      if (err) {
        throw new util.PluginError('[webpack ERROR]', err)
      }
      util.log('[webpack]', stats.toString({
        colors: true
      }))

      if (first) {
        callback()
        first = false;
      }
    })

  }).catch(function (err) {
    console.warn(err)
  })

})

gulp.task('webpack:build', function(callback) {
  getEntry().then(function(entry) {
    var webpackConfig = require('../config/webpack.production.js')

    webpackConfig.entry = Object.assign({}, entry, webpackConfig.entry)
    var buildCompiler = webpack(webpackConfig)

    buildCompiler.run(function(err, stats) {
      if (err) {
        throw new util.PluginError('[webpack ERROR]', err)
      }
      util.log('[webpack]', stats.toString({
        colors: true
      }))

      callback()
    })

  }).catch(function (err) {
    console.warn(err)
  })
})
