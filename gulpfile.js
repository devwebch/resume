/**
 * Created by SIMON on 10.11.2016.
 */
var gulp    = require('gulp');
var sass    = require('gulp-sass');

gulp.task('default', function () {

});

gulp.task('sass', function () {
    return gulp.src('./css/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
   gulp.watch('./css/**/*.scss', ['sass']);
});