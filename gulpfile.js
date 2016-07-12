var path = require("path");
var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");

var version = require('./package.json').version;
// lib versions
var versions = {
  client: version
};

var nodeRoot = "./node_modules";
var sourceRoot = "./";
var destinationRoot = "./dist";

gulp.task("default", [
  "sass"
]);

gulp.task("style", [
  "sass"
]);


function setupSass() {
  return gulp.src([
    sourceRoot + 'scss/webtop.scss'
  ])
  .pipe(sass())
  .pipe(gulp.dest(destinationRoot + '/lib/' + versions.client + '/css'));
}

gulp.task("style-watch", function (callback) {
  watch(sourceRoot + 'scss/**/*.scss', function () {
    setupSass();
  });
});

gulp.task("sass", function () {
  return setupSass();
});


