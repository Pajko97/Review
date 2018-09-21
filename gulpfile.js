const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const minify = require('gulp-minify-css');
const plumber = require('gulp-plumber');

var input = './sass/index.scss';
var output = './compiled';

gulp.task('sass', function () {
    return gulp
      .src(input)
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer('last 2 versions'))
      .pipe(minify())
      .pipe(rename('output.css'))
      .pipe(gulp.dest(output))
  });

gulp.task('default', ['watch']);

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass'])
});
