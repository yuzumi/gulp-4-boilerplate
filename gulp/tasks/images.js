const imagemin                  = require('gulp-imagemin')
    , imageminJpegRecompress    = require('imagemin-jpeg-recompress')
    , pngquant                  = require('imagemin-pngquant')
    , cache                     = require('gulp-cache');

const imagesPath = {
    'input': ['./dev/images/**/*.{png,jpg,gif,svg}', '!./dev/images/svg/*'],
    'ouput': './build/img/'
};

module.exports = function () {
    $.gulp.task('images:dev', () => {
        return $.gulp.src(imagesPath.input)
            .pipe($.gulp.dest(imagesPath.ouput));
    });

    $.gulp.task('images:build', () => {
        return $.gulp.src(imagesPath.input)
            .pipe(cache(imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.jpegtran({progressive: true}),
                imageminJpegRecompress({
                    loops: 5,
                    min: 70,
                    max: 75,
                    quality: 'medium'
                }),
                imagemin.svgo(),
                imagemin.optipng({optimizationLevel: 3}),
                pngquant({quality: '65-70', speed: 5})
            ], {
                verbose: true
            })))
            .pipe($.gulp.dest(imagesPath.ouput));
    });
};