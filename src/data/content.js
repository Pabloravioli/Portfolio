

export const profile = {
  name: "Pablo Espinosa",
  role: "Desarrollador de software",
  tagline:
    "Soy estudiante universitario de desarrollo de software, con muchas ganas de aprender y de seguir desarrollándome. Tengo experiencia con JavaScript, JAVA, Node.js y Python, dispuesto a nuevos desafios.",

  // Foto: copiá tu imagen en la carpeta /public (ej: public/foto.jpg)
  // y poné su nombre acá. Si no querés foto, dejá null y se muestran tus iniciales.
  photo: "pic.jpg",

  email: "pabloespinosa888@gmail.com",
  phone: "+54 9 11 3581 9824", // como querés que se vea
  phoneLink: "+5491135819824", // solo números y +, sin espacios (para el botón de llamar)
  linkedin: "https://www.linkedin.com/in/pablo-espinosa-450290258/",
  github: "https://github.com/Pabloravioli",

  // Copiá tu CV en /public con este nombre (o cambiá el nombre acá)
  cv: "Pablo Espinosa.pdf",
  cvDownloadName: "Pablo Espinosa.pdf", // nombre con el que se descarga
};

export const about = {
 paragraphs: [
  "Como estudiante de programación, lo que más me gusta es resolver problemas y afrontar desafíos. Busco un trabajo donde me pongan a prueba, donde pueda aprender y crecer en este mundo.",
  "Con mis proyectos propios aprendí que la única forma de entender cómo funciona algo es meter mano en el código y adentrarme en eso que no entiendo o parece dificil. Cada vez que logro resolver algo o entenderlo por mi cuenta, me motiva a seguir creciendo.",
],
  education: [
    {
      title: "Tecnicatura Desarrollador de software",
      place: "UADE",
      period: "2024 – actualidad",
    },
    // { title: "Curso / certificación", place: "Institución", period: "2025" },
  ],
  experience: [
    {
      title: "Proyectos personales y académicos",
      place: "Desarrollo full-stack, estructuras de datos y modelado",
      period: "2024 – actualidad",
    },
    // { title: "Puesto", place: "Empresa", period: "2025" },
  ],
};

// Cada grupo es una tarjeta. Agregá, quitá o renombrá grupos y elementos.
export const skills = [
  {
    title: "Lenguajes",
    items: ["JavaScript", "Python", "Java", "HTML", "CSS", "SQL"],
  },
  {
    title: "Conocimientos técnicos",
    items: ["Node.js", "React", "Tailwind CSS", "APIs REST", "Bases de datos"],
  },
  {
    title: "Conocimientos teóricos",
    items: [
      "Programación orientada a objetos",
      "Estructuras de datos (TDA)",
      "Modelado UML",
      "Algoritmos",
    ],
  },
  {
    title: "Software y herramientas",
    items: ["Git y GitHub", "VS Code", "Vite", "npm", "Postman"],
  },
];


export const projects = [
  {
  title: "API Monitor",
  images: ["monitor1.png", "monitor2.png"],
  description:
    "Aplicación full-stack para monitorear APIs y URLs. Un proceso automático revisa cada minuto si responden y cuánto tardan, y la interfaz muestra el resumen de disponibilidad, los tiempos de respuesta y gráficos por cada monitor. Backend en Node.js y Express con base de datos MongoDB, y frontend en React con Vite, Tailwind CSS y Chart.js.",
  learned:
    "Aprendí a diseñar y construir una API con Node.js y Express, a guardar datos en una base de datos, a programar tareas automáticas con cron y a enviar datos con peticiones POST. También entendí cómo funciona un servidor y nociones de seguridad, como configurar CORS, y cómo conectar todo con un frontend en React.",
  tech: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "Vite", "Tailwind CSS", "Chart.js"],
  repo: "https://github.com/tu-usuario/tu-repositorio",
  demo: "",
},
  // {
  //   title: "Nombre de otro proyecto",
  //   images: [],
  //   description: "...",
  //   learned: "...",
  //   tech: ["Python"],
  //   repo: "",
  //   demo: "",
  // },
];
