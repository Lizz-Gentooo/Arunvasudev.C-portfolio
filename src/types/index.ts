export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliation?: string;
  timeframe: string;
  detail?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: "phone" | "linkedin" | "instagram" | "youtube";
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  objective: string;
  areasOfInterest: string[];
  strengths: string[];
}
