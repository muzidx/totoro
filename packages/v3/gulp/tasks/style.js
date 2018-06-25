/*
* @Author: muzidx
* @Date:   2018-04-09 11:16:21
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-09 12:39:01
*/

const path = require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')
const base64 = require('gulp-base64')
const rename = require('gulp-rename')

gulp.task('common:css', function () {
  gulp.src('./static_resource/common/css/base.scss')
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(base64({ debug: true }))
      .pipe(rename('common.css'))
      .pipe(gulp.dest('./static'))
})
