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

type ContactsCopy = {
  openLink: string;
  copyEmail: string;
  emailCopied: string;
};

type ResumeCopy = {
  label: string;
  ariaLabel: string;
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
  contacts: ContactsCopy;
  resume: ResumeCopy;
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
      name: "I'm Jônatas\u00A0Gomes",
      nickname: "(but you can call me Johny)",
      tagline: "and this is my portfolio 👨🏿‍💻",
      biography:
        "At work, I'm a Frontend Developer at Pinterest — building React/TypeScript components for a massive user base. Outside of it, I like taking products from zero to launch: I've built everything from fintech systems to apps for street vendors. Here you'll find both sides.",
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
    contacts: {
      openLink: "Open {contact}",
      copyEmail: "Send me an email and copy the address",
      emailCopied: "Email copied to your clipboard",
    },
    resume: {
      label: "My resume",
      ariaLabel: "Download my resume",
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
      name: "Eu sou o Jônatas\u00A0Gomes",
      nickname: "(mas pode me chamar de Johny)",
      tagline: "e este é o meu portfólio 👨🏿‍💻",
      biography:
        "No trabalho, sou Frontend Developer no Pinterest — construindo componentes React/TypeScript para uma base gigantesca de usuários. Fora dele, gosto de tirar produtos do zero e colocar no ar: já criei de sistemas de fintech a aplicativos para vendedores ambulantes. Aqui você encontra os dois lados.",
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
    contacts: {
      openLink: "Abrir {contact}",
      copyEmail: "Me enviar um e-mail e copiar o endereço",
      emailCopied: "E-mail copiado para a área de transferência",
    },
    resume: {
      label: "Meu currículo",
      ariaLabel: "Baixar meu currículo",
    },
  },
};

export const getTranslation = (language: Language): Translation =>
  translations[language];
