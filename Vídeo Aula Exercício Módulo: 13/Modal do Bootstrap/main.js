document.addEventListener('DOMContentLoaded', function() {
  const modalExemplo = new bootstrap.Modal(document.getElementById('exemplo-modal'));
  setTimeout(function() {
    modalExemplo.show();
  }, 3000);
});
