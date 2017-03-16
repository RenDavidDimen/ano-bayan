var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync');
var del = require('del');
var cache = require('gulp-cache');
var runSequence = require('run-sequence');

// ----------------
//  For Building
// ----------------

gulp.task('default', function(callback){
    runSequence('pug', ['sass', 'browserSync', 'watch'], callback)
});

gulp.task('build', function (callback){
    runSequence('clean:dist', 'pug', 'sass', ['useref', 'images'], callback)
});

gulp.task('preview', function(callback){
    runSequence('build', 'browserPreview', callback)
});

gulp.task('watch', ['browserSync', 'sass', 'pug'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/pug/**/*.pug', ['pug']);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('browserPreview', function(){
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
});

// ----------------
//  For Cleaning
// ----------------
gulp.task('clean:dist', function(){
    return del.sync('dist');
});

gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
})

require('require-dir')('./gulp-tasks');