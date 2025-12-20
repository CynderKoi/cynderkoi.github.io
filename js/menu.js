const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("menu-toggle");

/* Iconos */
const ICON_OPEN = "✕";
const ICON_CLOSED = "☰";

/* Inyectar menú */
sidebar.innerHTML = `
  <nav class="menu">
    <h2>Cynder Koi</h2>
    <a href="Menu.html">Inicio</a>
    <a href="Portafolio.html">Portafolio</a>
    <a href="Proyectos.html">Proyectos</a>
    <a href="Redes.html">Redes</a>
  </nav>
`;

/* ===== ESTADO INICIAL ===== */
const menuState = localStorage.getItem("menuState");

if (menuState === "open") {
  sidebar.classList.remove("closed");
  toggle.textContent = ICON_OPEN;
} else {
  sidebar.classList.add("closed");
  toggle.textContent = ICON_CLOSED;
  localStorage.setItem("menuState", "closed");
}

/* ===== TOGGLE ===== */
toggle.addEventListener("click", () => {
  const isClosed = sidebar.classList.toggle("closed");

  toggle.textContent = isClosed ? ICON_CLOSED : ICON_OPEN;
  localStorage.setItem("menuState", isClosed ? "closed" : "open");
});
