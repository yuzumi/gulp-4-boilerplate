const uglify = require('gulp-uglify')
    , concat = require('gulp-concat');

const scriptsPath = {
    "input": "./dev/scripts/",
    "ouput": "./build/js/"
};

module.exports = function () {
    $.gulp.task('scripts:dev', () => {
        return $.gulp.src(scriptsPath.input + '*.js')
            .pipe($.gulp.dest(scriptsPath.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts:build', () => {
        return $.gulp.src(scriptsPath.input + '*.js')
            .pipe($.gulp.dest(scriptsPath.ouput))
    });

    $.gulp.task('scripts:build-min', () => {
        return $.gulp.src(scriptsPath.input)
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPath.ouput))
    });
};