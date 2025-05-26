document.addEventListener("DOMContentLoaded", function () {
  const usuario = localStorage.getItem("usuarioLogueado");

  if (usuario) {
    const inicioSesionDiv = document.querySelector(".inicioSesion");

    if (inicioSesionDiv) {
      inicioSesionDiv.innerHTML = "";

      const nombreSpan = document.createElement("span");
      nombreSpan.textContent = usuario;
      nombreSpan.style.color = "black";
      nombreSpan.style.marginRight = "10px";

      // Botón de cerrar sesión MODIFICARLO
      const logoutBtn = document.createElement("button");
      logoutBtn.textContent = "Cerrar sesión";
      logoutBtn.style.padding = "5px 10px";
      logoutBtn.style.border = "none";
      logoutBtn.style.backgroundColor = "#c0392b";
      logoutBtn.style.color = "white";
      logoutBtn.style.borderRadius = "5px";
      logoutBtn.style.cursor = "pointer";

      logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("usuarioLogueado");
        window.location.href = "login.html";
      });

      inicioSesionDiv.appendChild(nombreSpan);
      inicioSesionDiv.appendChild(logoutBtn);
    }
  }
});