var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: ['node_modules/catalyst-styles/source'],
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('fonts', function() {
   gulp.src('node_modules/catalyst-styles/dist/fonts/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('assets/fonts'));
});

gulp.task('default', gulp.series('sass', function() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
}));