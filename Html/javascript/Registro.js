document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const confirmar = document.getElementById("confirmar").value.trim();

    if (!nombre || !apellido || !correo || !contrasena || !confirmar) {
      alert("Por favor, completá todos los campos.");
      e.preventDefault(); // Detiene el envío del formulario
      return;
    }

    if (contrasena !== confirmar) {
      alert("Las contraseñas no coinciden.");
      e.preventDefault();
    }
  });
});