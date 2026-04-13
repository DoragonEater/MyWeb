export interface IProfile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  headerBackground: string;
  summary: string;
}

export interface ISkills {
  tech: string[];
  design: string[];
  tools: string[];
  languages: string[];
}

export interface IExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  images?: string[];
}

export interface IProject {
  id: string;
  title: string;
  role: string;
  period: string;
  tags: string[];
  description: string;
  details: string[];
  link: string;
  image: string;
  // TODO: 后续预留视频播放地址
  videoPreview?: string; 
}

export interface IHobbyItem {
  name: string;
  info: string;
  type?: string | string[];
}

export interface IHobbies {
  games: IHobbyItem[];
  anime: IHobbyItem[];
}

export interface IAnalysis {
  title: string;
  link: string;
  image: string;
}

export interface IResumeData {
  profile: IProfile;
  skills: ISkills;
  workExperience: IExperience[];
  experience: IExperience[];
  projects: IProject[];
  hobbies: IHobbies;
  analysis: IAnalysis[];
}
