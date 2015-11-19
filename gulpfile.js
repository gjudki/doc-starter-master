'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concatCss("app.css"))
    .pipe(minifyCss("app.css"))
    .pipe(gulp.dest('.'));
});

gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
