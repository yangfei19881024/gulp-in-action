const gulp = require('gulp');
const path = require('path');
const $ = require('gulp-load-plugins')();

//配置路径
var config = {
  root:'app/',
  sassfile:"app/scss/**/*.scss",
  es6file:"app/es6/**/*.js",
  htmlfile:"app/**/*.html",
  dist:"./dist"
};

gulp.task('es62es5', function(){
    return gulp.src(config.es6file)
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/scripts/'))
        .pipe($.connect.reload())
});

gulp.task('compass', function() {
  gulp.src(config.sassfile)
    .pipe($.plumber())
    .pipe($.compass({
      project: path.join(__dirname, 'app'),
      css: 'css',
      sass: 'scss',
      // style:'compressed'
    }))
    .pipe(gulp.dest('app/css'))
    .pipe($.connect.reload())
});

gulp.task('html', function() {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest(''))
        .pipe($.connect.reload())
});

//!!!!!!一定要注意－－－> watch 不能用 $.watch 而是用 gulp.watch
gulp.task("watch",function(){
  gulp.watch(config.sassfile,['compass']);
  gulp.watch(config.es6file,['es62es5']);
  gulp.watch(config.htmlfile,['html']);
});

gulp.task("connect",function(){
  $.connect.server({
    root:config.root,
    port: 3000,
    livereload: true
  });
});

gulp.task("default",['watch','connect','compass','es62es5']);
