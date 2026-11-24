// datos del cv, de aquí se generan las listas y tablas
const curriculum = {
  nombre: "Juan Sebastián Loaiza Ospina",
  subtitulo: "Estudiante de Ciencias de la Computación — Universidad de Costa Rica",

  contacto: {
    correo: "juanselospi@gmail.com",
    telefono: "8432-8100",
    telefonoLink: "+50684328100",
    ubicacion: "Calle Masis 202, San Pedro, Costa Rica",
    github: "juanselospi",
    linkedin: "juanselospi"
  },

  perfil: {
    antes: "Estudiante de Ciencias de la Computación en la ",
    enlace: { texto: "Universidad de Costa Rica", url: "https://www.ucr.ac.cr" },
    despues: ", con formación previa en Ingeniería Mecánica y tres años de experiencia profesional en " +
      "desarrollo de software dentro de Amazon. Me interesa el desarrollo de sistemas, la " +
      "programación orientada a objetos y el desarrollo de videojuegos y simulaciones con " +
      "Unity Engine. Combino una base sólida en resolución de problemas de ingeniería con " +
      "experiencia práctica construyendo software en equipos grandes."
  },

  experiencia: [
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
  ],

  formacion: [
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
  ],

  habilidadesTecnicas: [
    { tecnologia: "Python", categoria: "Lenguaje de programación", nivel: "Avanzado" },
    { tecnologia: "C++", categoria: "Lenguaje de programación", nivel: "Avanzado" },
    { tecnologia: "Java", categoria: "Lenguaje de programación", nivel: "Intermedio" },
    { tecnologia: "C#", categoria: "Lenguaje de programación", nivel: "Intermedio" },
    { tecnologia: "Go", categoria: "Lenguaje de programación", nivel: "Intermedio" },
    { tecnologia: "Ensamblador", categoria: "Lenguaje de bajo nivel", nivel: "Intermedio" },
    { tecnologia: "Unity Engine", categoria: "Motor de desarrollo", nivel: "Intermedio" },
    { tecnologia: "Microsoft Office", categoria: "Herramientas de ofimática", nivel: "Intermedio" }
  ],

  habilidadesBlandas: [
    "Trabajo en equipo en proyectos de software de gran escala.",
    "Comunicación técnica y documentación.",
    "Resolución de problemas y pensamiento analítico.",
    "Adaptabilidad y aprendizaje autónomo de nuevas tecnologías."
  ],

  idiomas: [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Inglés", nivel: "C1 — Avanzado" },
    { idioma: "Japonés", nivel: "B2 — Intermedio alto" }
  ]
};

export default curriculum;
