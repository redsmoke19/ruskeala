const gulp = require('gulp');
const script = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const files = require('./gulp/tasks/files');
const vendors = require('./gulp/tasks/vendorsJS');
const imageMinify = require('./gulp/tasks/imageMinify');
const imageWebP = require('./gulp/tasks/imageWebp');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const serve = require('./gulp/tasks/serve');
const spritePNG = require('./gulp/tasks/spritePNG');

const critical = require('critical').stream;

// Generate & Inline Critical-path CSS
gulp.task('critical', () => {
  return gulp
    .src('dist/*.html')
    .pipe(
      critical({
        base: 'dist/',
        inline: true,
        css: ['dist/static/css/styles.css'],
      })
    )
    .pipe(gulp.dest('dist'));
});

const dev = gulp.parallel(pug2html, script, vendors, styles, imageMinify, spriteSVG, spritePNG, files, fonts, imageWebP);

exports.default = gulp.series(
  clean,
  dev,
  serve
);
