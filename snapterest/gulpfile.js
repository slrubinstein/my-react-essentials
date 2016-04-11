var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');

gulp.task('default', function() {
	return browserify('./source/app3.react.js')
		.transform(babelify, { presets: ['react'] } )
		.bundle()
		.pipe(source('snapterest.js'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
  watch('source/*.js', function () {
  	console.log('=============', arguments, '=======================')
    gulp.start('default');
	});
})