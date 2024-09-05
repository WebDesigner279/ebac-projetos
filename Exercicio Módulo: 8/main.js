document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Captura os valores dos inputs
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;

  // Cria uma nova linha e células
  var table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();

  var nameCell = newRow.insertCell(0);
  var phoneCell = newRow.insertCell(1);

  // Insere os valores nas células
  nameCell.textContent = name;
  phoneCell.textContent = phone;

  // Limpa o formulário após adicionar o contato
  document.getElementById('contactForm').reset();
});