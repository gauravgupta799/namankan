const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const browsersync = require('browser-sync').create();

const cssFiles = [
    'asset/scss/main.scss',
    'asset/venders/swiper/css/swiper.min.css',
    ];
    
    //sass task for style css
    function scssTask(){
        return src(cssFiles, {sourcemaps:true})
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(postcss([autoprefixer()]))
        .pipe(dest ('dist', {sourcemaps: '.'}));
    }
    
    //sass task minified style
    function scssTaskMinified(){
        return src(cssFiles, {sourcemaps:true})
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(postcss([autoprefixer, cssnano()]))
        .pipe(rename('bundle.min.css'))
        .pipe(dest('dist', {sourcemaps: '.'}))
    }

    const jsFiles = [
        'asset/venders/jquery/jquery-3.7.0.min.js',
        'asset/venders/swiper/js/swiper-bundle.min.js', 
        // 'asset/venders/gsap/gsap.min.js',
        // 'asset/venders/gsap/scrollTrigger-3.6.1.min.js',
        'asset/js/admin.js',
        'asset/js/main.js'
    ]

    // javascript task
    function jsTask(){
        return src(jsFiles, {sourcemaps:true})
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(rename('bundle.min.js'))
        .pipe(dest('dist', {sourcemaps: '.'}))
    }
    
//browserSync launch server
function browsersyncServe(cb){ //cb is callback here
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

// browser sync reload
function browsersyncReload(cb){ // cb is callback here 
    browsersync.reload();
    cb();
}

// watchtask
function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['asset/scss/**/*.scss', 'asset/js/**/*./js'], series(scssTask, scssTaskMinified, jsTask, browsersyncReload));
}

exports.default = series(
    scssTask,
    scssTaskMinified,
    jsTask,
    browsersyncServe,
    watchTask
);