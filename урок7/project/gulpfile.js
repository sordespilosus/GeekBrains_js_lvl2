const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const minifyCSS = require('gulp-minify-css');

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
	})
});

gulp.task('watch', ['browserSync', 'sass-compile'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass-compile']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('sass-compile', function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('useref', function () {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', minifyCSS()))
	.pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'));
});