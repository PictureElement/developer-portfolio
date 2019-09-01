const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const wait = require('gulp-wait');

// Clean vendor directory
function clean(cb) {
  del(['vendor/**', '!vendor']);
  cb();
}

// Copy third-party modules in vendor directory
function copy(cb) {
  gulp.src([
    'node_modules/materialize-css/dist/js/materialize.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/materialize-css/sass/components/**/*',
    'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    'node_modules/@fortawesome/fontawesome-free/webfonts/**/*'
  ], {base: 'node_modules/'})
  .pipe(gulp.dest('vendor/'));
  cb();
}

// Compile Sass file, minify CSS file and auto-inject into browser.
function css(cb) {
  gulp.src('sass/developerportfolio.scss')
    .pipe(wait(200))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({cascade: false}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/'));
  cb();
}

// Minify JavaScript file and auto-inject into browser.
function js(cb) {
  gulp.src('js/developerportfolio.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js/'));
  cb();
}

// Browser reload
function browserReload(cb) {
  browserSync.reload();
  cb();
}

// Static Server + watching scss/js/html/ files
function serve(cb) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("sass/developerportfolio.scss", gulp.series(css, browserReload));
  gulp.watch("js/developerportfolio.js", gulp.series(js, browserReload));
  gulp.watch("index.html").on('change', browserSync.reload);
  cb();
}

// Define complex tasks
const vendor = gulp.series(clean, copy);
const build = gulp.series(vendor, gulp.parallel(css, js));
const watch = gulp.series(build, serve);

// Register public tasks
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;

