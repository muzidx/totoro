/*
* @Author: lidongxue
* @Date:   2018-04-08 12:08:15
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-08 15:13:58
*/

var gulp = require('gulp')
var runSequence = require('gulp-run-sequence')

gulp.task('default', function() {
  runSequence('clean', 'sass', 'js', 'images', 'watch')
})

gulp.task('build', function() {
  runSequence('clean', 'html', 'sass', 'js', 'images')
})
