// Obtém o formulário de depósito pelo ID
const form = document.getElementById('form-deposito');

// Obtém o campo de input do nome do beneficiário pelo ID
const nomeBeneficiario = document.getElementById('nome-beneficiario');

// Função para validar se o nome completo é válido (tem pelo menos dois nomes)
function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.trim().split(' '); // Divide o nome completo em um array de palavras
  return nomeComoArray.length >= 2; // Retorna true se o array tiver dois ou mais elementos (nomes)
}

let formEValido = false; // Variável para verificar se o formulário é válido

// Adiciona um ouvinte de evento para o formulário para capturar o evento de envio (submit)
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Previne o envio padrão do formulário

  // Obtém os campos de input do número da conta e valor do depósito pelo ID
  const numeroContaBeneficiario = document.getElementById('numero-conta');
  const valorDeposito = document.getElementById('valor-deposito');

  // Cria a mensagem de sucesso com os valores inseridos no formulário
  const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

  // Valida o nome do beneficiário
  formEValido = validaNome(nomeBeneficiario.value);

  if (formEValido) {
    // Se o formulário for válido, exibe a mensagem de sucesso
    const containerMessemSucesso = document.querySelector('.success-message');
    containerMessemSucesso.innerHTML = mensagemSucesso;
    containerMessemSucesso.style.display = 'block';

    // Limpa os campos do formulário
    nomeBeneficiario.value = '';
    numeroContaBeneficiario.value = '';
    valorDeposito.value = '';
  } else {
    // Se o formulário não for válido, destaca o campo do nome do beneficiário em vermelho e exibe a mensagem de erro
    nomeBeneficiario.style.borderColor = 'red';
    document.querySelector('.error-message').style.display = 'block';
  }
});

// Adiciona um ouvinte de evento ao campo de input do nome do beneficiário para validar enquanto o usuário digita
nomeBeneficiario.addEventListener('keyup', function(e) {
  formEValido = validaNome(e.target.value); // Valida o nome do beneficiário

  if (formEValido) {
    // Se o nome for válido, remove a classe de erro, restaura a cor da borda e esconde a mensagem de erro
    nomeBeneficiario.classList.remove('error');
    nomeBeneficiario.style.borderColor = '';
    document.querySelector('.error-message').style.display = 'none';
  } else {
    // Se o nome não for válido, adiciona a classe de erro, muda a cor da borda para vermelho e exibe a mensagem de erro
    nomeBeneficiario.classList.add('error');
    nomeBeneficiario.style.borderColor = 'red';
    document.querySelector('.error-message').style.display = 'block';
  }
});
