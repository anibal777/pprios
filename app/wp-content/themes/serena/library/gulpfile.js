
// define package
var gulp = require('gulp'),
	less = require('gulp-less'),
	cssnano = require('gulp-cssnano'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	cleanCSS = require('gulp-clean-css')
	rename = require('gulp-rename');

// tasks
// less mappgins files
gulp.task('styles', function(){
	gulp.src(['less/style.less'])
	.pipe(plumber())
	.pipe(less())
	.pipe(autoprefixer({browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']}))
	//.pipe(cssnano())
	.pipe(rename({ suffix: '.min' }))
	.pipe(cleanCSS())
	.pipe(gulp.dest('css/'));
});


// dev default tasks
gulp.task('default', ['styles']);
