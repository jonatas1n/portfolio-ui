import { Language } from "./config";

type LanguageSwitchCopy = {
  label: string;
  flag: string;
  ariaLabel: string;
};

type MenuCopy = {
  creations: string;
  skills: string;
  journey: string;
  getInTouch: string;
};

type IntroCopy = {
  greeting: string;
  name: string;
  nickname: string;
  tagline: string;
  biography: string;
};

type SectionsCopy = {
  creations: string;
  skills: string;
  journey: string;
};

type StatesCopy = {
  noProjects: string;
  noSkills: string;
  noExperiences: string;
  genericError: string;
  somethingWrong: string;
  tryAgain: string;
};

type ExperienceCopy = {
  at: string;
  present: string;
};

type FilterCopy = {
  label: string;
  clear: string;
};

type CarouselCopy = {
  previous: string;
  next: string;
  of: string;
};

type MiscCopy = {
  backToTop: string;
  footer: string;
  galleryImageAlt: string;
};

type ProjectsCopy = {
  viewSummary: string;
  summaryTitle: string;
  projectLabel: string;
  previousProject: string;
  nextProject: string;
  closeSummary: string;
};

export type Translation = {
  languageSwitch: LanguageSwitchCopy;
  menu: MenuCopy;
  intro: IntroCopy;
  sections: SectionsCopy;
  states: StatesCopy;
  experience: ExperienceCopy;
  filter: FilterCopy;
  carousel: CarouselCopy;
  misc: MiscCopy;
  projects: ProjectsCopy;
};

/**
 * Static UI copy keyed by the CURRENTLY active language.
 *
 * Note on `languageSwitch`: the button always advertises the OTHER language it
 * will switch to, so the copy stored under `en` is written in Portuguese (it is
 * shown while the UI is in English) and vice-versa.
 */
export const translations: Record<Language, Translation> = {
  en: {
    languageSwitch: {
      label: "Em Português",
      flag: "🇧🇷",
      ariaLabel: "Em Português",
    },
    menu: {
      creations: "Creations",
      skills: "Skills",
      journey: "Journey",
      getInTouch: "Get in touch",
    },
    intro: {
      greeting: "Hey!",
      name: "I'm Jônatas Gomes",
      nickname: "(but you can call me Johny)",
      tagline: "and this is my portfolio 👨🏿‍💻",
      biography:
        "I am a frontend developer passionate about creating innovative solutions, always focused on improving user experience and optimizing processes through advanced technologies and agile practices.",
    },
    sections: {
      creations: "Creations",
      skills: "Skills",
      journey: "Journey",
    },
    states: {
      noProjects: "No projects found",
      noSkills: "No skills found",
      noExperiences: "No experiences found",
      genericError: "An error occurred.",
      somethingWrong: "Something went wrong:",
      tryAgain: "Try again",
    },
    experience: {
      at: "at",
      present: "Present",
    },
    filter: {
      label: "Filter:",
      clear: "Clear",
    },
    carousel: {
      previous: "Previous",
      next: "Next",
      of: "of",
    },
    misc: {
      backToTop: "Back to top",
      footer: "Created by Jônatas Gomes",
      galleryImageAlt: "Portfolio image",
    },
    projects: {
      viewSummary: "View summary",
      summaryTitle: "Projects overview",
      projectLabel: "Project",
      previousProject: "Previous project",
      nextProject: "Next project",
      closeSummary: "Close summary",
    },
  },
  pt: {
    languageSwitch: {
      label: "To english",
      flag: "🇺🇸",
      ariaLabel: "To english",
    },
    menu: {
      creations: "Criações",
      skills: "Habilidades",
      journey: "Jornada",
      getInTouch: "Entre em contato",
    },
    intro: {
      greeting: "Olá!",
      name: "Eu sou o Jônatas Gomes",
      nickname: "(mas pode me chamar de Johny)",
      tagline: "e este é o meu portfólio 👨🏿‍💻",
      biography:
        "Sou um desenvolvedor frontend apaixonado por criar soluções inovadoras, sempre focado em melhorar a experiência do usuário e otimizar processos por meio de tecnologias avançadas e práticas ágeis.",
    },
    sections: {
      creations: "Criações",
      skills: "Habilidades",
      journey: "Jornada",
    },
    states: {
      noProjects: "Nenhum projeto encontrado",
      noSkills: "Nenhuma habilidade encontrada",
      noExperiences: "Nenhuma experiência encontrada",
      genericError: "Ocorreu um erro.",
      somethingWrong: "Algo deu errado:",
      tryAgain: "Tentar novamente",
    },
    experience: {
      at: "na",
      present: "Atualmente",
    },
    filter: {
      label: "Filtrar:",
      clear: "Limpar",
    },
    carousel: {
      previous: "Anterior",
      next: "Próximo",
      of: "de",
    },
    misc: {
      backToTop: "Voltar ao topo",
      footer: "Criado por Jônatas Gomes",
      galleryImageAlt: "Imagem do portfólio",
    },
    projects: {
      viewSummary: "Ver sumário",
      summaryTitle: "Visão geral dos projetos",
      projectLabel: "Projeto",
      previousProject: "Projeto anterior",
      nextProject: "Próximo projeto",
      closeSummary: "Fechar sumário",
    },
  },
};

export const getTranslation = (language: Language): Translation =>
  translations[language];
