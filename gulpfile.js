'use strict';

var gulp = require('gulp');
var babel = require("gulp-babel");
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task("default", function() {
  return gulp.src("server.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('start', function() {
  nodemon({
    script: 'dist/server.js',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    },
    tasks: ['default, sass']
  })
})
