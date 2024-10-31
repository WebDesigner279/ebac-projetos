// Importação do pacote Gulp
const gulp = require('gulp');

// Importação do Gulp e SASS
const sass = require('gulp-sass')(require('sass'));

// Compilação do SASS
function compilaSass() {
  return gulp.src('./source/styles/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
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

// Função privada
function dizTchau() {
  console.log("Tchau Gulp");
}

// Exportação das tarefas
exports.default = gulp.series(funcaoPadrao, dizOi, compilaSass); // Opção em série
exports.dizOi = dizOi;
exports.sass = compilaSass;
