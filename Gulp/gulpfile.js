// Importação do pacote Gulp
const gulp = require('gulp');

// Importação composta dos pacotes Gulp e SASS
const sass = require('gulp-sass')(require('sass'));

// Compilação do SASS
function compilaSass() {
  return gulp.src('./source/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}



// função publica das tarefas exportadas
function funcaoPadrao(callback) {
  // setTimeout define o tempo de execução do bloco de código
  setTimeout(function() {
    console.log("Executando via Gulp");
    callback();
  }, 2000);
}

// função publica das tarefas exportadas
function dizOi(callback) {
  console.log("Olá Gulp");
  dizTchau();
  callback();
}

// função privada das tarefas não exportadas
function dizTchau() {
console.log("Tchau Gulp");
}

// Execução de tarefas em série
exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;

// Execução de tarefas em paralelo
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
