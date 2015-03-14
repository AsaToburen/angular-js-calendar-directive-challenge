var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');



gulp.task('compile-sass', function () {
    
    return sass('./app/styles/main.scss')
        // Convert sass into css
        .pipe(gulp.dest('./app/styles'))
        .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./app/styles/main.scss', ['compile-sass']);
  livereload.listen();
});

gulp.task('default', ['watch', 'compile-sass']);