/* Jade */
const gulp = require('gulp'),
    config = require('./config'),
    prettify = require('gulp-prettify'),
    fileinclude = require('gulp-file-include'),
     replace = require("replace"),
    newer = require('gulp-newer'),
    gutil = require('gulp-util'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    plumber = require('gulp-plumber');


gulp.task('html', function() {
    console.log('---------- Компиляция HTML');
    gulp.src(['./src/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./build'));
});


//gulp.task('jade', function() {
//    return gulp.src(config.pathTo.Src.Jade)
//        .pipe(plumber(function(error) {
//            gutil.log(gutil.colors.red(error.message));
//            this.emit('end');
//        }))
//        .pipe(newer(config.pathTo.Build.Html))
//        .pipe(jade({
//            pretty: true
//        }))
//        .pipe(prettify({indent_size: 2}))
//        .pipe(gulp.dest(config.pathTo.Build.Html))
//        .pipe(reload({stream: true}));
//});