// Função para validar e processar o formulário
function processarFormulario(event) {
  // Previne o envio padrão do formulário
  event.preventDefault();
}

function mostrarResultado() {
  // Obtém os valores dos inputs
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const resultado = document.getElementById("resultado");
  
  // Remove classes de estilo anteriores
  resultado.classList.remove('sucesso', 'erro');
  
  // Verifica se os campos estão preenchidos
  if (nome === "" || email === "" || senha === "") {
    resultado.textContent = "Dados inválidos: Todos os campos devem ser preenchidos.";
    resultado.classList.add('erro');
    limparInputs();
    return;
  }
  
  // Verifica se o e-mail tem um formato válido
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    resultado.textContent = "Dados inválidos: O e-mail não é válido.";
    resultado.classList.add('erro');
    limparInputs();
    return;
  }
  
  // Caso todos os dados sejam válidos
  resultado.textContent = "Dados cadastrados com sucesso!";
  resultado.classList.add('sucesso');
  
  // Limpa os inputs
  limparInputs();
}

// Função para limpar os inputs
function limparInputs() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
}
