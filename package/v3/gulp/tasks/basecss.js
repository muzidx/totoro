/*
* @Author: muzidx
* @Date:   2018-04-09 11:16:21
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-09 11:19:46
*/

const path = require('path')
const sass = require('gulp-sass')
const base64 = require('gulp-base64')

const src = './static_resource/common/css/base.css'
const dest = './static'

gulp.task('launch', function () {
  gulp.src(src)
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(base64({ debug: true }))
      .pipe(gulp.dest(dest))
})
