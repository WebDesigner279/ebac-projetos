const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.trim().split(' ');
  return nomeComoArray.length >= 2;
}

let formEValido = false;
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const numeroContaBeneficiario = document.getElementById('numero-conta');
  const valorDeposito = document.getElementById('valor-deposito');
  const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

  formEValido = validaNome(nomeBeneficiario.value);
  if (formEValido) {
    const containerMessemSucesso = document.querySelector('.success-message');
    containerMessemSucesso.innerHTML = mensagemSucesso;
    containerMessemSucesso.style.display = 'block';

    nomeBeneficiario.value = '';
    numeroContaBeneficiario.value = '';
    valorDeposito.value = '';
  } else {
    nomeBeneficiario.style.borderColor = 'red';
    document.querySelector('.error-message').style.display = 'block';
  }
});

nomeBeneficiario.addEventListener('keyup', function(e) {
  formEValido = validaNome(e.target.value);

  if (formEValido) {
    nomeBeneficiario.classList.remove('error');
    nomeBeneficiario.style.borderColor = '';
    document.querySelector('.error-message').style.display = 'none';
  } else {
    nomeBeneficiario.classList.add('error');
    nomeBeneficiario.style.borderColor = 'red';
    document.querySelector('.error-message').style.display = 'block';
  }
});
