var gulp=require('gulp');
var sass=require('gulp-sass');
gulp.task('sass',function(){
return gulp.src('./sass/*.scss')
.pipe(sass())
.pipe(gulp.dest('./css'))
	
});
gulp.task('listen',function(){
gulp.watch('./sass/*.scss',gulp.series('sass'));	
})