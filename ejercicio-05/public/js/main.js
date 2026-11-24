const botonTema = document.getElementById("boton-tema");

function aplicarTema(tema) {
  document.documentElement.dataset.tema = tema;

  if (!botonTema) {
    return;
  }

  if (tema === "claro") {
    botonTema.textContent = "Modo oscuro";
  } else {
    botonTema.textContent = "Modo claro";
  }
}

// si no hay nada guardado uso el tema del sistema
let temaGuardado = localStorage.getItem("tema");
if (!temaGuardado) {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    temaGuardado = "claro";
  } else {
    temaGuardado = "oscuro";
  }
}
aplicarTema(temaGuardado);

// cambio el tema y lo guardo para que se mantenga al recargar
if (botonTema) {
  botonTema.addEventListener("click", function () {
    let nuevoTema = "claro";
    if (document.documentElement.dataset.tema === "claro") {
      nuevoTema = "oscuro";
    }

    aplicarTema(nuevoTema);
    localStorage.setItem("tema", nuevoTema);
  });
}
