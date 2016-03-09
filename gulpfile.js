var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('./public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/sass/**/*.scss', ['sass']);
});

gulp.task('serve', function (cb) {
    nodemon({
        script  : './bin/www'
    }).on('start', function () {
        setTimeout(function () {
            livereload.changed();
        }, 2000); // wait for the server to finish loading before restarting the browsers
    });
});

gulp.task('default',['serve','sass:watch']);
