var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function(){
	return gulp.src("sass/*.sass")
		.pipe(sass())
		.pipe(gulp.dest("css"));
});
 gulp.task("watch", function(){
  	gulp.watch('sass/**/*.sass', ['sass']);
 });



