var gulp = require('gulp');
var paths = require('../paths');
var yuidoc = require('gulp-yuidoc');

gulp.task('doc', function(){
  return gulp.src(paths.source)
    .pipe(yuidoc())
    .pipe(gulp.dest(paths.doc));
});

