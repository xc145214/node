/**
 * Created by Administrator on 2015/9/21.
 */

//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    uglify = require('gulp-uglify'),    //js -> min.js
    less = require('gulp-less'),      //less -> css
    cssmin = require('gulp-minify-css'), //css - .min.css
    cssver = require('gulp-make-css-url-version') //css ->css?v 添加版本号
    concat = require('gulp-concat')
    ;
/**
 * 定义一个testLess任务（自定义任务名称）
 */

gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});

/**
 * 定义一个合并js 的任务
 */
gulp.task('testConcat', function () {
   gulp.src('src/js/*.js')
       .pipe(concat())
       .pipe(gulp.dest('src/js/all.js'))
});
/**
 * 定义一个压缩js  的任务
 */
gulp.task('jsmin', function () {
    gulp.src('src/js/index.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

/**
 * css 压缩任务 并添加版本号
 */
gulp.task('cssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true//类型：Boolean 默认：false [是否保留换行]
        })).
        pipe(cssver())
        .pipe(gulp.dest('dist/css'))
});




gulp.task('default', ['testLess', 'elseTask']); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径