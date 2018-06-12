var gulp = require('gulp'),
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');



gulp.task('sass', function(){
    return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss'])
    .pipe(sass({outputStyle: "expanded"}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
    });

gulp.task('watch',function(){
    gulp.watch(['src/sass/**/*.sass', 'src/sass/**/*.scss'],['sass']);
    
});

 
gulp.task('auto', () =>
    gulp.src('css/styles.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('default', ['watch']);
