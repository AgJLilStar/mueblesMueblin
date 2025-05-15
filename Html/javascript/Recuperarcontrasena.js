document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recuperarForm");

  form.addEventListener("submit", function (e) {
    const correo = document.getElementById("correo").value.trim();

    if (!correo) {
      alert("Por favor, ingresá tu correo electrónico.");
      e.preventDefault(); // Detiene el envío
    }
  });
});