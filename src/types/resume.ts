
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';

// Work Experience Schema
export const WorkExperienceSchema = z.object({
  id: z.string().default(() => uuidv4()),
  company: z.string().default(''),
  position: z.string().default(''),
  location: z.string().default(''),
  startDate: z.string().default(''),
  endDate: z.union([z.string(), z.null()]).default(''),
  description: z.string().default(''),
  highlights: z.array(z.string()).default(['']),
  isCurrentRole: z.boolean().default(false)
});

export type WorkExperience = z.infer<typeof WorkExperienceSchema>;

// Education Schema
export const EducationSchema = z.object({
  id: z.string().default(() => uuidv4()),
  institution: z.string().default(''),
  degree: z.string().default(''),
  fieldOfStudy: z.string().default(''),
  location: z.string().default(''),
  startDate: z.string().default(''),
  endDate: z.union([z.string(), z.null()]).default(''),
  gpa: z.string().optional(),
  highlights: z.array(z.string()).default(['']),
  isCurrentlyEnrolled: z.boolean().default(false)
});

export type Education = z.infer<typeof EducationSchema>;

// Skill Schema
export const SkillSchema = z.object({
  id: z.string().default(() => uuidv4()),
  name: z.string().default(''),
  level: z.number().min(0).max(5).default(3),
  category: z.string().default('Technical')
});

export type Skill = z.infer<typeof SkillSchema>;

// Project Schema
export const ProjectSchema = z.object({
  id: z.string().default(() => uuidv4()),
  name: z.string().default(''),
  description: z.string().default(''),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  url: z.string().optional(),
  highlights: z.array(z.string()).default(['']),
  technologies: z.array(z.string()).default([])
});

export type Project = z.infer<typeof ProjectSchema>;

// Language Schema
export const LanguageSchema = z.object({
  id: z.string().default(() => uuidv4()),
  name: z.string().default(''),
  proficiency: z.enum(['Basic', 'Conversational', 'Proficient', 'Fluent', 'Native']).default('Basic')
});

export type Language = z.infer<typeof LanguageSchema>;

// Certificate Schema
export const CertificateSchema = z.object({
  id: z.string().default(() => uuidv4()),
  name: z.string().default(''),
  issuer: z.string().default(''),
  dateIssued: z.string().default(''),
  dateExpires: z.string().optional(),
  description: z.string().default('')
});

export type Certificate = z.infer<typeof CertificateSchema>;

// Reference Schema
export const ReferenceSchema = z.object({
  id: z.string().default(() => uuidv4()),
  name: z.string().default(''),
  company: z.string().default(''),
  position: z.string().default(''),
  email: z.string().default(''),
  phone: z.string().default(''),
});

export type Reference = z.infer<typeof ReferenceSchema>;

// Contact Info Schema
export const ContactInfoSchema = z.object({
  firstName: z.string().default(''),
  lastName: z.string().default(''),
  email: z.string().default(''),
  phone: z.string().default(''),
  city: z.string().default(''),
  state: z.string().default(''),
  country: z.string().default(''),
  zipCode: z.string().default(''),
  location: z.string().default(''),
  linkedIn: z.string().default(''),
  github: z.string().default(''),
  website: z.string().default(''),
  summary: z.string().default(''),
  address: z.string().default(''),
  portfolio: z.string().default(''),
});

export type ContactInfo = z.infer<typeof ContactInfoSchema>;

export type TemplateType = 'simple' | 'modern' | 'professional' | 'classic-garamond';

// Resume Data Schema
export const ResumeSchema = z.object({
  id: z.string().default(() => uuidv4()),
  name: z.string().default('My Resume'),
  template: z.enum(['simple', 'modern', 'professional', 'classic-garamond']).default('simple'),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
  contactInfo: ContactInfoSchema.default({}),
  workExperiences: z.array(WorkExperienceSchema).default([]),
  educations: z.array(EducationSchema).default([]),
  skills: z.array(SkillSchema).default([]),
  projects: z.array(ProjectSchema).default([]),
  languages: z.array(LanguageSchema).default([]),
  certificates: z.array(CertificateSchema).default([]),
  references: z.array(ReferenceSchema).default([]),
});

export type ResumeData = z.infer<typeof ResumeSchema>;

export const defaultResumeData: ResumeData = {
  id: uuidv4(),
  name: 'My Resume',
  template: 'simple',
  createdAt: new Date(),
  updatedAt: new Date(),
  contactInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    location: '',
    linkedIn: '',
    github: '',
    website: '',
    summary: '',
    address: '',
    portfolio: '',
  },
  workExperiences: [],
  educations: [],
  skills: [],
  projects: [],
  languages: [],
  certificates: [],
  references: []
};

// Template Options
export const templateOptions = [
  { value: 'simple', label: 'Simple' },
  { value: 'modern', label: 'Modern' },
  { value: 'professional', label: 'Professional' },
  { value: 'classic-garamond', label: 'Classic Garamond' },
];
