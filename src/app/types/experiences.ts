export type Experience = {
  id: string;
  position: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  technologies: string[] | null;
  description: string;
};

export type ExperienceResponse = {
  id: string;
  position: string;
  company_name: string;
  start_date: string;
  end_date?: string;
  technologies: string[] | null;
  description: string;
}