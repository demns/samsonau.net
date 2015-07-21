'use strict';

var gulp = require('gulp');
var babel = require("gulp-babel");
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task("start", function() {
  return gulp.src("server.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('default', function gulpDefault() {
  runSequence(
    'start',
    'sass',
    'nodemon'
  );
});

gulp.task('nodemon', function() {
  return $.nodemon({
      script: './server.js',
      ext: 'js es6 hbs',
      watch: [
        'dist'
        ],
      env: process.env,
      stdout: false
    })
    .on('readable', function() {
      this.stdout.on('data', function(chunk) {
        if (/listening/.test(chunk)) {
          $.livereload.reload();
        }
        process.stdout.write(chunk);
      });
      this.stderr.pipe(process.stderr);
    });
});
