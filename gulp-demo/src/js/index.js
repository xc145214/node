/**
 * Created by Administrator on 2015/9/21.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('jsmin', function () {
    gulp.src(['src/js/index.js','src/js/detail.js']) //多个文件以数组形式传入
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});