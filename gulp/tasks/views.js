const plumber           = require('gulp-plumber')
    , pug               = require('gulp-pug')
    , pugInheritance    = require('gulp-pug-inheritance')
    , changed           = require('gulp-changed')
    , cached            = require('gulp-cached')
    , gulpif            = require('gulp-if')
    , filter            = require('gulp-filter');

module.exports = function () {
    $.gulp.task('views', () => {
        return $.gulp.src('./dev/views/*.pug')
            .pipe(changed('dist', {extension: '.html'}))
            .pipe(gulpif(global.isWatching, cached('pug')))
            .pipe(pugInheritance({basedir: './dev/views/', skip: 'node_modules'}))
            .pipe(filter(function (file) {
                return !/\/_/.test(file.path) && !/^_/.test(file.relative);
            }))
            .pipe(plumber())
            .pipe(pug({
                pretty: true
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};