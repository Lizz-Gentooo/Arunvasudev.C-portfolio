import {
  SkillGroup,
  EducationItem,
  CertificationItem,
  ContactLink,
  PersonalInfo,
} from "../types";

export const personal: PersonalInfo = {
  name: "Arun Vasudev C",
  role: "Mechanical Engineering Student | Aspiring Aerospace Design Engineer",
  tagline:
    "Second-year Mechanical Engineering student channeling CAD skills and engineering fundamentals toward aerospace design.",
  objective:
    "Second-year Mechanical Engineering student passionate about Aerospace Design Engineering. Seeking an internship to apply CAD skills, engineering fundamentals, and innovative thinking to real-world aerospace projects.",
  areasOfInterest: [
    "Aerospace Design Engineering",
    "Mechanical Systems Design",
    "Engineering Innovation",
  ],
  strengths: [
    "Strong passion for aerospace applications of mechanical engineering",
    "Excellent public speaking and group presentation skills",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Technical Skills",
    skills: ["CAD (Computer-Aided Design)", "Engineering Drawing", "Diesel Engine Fundamentals"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Communication & Public Speaking",
      "Innovation & Creativity",
      "Team Collaboration",
      "Adaptability",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering — Mechanical Engineering",
    institution: "Government College of Engineering, Erode",
    affiliation: "Anna University",
    timeframe: "Expected Graduation: 2029",
  },
  {
    degree: "Higher Secondary",
    institution: "Scored S Grade in Engineering Drawing",
    timeframe: "",
  },
];

export const certifications: CertificationItem[] = [
  { title: "Diesel Engine Fundamentals", issuer: "Alison (Online Course)" },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Phone",
    value: "8637617853",
    href: "tel:8637617853",
    icon: "phone",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arunvasudevc",
    href: "https://linkedin.com/in/arunvasudevc",
    icon: "linkedin",
  },
];

export const resumeFile = "/Arun_Vasudev_Resume.pdf";
