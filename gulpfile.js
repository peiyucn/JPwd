var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
//var sourceMaps = require('gulp-sourceMaps');
//var cleanCSS = require('gulp-clean-css');
var header = require('gulp-header');
var dateFormat = require('dateformat');
//var htmlReplace = require('gulp-html-replace');

var banner = '/* created at ${date} by ${user} */';

var paths = {
    js: {
        JPwd: {
            src: ['./src/JPwd.js'],
            dest: 'JPwd.min.js'
        }
    }
};

gulp.task('clean/js/JPwd', function () {
    return del('./src/' + paths.js.JPwd.dest);
});

gulp.task('js/JPwd', ['clean/js/JPwd'], function () {
    return gulp.src(paths.js.JPwd.src)
        // .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(concat(paths.js.JPwd.dest))
        // .pipe(sourceMaps.write('.'))
        .pipe(header(banner, {
            date: dateFormat(Date.now(), 'dddd, mmmm dS, yyyy, h:MM:ss TT'),
            user: 'Pei Yu'
        }))
        .pipe(gulp.dest('./src'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.js.JPwd.src, ['js/JPwd']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean/js/JPwd', 'js/JPwd']);

//run command 'npm start' to build