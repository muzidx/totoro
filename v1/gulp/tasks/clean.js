/*
* @Author: lidongxue
* @Date:   2018-04-08 12:08:15
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-08 12:32:49
*/

var gulp = require('gulp')
var del = require('del')

gulp.task('clean', function(callback) {
  return del('dist', callback)
})
