export type SkillResponse = {
  id: string;
  title: string;
};

export type SkillGroupResponse = {
  name: string;
  name_pt: string | null;
  skills: SkillResponse[];
};

export type SkillGroupTypeResponse = SkillGroupResponse[];

export type Skill = {
  id: string;
  title: string;
};

export type SkillGroupItem = {
  name: string;
  namePt: string | null;
  skills: Skill[];
};

export type SkillGroupType = SkillGroupItem[];
