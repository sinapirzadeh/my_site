export interface ISkillType {
  id: number;
  title: string;
  process: number;
}

export interface IProfileType {
  id: number;
  name: string;
  short_des: string;
  descirption: string;
  image_url: string;
  image_alt: string;
  telegram_url: string;
  linkedin_url: string;
  github_url: string;
  rezome_url: string;
}

export interface IProjectType {
  id: number;
  name: string;
  frameworks: [string];
  image_url: string;
  image_alt: string;
}
