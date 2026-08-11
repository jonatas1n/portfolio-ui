export type ResumeResponse = {
  available: boolean;
  filename?: string | null;
  updated_at?: string | null;
};

export type Resume = {
  available: boolean;
  filename: string | null;
  updatedAt: string | null;
};
