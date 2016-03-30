/* SASS */
var gulp = require('gulp'),
    config = require('./config'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    cssshrink = require('gulp-cssshrink'),
    csscomb = require('gulp-csscomb'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    newer = require('gulp-newer'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    plumber = require('gulp-plumber');

gulp.task('less', function () {
    gulp.src(config.pathTo.Src.MainStyleFile)
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(newer(config.pathTo.Build.Styles))
        .pipe(sourcemaps.init())
        .pipe(less.sync().on('error', less.logError))
        .pipe(autoprefixer(config.autoprefixerBrowsers))
        //.pipe(cssshrink())
        .pipe(csscomb())
        .pipe(gulp.dest(config.pathTo.Build.Styles))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.pathTo.Build.Styles))
        .pipe(reload({stream: true}));
});

//
//'use strict';
//
//const gulp = require('gulp');
//const less = require('gulp-less');
//const rename = require('gulp-rename');
//const postcss = require('gulp-postcss');
//const autoprefixer = require('autoprefixer');
//const mqpacker = require('css-mqpacker');
//const cleanss = require('gulp-cleancss');
//const sourcemaps = require('gulp-sourcemaps');
//const fileinclude = require('gulp-file-include');
//const replace = require("replace");
//
//
//// Компиляция LESS
//gulp.task('less', function () {
//    console.log('---------- Компиляция LESS');
//    return gulp.src('./src/less/style.less')
//        .pipe(sourcemaps.init())
//        .pipe(less())
//        .pipe(postcss([
//            autoprefixer({browsers: ['last 2 version']}),
//            mqpacker
//        ]))
//        .pipe(cleanss())
//        .pipe(rename('style.min.css'))
//        .pipe(sourcemaps.write())
//        .pipe(gulp.dest('./build/css'));
//});
//
//
//gulp.task('html', function() {
//    console.log('---------- Компиляция HTML');
//    gulp.src(['./src/*.html'])
//        .pipe(fileinclude({
//            prefix: '@@',
//            basepath: '@file'
//        }))
//        .pipe(gulp.dest('./build'));
//});