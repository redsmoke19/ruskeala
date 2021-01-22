const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const webp = require('imagemin-webp');

// Минификация и оптимизация изображений

module.exports = function imageMinify() {
  return gulp.src(
    ['dev/static/images/**/**/*.{gif,png,jpg,svg}',
    '!dev/static/images/sprite/**/*']
  )
    .pipe(buffer())
    .pipe(imagemin([
      webp({quality: 75})
    ]))
    .pipe(gulp.dest('dist/static/images/'))
};