// Importação do pacote Gulp
const gulp = require('gulp');

// Importação do pacote Uglify
const uglify = require('gulp-uglify');

// Importação do Gulp e SASS
const sass = require('gulp-sass')(require('sass'));

// Importação do sourcemaps
const sourcemaps = require('gulp-sourcemaps');

// Importação do plugin obfuscate
const obfuscate = require('gulp-obfuscate');

// Importação do plugin imagemin
const imagemin = require('gulp-imagemin');

// Função para comprimir imagem
function comprimeImagens() {
  return gulp.src('./source/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./build/images'));
}

// Função para comprimir JavaScript
function comprimeJavaScript() {
  return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(uglify.dest('./build/scripts'))
}

// Compilação do SASS
function compilaSass() {
  return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

// Função de tarefa publica
exports.default = function() {
  gulp.watch('./source/style/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
  gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
  gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}

