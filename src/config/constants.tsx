import { SiChromewebstore, SiGithub } from "react-icons/si";
import { BiGlobe } from "react-icons/bi";

export const TECHS = [
  {
    name: "cpp",
    title: "C++",
    icon: "img/icons/cpp.webp",
    link: "https://wikipedia.org/wiki/C++",
    top,
  },
  {
    name: "arduino",
    title: "Arduino",
    icon: "img/icons/arduino.webp",
    link: "https://www.arduino.cc",
  },
  {
    name: "python",
    title: "Python",
    icon: "img/icons/python.webp",
    link: "https://www.python.org",
    top,
  },
  {
    name: "react",
    title: "React",
    icon: "img/icons/react.webp",
    link: "https://react.dev",
    top,
  },
  {
    name: "html",
    title: "HTML5",
    icon: "img/icons/html.webp",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    top,
  },
  {
    name: "tailwindcss",
    title: "TailwindCSS",
    icon: "img/icons/tailwindcss.webp",
    link: "https://tailwindcss.com",
    top,
  },
  {
    name: "css",
    title: "CSS3",
    icon: "img/icons/css.webp",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    top,
  },
  {
    name: "javascript",
    title: "JavaScript",
    icon: "img/icons/javascript.webp",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    top,
  },
  {
    name: "typescript",
    title: "TypeScript",
    icon: "img/icons/typescript.webp",
    link: "https://www.typescriptlang.org",
    top,
  },
  {
    name: "vscode",
    title: "VSCode",
    icon: "img/icons/vscode.webp",
    link: "https://code.visualstudio.com",
  },
  {
    name: "powerapps",
    title: "Power Apps",
    icon: "img/icons/powerapps.webp",
    link: "https://powerapps.com",
  },
];

export const SOFT_SKILLS = [
  {
    name: "leadership",
    title: "Liderazgo",
    icon: "",
    link: "",
  },
  {
    name: "communication",
    title: "Comunicación",
    icon: "",
    link: "",
  },
  {
    name: "teamwork",
    title: "Trabajo en Equipo",
    icon: "",
    link: "",
  },
  {
    name: "critical_thinking",
    title: "Pensamiento Crítico",
    icon: "",
    link: "",
  },
];

export const TYPEWRITTER_HEADER = [
  { subtitle: "Hola, mi nombre es", title: "Franco Martino." },
  { subtitle: "Estoy estudiando para ser", title: "Ingeniero Informático." },
  { subtitle: "Actualmente soy", title: "Técnico Electrónico." },
];

export const EDUCATION = [
  {
    title: "Técnicatura en Electrónica",
    institution: "EEST N°3",
    startYear: 2018,
    endYear: 2024,
  },
  {
    title: "Tramo de Formación Pedagógica",
    institution: "UFASTA",
    startYear: 2024,
    endYear: 2025,
  },
  {
    title: "Ingeniería en Informática",
    institution: "UNDAV",
    startYear: 2025,
  },
];

export const PROJECTS = [
  {
    title: "Portfolio",
    year: 2025,
    description:
      "Portfolio interactivo desarrollado con React, TailwindCSS y TypeScript. Presenta mis proyectos y habilidades con un diseño limpio y funcional.",
    image: "img/projects/portfolio.webp",
    link: "/",
    openSource: true,
    techs: ["react", "tailwindcss", "html", "typescript"],
  },
  {
    title: "Massive CF",
    year: 2025,
    description:
      "Extensión para navegadores con la función administrar listas de mejores amigos en Instagram. La API oficial no permite hacerlo en masa, pero Massive CF lo hace fácil y rápido, ideal para creadores y cuentas comerciales.",
    image: "img/projects/massivecf.webp",
    techs: ["javascript", "html", "css"],
  },
  {
    title: "Cod-ES",
    year: 2024,
    description:
      "Librería Open-Source que permite programar en Arduino con sintaxis en español, facilitando el aprendizaje sin perder compatibilidad.",
    image: "img/projects/codes.webp",
    link: "https://github.com/FrancoMartino/Cod-ES",
    openSource: true,
    techs: ["cpp", "arduino"],
  },
  {
    title: "CENDOJ Extractor",
    year: 2024,
    description:
      "Extensión para navegadores que automatiza la extracción de URLs de documentos PDF desde el portal del CENDOJ de España. Diseñada para optimizar la recopilación de enlaces, simplificando el proceso de descarga y análisis de sentencias judiciales.",
    image: "img/projects/cendoj.webp",
    techs: ["javascript", "html", "css"],
  },
  {
    title: "SearchMore Browser",
    year: 2024,
    description:
      "Extensión para navegadores que modifica el sistema de busqueda predeterminado, por SearchMore",
    image: "img/projects/searchmore.webp",
    techs: ["javascript", "html", "css"],
  },
];
