// função publica das tarefas exportadas
function funcaoPadrao(callback) {
  console.log("Executando via Gulp");
  callback();
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

exports.default = funcaoPadrao;
exports.dizOi = dizOi;