module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/views/**/*.pug', $.gulp.series('views'));
        $.gulp.watch('./dev/styles/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/images/**/*.{png,jpg,gif}', $.gulp.series('images:dev'));
        $.gulp.watch('./dev/scripts/**/*.js', $.gulp.series('scripts:dev'));
    });
};