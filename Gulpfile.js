var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');


gulp.task('meow', function(){
	console.log('meow meow');
})

 
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/css'));
});

