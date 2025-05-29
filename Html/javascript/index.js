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

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mainMenu = document.getElementById("mainMenu");

  mainMenu.style.display = "none";
  document.querySelectorAll(".submenu").forEach(sub => {
    sub.style.display = "none";
  });

  menuButton.addEventListener("click", () => {
    mainMenu.style.display = mainMenu.style.display === "block" ? "none" : "block";
  });

  // Submenús (Living y Habitación)
  const toggles = document.querySelectorAll(".submenu-toggle span");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      const submenu = toggle.nextElementSibling;

      // Cierra otros submenús
      document.querySelectorAll(".submenu").forEach(other => {
        if (other !== submenu) {
          other.style.display = "none";
        }
      });

      submenu.style.display = submenu.style.display === "block" ? "none" : "block";

      e.stopPropagation(); // Evita que se cierre el menú principal
    });
  });

  // Cerrar todo si hacés clic fuera del menú
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-container")) {
      mainMenu.style.display = "none";
      document.querySelectorAll(".submenu").forEach(sub => sub.style.display = "none");
    }
  });
});