
export type ContactInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  linkedIn?: string;
  website?: string;
  github?: string;
  portfolio?: string;
  summary?: string;
  location?: string; // Adding this field to resolve the TypeScript error
};

export type WorkExperience = {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights: string[];
  isCurrentRole?: boolean;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  gpa?: string;
  highlights: string[];
  isCurrentlyEnrolled?: boolean;
};

export type Skill = {
  id: string;
  name: string;
  level?: number; // 1-5
  category?: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  url?: string;
  highlights: string[];
  technologies?: string[];
  startDate?: string;
  endDate?: string | "Present";
};

export type Language = {
  id: string;
  name: string;
  proficiency: "Basic" | "Conversational" | "Proficient" | "Fluent" | "Native";
};

export type Certificate = {
  id: string;
  name: string;
  issuer: string;
  dateIssued: string;
  dateExpires?: string;
  url?: string;
  description?: string;
};

export type Reference = {
  id: string;
  name: string;
  company: string;
  position: string;
  email?: string;
  phone?: string;
  reference?: string;
};

export type TemplateType = "simple" | "modern" | "professional";

export type ResumeData = {
  contactInfo: ContactInfo;
  workExperiences: WorkExperience[];
  educations: Education[];
  skills: Skill[];
  projects: Project[];
  languages: Language[];
  certificates: Certificate[];
  references: Reference[];
  template: TemplateType;
  createdAt: Date;
  updatedAt: Date;
  userId?: string; // For future auth integration
  isPremium?: boolean;
};

export const defaultResumeData: ResumeData = {
  contactInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    summary: "",
  },
  workExperiences: [],
  educations: [],
  skills: [],
  projects: [],
  languages: [],
  certificates: [],
  references: [],
  template: "simple",
  createdAt: new Date(),
  updatedAt: new Date(),
};
