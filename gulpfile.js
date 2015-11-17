// var gulp = require("gulp");
// var babel = require("gulp-babel");
//

const gulp = require('gulp');
const path = require('path');
const $ = require('gulp-load-plugins')();

var config = {
  src:"./app",
  dist:"./dist"
};

gulp.task('es62es5', function(){
    return gulp.src('app/es6/**/*.js')
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/scripts/'));
});



gulp.task('compass', function() {
  gulp.src('app/scss/**/*.scss')
    .pipe($.compass({
      project: path.join(__dirname, 'app'),
      css: 'css',
      sass: 'scss',
      // style:'compressed'
    }))
    .pipe(gulp.dest('app/css'));
});

gulp.task("default",['es62es5']);
