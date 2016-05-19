var gulp = require('gulp'),
	del = require('del'),//删除文件插件
	rename = require('gulp-rename')//修改文件的命名方式
	htmlmin = require('gulp-htmlmin'), //html压缩
	minifycss = require('gulp-minify-css'),//压缩css插件
    imagemin = require('gulp-imagemin'),//图片压缩
    pngquant = require('imagemin-pngquant'),//对png图片进行深度压缩
    cache = require('gulp-cache'),//只压缩修改的图片，没有修改的图片从缓存文件读取
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    
    htmlSrc = 'WEB-INF/templates/*/*.html',
    htmlDest = 'WEB-INF/templates/minified',
    cssSrc = 'WEB-INF/css/*.css',
    cssDest = 'WEB-INF/css/minified',
    jsSrc = ['WEB-INF/js/*.js','WEB-INF/js/*/*.js'],
    jsDest = 'WEB-INF/js/minified',
    imgSrc = 'WEB-INF/img/*.{png,jpg,gif,ico}',
    imgDest = 'WEB-INF/img/minified';


//html压缩任务
gulp.task('minifyhtml', function () {
gulp.src(htmlSrc)
    .pipe(htmlmin({
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    }))
    .pipe(gulp.dest(htmlDest));
});

//css压缩任务
gulp.task('minifycss',function(){
	return gulp.src(cssSrc)//压缩的文件夹
	.pipe(minifycss())//执行压缩
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest(cssDest))//输出文件夹
});

//js压缩任务
gulp.task('minifyjs', function () {
    gulp.src(jsSrc)
        .pipe(uglify({
            //mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: {except: ['require' ,'exports' ,'module' ,'$']}//排除混淆关键字
        }))
        .pipe(gulp.dest(jsDest));
});

//文件合并任务
gulp.task('concatfiles', function () {
    gulp.src('WEB-INF/js/controllers/*.js')
        .pipe(concat('controllers.js'))//合并后的文件名
        .pipe(gulp.dest('WEB-INF/js/controllers'));
});

//图片压缩任务
gulp.task('minifyimg',function(){
	gulp.src(imgSrc)
		.pipe(cache(imagemin({
		    optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true,//类型：Boolean 默认：false 多次优化svg直到完全优化
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
		})))
		.pipe(gulp.dest(imgDest));
});

//执行压缩前，先删除文件夹里的内容
gulp.task('clean', function(cb) {
    return del([htmlDest,cssDest,jsDest,imgDest], cb);
});

//定义一个默认的任务,我们执行gulp命令的时候如果什么参数都不带，那么这个任务会执行
gulp.task('default', function() {
	console.log('开始构建');
	gulp.start('clean');
    //gulp.start('minifyhtml');
    //gulp.start('minifycss');
    gulp.start('concatfiles');
    console.log('构建结束');
});