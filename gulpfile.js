var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    
    
gulp.task('default',['index','script','comboSass','scss','watch']);


gulp.task('watch', function(){
   gulp.watch('client/views/index.html',['index']); 
   gulp.watch('client/scripts/*.js',['script']);
   gulp.watch('client/styles/scss/*.scss',['comboSass','scss']);
});

gulp.task('index', function(){
   return gulp.src('client/views/index.html')
            .pipe(gulp.dest('public/views/')); 
});

gulp.task('script', function(){
   return gulp.src('client/scripts/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('public/scripts/')); 
});

gulp.task('comboSass', function(){
   return gulp.src('client/styles/scss/*.scss')
          .pipe(concat('style.scss'))
          .pipe(gulp.dest('client/styles/'));
});

gulp.task('scss', function(){
   return sass('client/styles/*.scss')
             .pipe(gulp.dest('public/styles/')); 
});