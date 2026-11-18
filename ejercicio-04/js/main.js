// datos del cv, de aquí se generan las listas y tablas
const experiencia = [
  {
    puesto: "Desarrollador de software — Amazon",
    inicio: "2020",
    fin: "2023",
    proyecto: "Aviary",
    logros: [
      { antes: "Participé en el desarrollo de un sistema nuevo de asistencia al cliente para ", ingles: "retail primary", despues: "." },
      "Implementé y di mantenimiento a componentes del sistema en colaboración con un equipo de desarrollo distribuido.",
      "Apliqué prácticas de control de versiones, revisión de código y trabajo por iteraciones."
    ]
  }
];

const formacion = [
  {
    titulo: "Bachillerato en Ciencias de la Computación e Informática",
    programa: "Ciencias de la Computación e Informática",
    institucion: "Universidad de Costa Rica",
    inicio: "2024",
    fin: null,
    nota: "en curso",
    estado: "En curso",
    detalles: ["Énfasis en programación, estructuras de datos y desarrollo de aplicaciones web."]
  },
  {
    titulo: "Ingeniería Mecánica",
    programa: "Ingeniería Mecánica",
    institucion: "Universidad de Costa Rica",
    inicio: "2017",
    fin: "2023",
    nota: "carrera completada",
    estado: "Completada",
    detalles: ["Formación en física, matemática aplicada, diseño y modelado de sistemas."]
  }
];

const habilidadesTecnicas = [
  { tecnologia: "Python", categoria: "Lenguaje de programación", nivel: "Avanzado" },
  { tecnologia: "C++", categoria: "Lenguaje de programación", nivel: "Avanzado" },
  { tecnologia: "Java", categoria: "Lenguaje de programación", nivel: "Intermedio" },
  { tecnologia: "C#", categoria: "Lenguaje de programación", nivel: "Intermedio" },
  { tecnologia: "Go", categoria: "Lenguaje de programación", nivel: "Intermedio" },
  { tecnologia: "Ensamblador", categoria: "Lenguaje de bajo nivel", nivel: "Intermedio" },
  { tecnologia: "Unity Engine", categoria: "Motor de desarrollo", nivel: "Intermedio" },
  { tecnologia: "Microsoft Office", categoria: "Herramientas de ofimática", nivel: "Intermedio" }
];

const habilidadesBlandas = [
  "Trabajo en equipo en proyectos de software de gran escala.",
  "Comunicación técnica y documentación.",
  "Resolución de problemas y pensamiento analítico.",
  "Adaptabilidad y aprendizaje autónomo de nuevas tecnologías."
];

const idiomas = [
  { idioma: "Español", nivel: "Nativo" },
  { idioma: "Inglés", nivel: "C1 — Avanzado" },
  { idioma: "Japonés", nivel: "B2 — Intermedio alto" }
];

function crearTime(anio) {
  const time = document.createElement("time");
  time.dateTime = anio;
  time.textContent = anio;
  return time;
}

function agregarPeriodo(parrafo, inicio, fin) {
  parrafo.appendChild(crearTime(inicio));
  parrafo.append(" – ");
  if (fin) {
    parrafo.appendChild(crearTime(fin));
  } else {
    parrafo.append("actualidad");
  }
}

function crearLogro(logro) {
  const li = document.createElement("li");

  if (typeof logro === "string") {
    li.textContent = logro;
  } else {
    const termino = document.createElement("i");
    termino.lang = "en";
    termino.textContent = logro.ingles;
    li.append(logro.antes, termino, logro.despues);
  }

  return li;
}

function crearFila(encabezado, celdas) {
  const fila = document.createElement("tr");

  const th = document.createElement("th");
  th.scope = "row";
  th.textContent = encabezado;
  fila.appendChild(th);

  celdas.forEach(function (texto) {
    const td = document.createElement("td");
    td.textContent = texto;
    fila.appendChild(td);
  });

  return fila;
}

function pintarExperiencia() {
  const contenedor = document.getElementById("lista-experiencia");

  experiencia.forEach(function (trabajo) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const titulo = document.createElement("h3");
    titulo.textContent = trabajo.puesto;

    const fecha = document.createElement("p");
    fecha.className = "fecha";
    agregarPeriodo(fecha, trabajo.inicio, trabajo.fin);
    const proyecto = document.createElement("em");
    proyecto.textContent = trabajo.proyecto;
    fecha.append(" · Proyecto ", proyecto);

    const lista = document.createElement("ol");
    trabajo.logros.forEach(function (logro) {
      lista.appendChild(crearLogro(logro));
    });

    tarjeta.append(titulo, fecha, lista);
    contenedor.appendChild(tarjeta);
  });
}

function pintarFormacion() {
  const contenedor = document.getElementById("lista-formacion");

  formacion.forEach(function (estudio) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const titulo = document.createElement("h3");
    titulo.textContent = estudio.titulo;

    const fecha = document.createElement("p");
    fecha.className = "fecha";
    fecha.append(estudio.institucion + " · ");
    agregarPeriodo(fecha, estudio.inicio, estudio.fin);
    fecha.append(" (" + estudio.nota + ")");

    const lista = document.createElement("ul");
    estudio.detalles.forEach(function (detalle) {
      const li = document.createElement("li");
      li.textContent = detalle;
      lista.appendChild(li);
    });

    tarjeta.append(titulo, fecha, lista);
    contenedor.appendChild(tarjeta);
  });
}

function pintarTablaEstudios() {
  const tbody = document.getElementById("tabla-estudios");

  formacion.forEach(function (estudio) {
    const periodo = estudio.inicio + " – " + (estudio.fin || "actualidad");
    tbody.appendChild(crearFila(estudio.programa, [estudio.institucion, periodo, estudio.estado]));
  });
}

function pintarTablaTecnicas() {
  const tbody = document.getElementById("tabla-tecnicas");

  habilidadesTecnicas.forEach(function (habilidad) {
    tbody.appendChild(crearFila(habilidad.tecnologia, [habilidad.categoria, habilidad.nivel]));
  });
}

function pintarBlandas() {
  const lista = document.getElementById("lista-blandas");

  habilidadesBlandas.forEach(function (habilidad) {
    const li = document.createElement("li");
    li.textContent = habilidad;
    lista.appendChild(li);
  });
}

function pintarTablaIdiomas() {
  const tbody = document.getElementById("tabla-idiomas");

  idiomas.forEach(function (item) {
    tbody.appendChild(crearFila(item.idioma, [item.nivel]));
  });
}

pintarExperiencia();
pintarFormacion();
pintarTablaEstudios();
pintarTablaTecnicas();
pintarBlandas();
pintarTablaIdiomas();

const botonTema = document.getElementById("boton-tema");

function aplicarTema(tema) {
  document.documentElement.dataset.tema = tema;

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
botonTema.addEventListener("click", function () {
  let nuevoTema = "claro";
  if (document.documentElement.dataset.tema === "claro") {
    nuevoTema = "oscuro";
  }

  aplicarTema(nuevoTema);
  localStorage.setItem("tema", nuevoTema);
});
