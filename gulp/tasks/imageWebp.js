const gulp = require('gulp');
const cwebp = require('gulp-cwebp');

// Минификация и оптимизация изображений

module.exports = function imagewebP() {
  return gulp.src(
    ['dev/static/images/**/**/*.{png,jpg}',
    '!dev/static/images/sprite/**/*']
  )
    .pipe(cwebp())
    .pipe(gulp.dest('dist/static/images/'))
};
