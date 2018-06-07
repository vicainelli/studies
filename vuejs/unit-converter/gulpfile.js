var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('css', function () {
  var postcss = require('gulp-postcss');
  var tailwindcss = require('tailwindcss');

  return gulp.src('src/styles.css')
    .pipe(postcss([
      tailwindcss('./tailwind.js'),
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest('build/'));
});
