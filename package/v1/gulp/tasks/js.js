/*
* @Author: lidongxue
* @Date:   2018-04-08 12:09:15
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-08 14:19:41
*/

var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')

// 压缩
gulp.task('js', function() {
  return gulp.src('src/js/*.js')
             .pipe(concat('main.js'))
             .pipe(uglify())
             .pipe(gulp.dest('dist/js'))
})
