const btnModoOscuro = document.getElementById("modoOscuro");
const btnAumentarTexto = document.getElementById("aumentarTexto");
const btnDisminuirTexto = document.getElementById("disminuirTexto");
const btnActivarLector = document.getElementById("activarLector");

let tamanoTexto = 16;
let lectorActivo = false;

btnModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btnModoOscuro.textContent = "Modo claro";
  } else {
    btnModoOscuro.textContent = "Modo oscuro";
  }
});

btnAumentarTexto.addEventListener("click", () => {
  if (tamanoTexto < 22) {
    tamanoTexto++;
    document.documentElement.style.setProperty("--tamano-texto", `${tamanoTexto}px`);
  }
});

btnDisminuirTexto.addEventListener("click", () => {
  if (tamanoTexto > 14) {
    tamanoTexto--;
    document.documentElement.style.setProperty("--tamano-texto", `${tamanoTexto}px`);
  }
});

btnActivarLector.addEventListener("click", () => {
  lectorActivo = !lectorActivo;

  if (lectorActivo) {
    btnActivarLector.textContent = "Desactivar lector TAB";
  } else {
    btnActivarLector.textContent = "Activar lector TAB";
    speechSynthesis.cancel();
  }
});

document.addEventListener("focusin", (e) => {
  if (!lectorActivo) return;

  const texto =
    e.target.innerText ||
    e.target.value ||
    e.target.getAttribute("aria-label") ||
    e.target.placeholder ||
    e.target.name;

  if (texto) {
    speechSynthesis.cancel();

    const lectura = new SpeechSynthesisUtterance(texto);
    lectura.lang = "es-MX";
    lectura.rate = 0.9;

    speechSynthesis.speak(lectura);
  }
});
const btnContraste = document.getElementById("altoContraste");

btnContraste.addEventListener("click", () => {
  document.body.classList.toggle("contraste");
});
const menuBtn = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuBtn.textContent = "✕ Cerrar menú";
    menuBtn.setAttribute("aria-label", "Cerrar menú");
  } else {
    menuBtn.textContent = "☰ Menú";
    menuBtn.setAttribute("aria-label", "Abrir menú");
  }
});