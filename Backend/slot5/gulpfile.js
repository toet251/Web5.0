var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var minify = require('gulp-minify');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');

gulp.task('serve', ['run'], function(){
    browserSync.init({
      proxy: 'http://localhost:9000',
      files: ['client/**/*.*'],
      port: 9001,
    })
})

gulp.task('run', function(){
  nodemon({
    script: 'app.js',
  })
});

gulp.task('minify', function(){
  gulp.src('src/*.js')
    .pipe(minify())
    .pipe(gulp.dest('dest'));
})

gulp.task('watch', function(){
  gulp.watch('src/*.js', function(){
    gulp.run('jshint');
    gulp.run('csslint');
  })
})

gulp.task('jshint', function(){
  gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
})

gulp.task('jshint', function(){
  gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
})

gulp.task('csslint', function() {
  gulp.src('src/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});
