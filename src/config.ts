import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://mi-pensieve.deno.dev/",
  author: "Miguel Buriticá",
  profile: "https://satnaing.dev/",
  desc: "Recopilación de aprendizajes como desarrollador front, recomendaciones de libros, cursos, temas de estudio y algo más.",
  title: "TechReviews",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/miguelburitica/blog/edit/main/src/content/blog",
    text: "Sugerir cambios",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-CO"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/miguelburitica/miguelburitica",
    linkTitle: `Me on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/miguel-antonio-buritica-vargas/",
    linkTitle: `Me on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:miguelaburiticav@gmail.com",
    linkTitle: `Send me an email`,
    active: true,
  },
];
