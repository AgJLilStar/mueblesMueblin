document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    if (!usuario || !contrasena) {
      alert("Por favor, completá ambos campos: usuario y contraseña.");
      e.preventDefault(); // Detiene el envío
    }
  });
});