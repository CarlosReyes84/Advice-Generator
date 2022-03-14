const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const terser = require('gulp-terser')


function compile() {
    return src('src/sass/app.scss')
    .pipe(sass())
    .pipe(dest('dist'))
}

function minify() {
    let path = [
        cssnano(),
        autoprefixer()
    ]
    return src('src/sass/app.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss(path))
    .pipe(dest('dist', { sourcemaps: true }))
}

function js() {
    return src('src/app.js')
    .pipe(terser())
    .pipe(dest('dist'))
}

function watching() {
    // watch('src/sass/**/*.scss', compile)
    watch('src/*.js', js)
    watch('src/sass/**/*.scss', minify)
}

exports.default = watching;