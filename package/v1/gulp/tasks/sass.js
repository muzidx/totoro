/*
* @Author: lidongxue
* @Date:   2018-04-08 12:08:15
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-08 14:42:28
*/

var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var minifycss = require('gulp-minify-css')


// 编译，合并，压缩，重命名 css 文件
gulp.task('sass', function() {
  return gulp.src('src/css/*')
             .pipe(sass())
             .pipe(autoprefixer())
             .pipe(concat('main.css'))
             .pipe(rename('style.css'))
             .pipe(minifycss())
             .pipe(gulp.dest('dist/css'))
})
