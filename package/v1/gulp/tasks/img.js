/*
* @Author: lidongxue
* @Date:   2018-04-08 12:08:15
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-08 14:41:47
*/

var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var pngcrush = require('imagemin-pngcrush')

gulp.task('images', function() {
  return gulp.src('src/images/*')
             .pipe(imagemin({
              progressive: true,
              svgPlugins: [{removeViewBox:false}],
              use: [pngcrush()]
             }))
             .pipe(gulp.dest('dist/images/'))
})
