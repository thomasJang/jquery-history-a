'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var clean = require('gulp-clean');


function errorAlert(error) {
    notify.onError({title: "Gulp Error", message: "Check your terminal", sound: "Purr"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
}

/**
 * for JS
 */
gulp.task('js', function () {
    gulp.src('src/*.js')
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(concat('jquery.history-a.js'))
        .pipe(gulp.dest('dist'))
        .pipe(concat('jquery.history-a.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

/**
 * watch
 */
gulp.task('default', function () {
    gulp.watch('src/*.js', ['js']);
});