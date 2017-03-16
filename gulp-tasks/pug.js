var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');

gulp.task('pug', function(){
  return gulp.src('./app/pug/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./app'))
    .pipe(browserSync.reload({
      stream: true
    }))
});