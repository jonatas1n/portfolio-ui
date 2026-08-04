export type Project = {
  id: string;
  title: string;
  technologies: string[] | null;
  description: string;
  images?: string[] | null;
  link?: string;
};
