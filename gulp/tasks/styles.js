const plumber = require('gulp-plumber')
    , scss = require('gulp-sass')
    , autoprefixer = require('gulp-autoprefixer')
    , csso = require('gulp-csso')
    , sourcemaps = require('gulp-sourcemaps')
    , rename = require('gulp-rename');

const stylesPath = {
        "input": "./dev/styles/",
        "ouput": "./build/css/"
    };

module.exports = function () {
    $.gulp.task('styles:dev', () => {
        return $.gulp.src(stylesPath.input + 'index.scss')
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(scss())
            .pipe(autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe(sourcemaps.write())
            .pipe(csso())
            .pipe(rename('styles.min.css'))
            .pipe($.gulp.dest(stylesPath.ouput))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('styles:build', () => {
        return $.gulp.src(stylesPath.input + 'index.scss')
            .pipe(scss())
            .pipe(autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest(stylesPath.ouput))
    });
    
    $.gulp.task('styles:build-min', () => {
        return $.gulp.src(stylesPath.input + 'index.scss')
            .pipe(scss())
            .pipe(autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe(csso())
            .pipe(rename('styles.min.css'))
            .pipe($.gulp.dest(stylesPath.ouput))
    });
};