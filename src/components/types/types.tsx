export interface ISkillType {
  _id: string;
  title: string;
  process: number;
  is_delete: boolean;
}

export interface IProfileType {
  _id: string;
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
  _id: string;
  name: string;
  frameworks: [string];
  image_url: string;
  image_alt: string;
}

export interface IArticleType {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  image_alt: string;
  like_count: number;
  comments: [];
  is_delete: boolean;
  comments_count: number;
  updatedAt: string;
  meta_description: string;
  meta_keywords: string;
  short_url: string;
  tags: string;
}

export interface ICommentType {
  name: string;
  message: string;
  is_trusted: boolean;
  is_delete: boolean;
}
