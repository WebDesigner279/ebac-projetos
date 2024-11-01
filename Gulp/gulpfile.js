// Importação do pacote Gulp
const gulp = require('gulp');

// Importação do Gulp e SASS
const sass = require('gulp-sass')(require('sass'));

// Importação do sourcemaps
const sourcemaps = require('gulp-sourcemaps');

// Importação do pacote Uglify
const uglify = require('gulp-uglify');

// Função para comprimir JavaScript
function comprimeJavaScript() {
  return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
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

// Função para tarefas em série
function funcaoPadrao(callback) {
  setTimeout(function() {
    console.log("Executando via Gulp");
    callback();
  }, 2000);
}

// Função pública `dizOi` com chamada à função `dizTchau`
function dizOi(callback) {
  console.log("Olá Gulp");
  dizTchau();
  callback();
}

// Função privada `dizTchau`
function dizTchau() {
  console.log("Tchau Gulp");
}

// Exportação das tarefas
exports.default = gulp.series(funcaoPadrao, dizOi, compilaSass); // Opção em série
exports.dizOi = dizOi;
exports.sass = compilaSass;
// Compilação inifita do gulp
/*exports.watch = function() {
  gulp.watch('./source/style/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
}*/

exports.javascript = comprimeJavaScript;
