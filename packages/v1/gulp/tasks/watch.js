/*
* @Author: lidongxue
* @Date:   2018-04-08 12:08:15
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-08 14:55:39
*/

var gulp = require('gulp')
var BrowserSync = require('browser-sync')

gulp.task('watch', function() {
  BrowserSync.init('./', { server: { baseDir: './' } })

  gulp.watch('src/css/*', ['sass'])
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch('src/images/*', ['images'])
})
