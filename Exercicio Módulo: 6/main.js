function calculaArea(base, altura) {
  return base * altura;
}

function mostrarResultado() {
  // Obtém os valores dos inputs
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  
  // Verifica se os valores são válidos
  if (isNaN(base) || isNaN(altura)) {
      document.getElementById("resultado").textContent = "Por favor, insira números válidos!";
      return;
  }
  
  // Calcula a área
  const area = calculaArea(base, altura);
  
  // Exibe o resultado
  document.getElementById("resultado").textContent = "A área é: " + area;
}