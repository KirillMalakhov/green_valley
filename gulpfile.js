
'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cleanss = require('gulp-cleancss');
const sourcemaps = require('gulp-sourcemaps');
const fileinclude = require('gulp-file-include');
const replace = require("replace");


// Компиляция LESS
gulp.task('less', function () {
    console.log('---------- Компиляция LESS');
    return gulp.src('./src/less/style.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 version']}),
            mqpacker
        ]))
        .pipe(cleanss())
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('html', function() {
    console.log('---------- Компиляция HTML');
    gulp.src(['./src/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./build'));
});