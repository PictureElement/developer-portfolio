const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browsersync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const wait = require('gulp-wait');
const critical = require('critical').stream;
const useref = require('gulp-useref');
const gulpif = require('gulp-if');

// Initialize
// =============================================================================

// Clean dist
function cleanDist() {
    return del(['dist/**', '!dist']);
}

// Clean vendor (src)
function cleanVendor() {
    return del(['src/vendor/**', '!src/vendor']);
}

// Populate vendor (src)
function populateVendor() {
    return gulp.src([
            'node_modules/materialize-css/dist/js/materialize.min.js',
            'node_modules/materialize-css/sass/components/**/*',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/echarts/dist/echarts.min.js',
            'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
            'node_modules/@fortawesome/fontawesome-free/webfonts/**/*',
            'node_modules/simplebar/dist/simplebar.min.js',
            'node_modules/simplebar/dist/simplebar.min.css',
            'node_modules/aos/dist/aos.js',
            'node_modules/aos/dist/aos.css',
            'node_modules/headroom.js/dist/headroom.min.js'
        ], {
            base: 'node_modules/'
        })
        .pipe(gulp.dest('src/vendor/'));
}

// Copy images to dist
function copyImages() {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));
}

// Copy vendor to dist
function copyVendor() {
    return gulp.src('src/vendor/**/*')
        .pipe(gulp.dest('dist/vendor'));
}

// Copy Html to dist
function copyHtml() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
}

// Development
// =============================================================================

// Static server (src)
function browserSyncSrc(cb) {
    browsersync.init({
        server: {
            baseDir: "src"
        },
        open: "external"
    });
    cb();
}

// Browser reload
function browserReload(cb) {
    browsersync.reload();
    cb(); // Signal completion
}

// Compile Sass files
function compileSass() {
    return gulp.src('src/sass/developerportfolio.scss')
        .pipe(sass().on('error', sass.logError)) // Compile to CSS
        .pipe(gulp.dest('src/css/')) // Save to src
        .pipe(browsersync.stream()); // Inject changes without refreshing the page.
}

// Watch scss/js/html/ files
function watchFiles() {
    gulp.watch("src/sass/**/*.scss", gulp.series(compileSass));
    gulp.watch(["src/js/**/*.js"], gulp.series(browserReload));
    gulp.watch("src/*.html", gulp.series(browserReload));
}

// Production
// =============================================================================

// CSS optimization
function css() {
    return gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            cascade: false
        })) // Add vendor prefixes
        .pipe(cleanCSS({
            compatibility: 'ie8'
        })) // Minify CSS
        .pipe(gulp.dest('dist/css/'));
}

// JS optimization
function js() {
    return gulp.src('src/js/*.js')
        .pipe(uglify()) // Minify JS
        .pipe(gulp.dest('dist/js/'));
}

// Critical CSS
function criticalCSS() {
    return gulp.src('dist/*.html')
        .pipe(
            critical({
                inline: true,
                base: 'dist/',
                // ignore: ['@font-face'],
                dimensions: [{
                        // 9:16 (Mobile)
                        height: 1022,
                        width: 575,
                    },
                    {
                        // 9:16 (Tablet)
                        height: 1364,
                        width: 767,
                    },
                    {
                        // 9:16 (Tablet)
                        height: 1762,
                        width: 991,
                    },
                    {
                        // 9:16 (Tablet)
                        height: 2132,
                        width: 1199,
                    },
                    {
                        // 9:16 (Tablet)
                        height: 2132,
                        width: 1199,
                    },
                    {
                        // 3:2 (Desktop)
                        height: 800,
                        width: 1200,
                    },
                ]
            })
        )
        .on('error', function (err) {
            document(error);
        })
        .pipe(gulp.dest('dist/'));
}

// Tasks
// =============================================================================

// Define tasks
const init = gulp.series(cleanDist, cleanVendor, populateVendor, copyImages, copyTheme, copyVendor, copyHtml);
// const build = gulp.series(init, compileSass, css, js, criticalCSS);
const build = gulp.series(init, compileSass, css, js);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSyncSrc));

// Register public tasks
exports.init = init;
exports.build = build;
exports.watch = watch;
