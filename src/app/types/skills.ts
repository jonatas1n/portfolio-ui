export type SkillResponse = {
  id: string;
  title: string;
  skill_type: string;
};

export type Skill = {
  id: string;
  title: string;
  skillType: string;
};

export type SkillGroupTypeResponse = { [title: string]: SkillResponse[] };

export type SkillGroupType = { [title: string]: Skill[] };
