/**
 * Created by Administrator on 2015/9/21.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('jsmin', function () {
    gulp.src(['src/js/index.js','src/js/detail.js']) //����ļ���������ʽ����
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});