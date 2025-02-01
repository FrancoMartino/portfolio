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

export const PROJECTS = [
  {
    title: "Portfolio",
    licence: "Público",
    year: 2025,
    description:
      "Portfolio interactivo desarrollado con React, TailwindCSS y TypeScript. Presenta mis proyectos y habilidades con un diseño limpio y funcional.",
    image: "img/projects/portfolio.png",
    link: "/",
    openSource: true,
    techs: ["react", "tailwindcss", "html", "typescript"],
  },
  {
    title: "Massive CF",
    licence: "Privado",
    year: 2025,
    description:
      "Extensión para administrar listas de mejores amigos en Instagram. La API oficial no permite hacerlo en masa, pero Massive CF lo hace fácil y rápido, ideal para creadores y cuentas comerciales.",
    image: "img/projects/massivecf.png",
    techs: ["javascript", "html", "css"],
  },
  {
    title: "Cod-ES",
    licence: "Open-Source",
    year: 2024,
    description:
      "Librería Open-Source que permite programar en Arduino con sintaxis en español, facilitando el aprendizaje sin perder compatibilidad.",
    image: "img/projects/codes.png",
    link: "https://github.com/FrancoMartino/Cod-ES",
    openSource: true,
    techs: ["cpp", "arduino"],
  },
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