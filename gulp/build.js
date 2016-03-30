/* Build */
var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
    runSequence(
        'clean',
        'html',
        'bower',
        'js',
        'png-sprite',
        'images',
        'svg',
        'svg-sprite',
        'fonts',
        'less',
        'txt',
        'js-doc',
        'scss-doc',
        //'gh-pages',
        callback)
});
