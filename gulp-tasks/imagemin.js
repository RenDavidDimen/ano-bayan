var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var gutil = require('gulp-util');

gulp.task('images', function(){
    return gulp.src('./app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .on('end', function(){ gutil.log('Minifying Images...'); })
        .pipe(cache(imagemin({
            progressive: true
        })))
        .pipe(gulp.dest('./dist/images'))
});
