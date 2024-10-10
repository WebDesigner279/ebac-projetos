document.getElementById('submitBtn').addEventListener('click', function() {
  // Pegando os valores dos inputs
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const tel = document.getElementById('tel').value.trim();
  const aceitoTermos = document.getElementById('aceito-termos').checked;

  // Validando os campos
  if (nome === '') {
    alert('Por favor, preencha o campo Nome.');
    return;
  }

  if (email === '') {
    alert('Por favor, preencha o campo E-mail.');
    return;
  }

  if (tel === '') {
    alert('Por favor, preencha o campo Telefone.');
    return;
  }

  if (!aceitoTermos) {
    alert('Você precisa aceitar os termos.');
    return;
  }

  // Se tudo estiver ok, exibe a mensagem de sucesso
  document.getElementById('mensagemSucesso').style.display = 'block';

  // Opcional: limpar o formulário após o envio
  document.getElementById('cadastroForm').reset();
});
