document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const SUPERUSUARIO = "admin";
  const SUPERCONTRASENA = "1234";

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Detiene el envío del formulario

    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    let errorMsg = document.getElementById("loginError");
    if (errorMsg) errorMsg.remove();

    if (!usuario || !contrasena) {
      mostrarError("Por favor, completá ambos campos: usuario y contraseña.");
      return;
    }

    if (usuario === SUPERUSUARIO && contrasena === SUPERCONTRASENA) {
      alert("Inicio de sesión exitoso.");
      localStorage.setItem("usuarioLogueado", usuario);
      window.location.href = "index.html"
    } else {
      mostrarError("Usuario o contraseña incorrectos.");
    }
  });

  function mostrarError(mensaje) {
    const p = document.createElement("p");
    p.id = "loginError";
    p.style.color = "red";
    p.textContent = mensaje;
    form.appendChild(p);
  }
});