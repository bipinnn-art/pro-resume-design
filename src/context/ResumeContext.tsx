
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ResumeData, defaultResumeData, WorkExperience, Education, Skill, Project, Language, Certificate, Reference } from "@/types/resume";
import { v4 as uuidv4 } from "uuid";

interface ResumeContextType {
  resumeData: ResumeData;
  updateContactInfo: (contactInfo: Partial<ResumeData['contactInfo']>) => void;
  
  addWorkExperience: () => void;
  updateWorkExperience: (id: string, experience: Partial<WorkExperience>) => void;
  removeWorkExperience: (id: string) => void;
  
  addEducation: () => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  
  addSkill: () => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  removeSkill: (id: string) => void;
  
  addProject: () => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  removeProject: (id: string) => void;
  
  addLanguage: () => void;
  updateLanguage: (id: string, language: Partial<Language>) => void;
  removeLanguage: (id: string) => void;
  
  addCertificate: () => void;
  updateCertificate: (id: string, certificate: Partial<Certificate>) => void;
  removeCertificate: (id: string) => void;
  
  addReference: () => void;
  updateReference: (id: string, reference: Partial<Reference>) => void;
  removeReference: (id: string) => void;
  
  setTemplate: (template: ResumeData['template']) => void;
  resetResume: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResumeContext must be used within a ResumeProvider");
  }
  return context;
};

interface ResumeProviderProps {
  children: ReactNode;
}

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : defaultResumeData;
  });

  // Save to localStorage whenever resumeData changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const updateContactInfo = (contactInfo: Partial<ResumeData['contactInfo']>) => {
    setResumeData(prev => ({
      ...prev,
      contactInfo: { ...prev.contactInfo, ...contactInfo },
      updatedAt: new Date()
    }));
  };

  // Work Experience
  const addWorkExperience = () => {
    const newExperience: WorkExperience = {
      id: uuidv4(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      highlights: [""],
      isCurrentRole: false
    };
    
    setResumeData(prev => ({
      ...prev,
      workExperiences: [newExperience, ...prev.workExperiences],
      updatedAt: new Date()
    }));
  };

  const updateWorkExperience = (id: string, experience: Partial<WorkExperience>) => {
    setResumeData(prev => ({
      ...prev,
      workExperiences: prev.workExperiences.map(exp => 
        exp.id === id ? { ...exp, ...experience } : exp
      ),
      updatedAt: new Date()
    }));
  };

  const removeWorkExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      workExperiences: prev.workExperiences.filter(exp => exp.id !== id),
      updatedAt: new Date()
    }));
  };

  // Education
  const addEducation = () => {
    const newEducation: Education = {
      id: uuidv4(),
      institution: "",
      degree: "",
      fieldOfStudy: "",
      location: "",
      startDate: "",
      endDate: "",
      highlights: [""],
      isCurrentlyEnrolled: false
    };
    
    setResumeData(prev => ({
      ...prev,
      educations: [newEducation, ...prev.educations],
      updatedAt: new Date()
    }));
  };

  const updateEducation = (id: string, education: Partial<Education>) => {
    setResumeData(prev => ({
      ...prev,
      educations: prev.educations.map(edu => 
        edu.id === id ? { ...edu, ...education } : edu
      ),
      updatedAt: new Date()
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      educations: prev.educations.filter(edu => edu.id !== id),
      updatedAt: new Date()
    }));
  };

  // Skills
  const addSkill = () => {
    const newSkill: Skill = {
      id: uuidv4(),
      name: "",
      level: 3,
      category: "Technical"
    };
    
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill],
      updatedAt: new Date()
    }));
  };

  const updateSkill = (id: string, skill: Partial<Skill>) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(s => 
        s.id === id ? { ...s, ...skill } : s
      ),
      updatedAt: new Date()
    }));
  };

  const removeSkill = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id),
      updatedAt: new Date()
    }));
  };

  // Projects
  const addProject = () => {
    const newProject: Project = {
      id: uuidv4(),
      name: "",
      description: "",
      highlights: [""],
      technologies: []
    };
    
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject],
      updatedAt: new Date()
    }));
  };

  const updateProject = (id: string, project: Partial<Project>) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(p => 
        p.id === id ? { ...p, ...project } : p
      ),
      updatedAt: new Date()
    }));
  };

  const removeProject = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id),
      updatedAt: new Date()
    }));
  };

  // Languages
  const addLanguage = () => {
    const newLanguage: Language = {
      id: uuidv4(),
      name: "",
      proficiency: "Basic"
    };
    
    setResumeData(prev => ({
      ...prev,
      languages: [...prev.languages, newLanguage],
      updatedAt: new Date()
    }));
  };

  const updateLanguage = (id: string, language: Partial<Language>) => {
    setResumeData(prev => ({
      ...prev,
      languages: prev.languages.map(l => 
        l.id === id ? { ...l, ...language } : l
      ),
      updatedAt: new Date()
    }));
  };

  const removeLanguage = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      languages: prev.languages.filter(l => l.id !== id),
      updatedAt: new Date()
    }));
  };

  // Certificates
  const addCertificate = () => {
    const newCertificate: Certificate = {
      id: uuidv4(),
      name: "",
      issuer: "",
      dateIssued: "",
      description: ""
    };
    
    setResumeData(prev => ({
      ...prev,
      certificates: [...prev.certificates, newCertificate],
      updatedAt: new Date()
    }));
  };

  const updateCertificate = (id: string, certificate: Partial<Certificate>) => {
    setResumeData(prev => ({
      ...prev,
      certificates: prev.certificates.map(c => 
        c.id === id ? { ...c, ...certificate } : c
      ),
      updatedAt: new Date()
    }));
  };

  const removeCertificate = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      certificates: prev.certificates.filter(c => c.id !== id),
      updatedAt: new Date()
    }));
  };

  // References
  const addReference = () => {
    const newReference: Reference = {
      id: uuidv4(),
      name: "",
      company: "",
      position: "",
      email: "",
      phone: ""
    };
    
    setResumeData(prev => ({
      ...prev,
      references: [...prev.references, newReference],
      updatedAt: new Date()
    }));
  };

  const updateReference = (id: string, reference: Partial<Reference>) => {
    setResumeData(prev => ({
      ...prev,
      references: prev.references.map(r => 
        r.id === id ? { ...r, ...reference } : r
      ),
      updatedAt: new Date()
    }));
  };

  const removeReference = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      references: prev.references.filter(r => r.id !== id),
      updatedAt: new Date()
    }));
  };

  // Template
  const setTemplate = (template: ResumeData['template']) => {
    setResumeData(prev => ({
      ...prev,
      template,
      updatedAt: new Date()
    }));
  };

  // Reset
  const resetResume = () => {
    setResumeData(defaultResumeData);
  };

  const value = {
    resumeData,
    updateContactInfo,
    
    addWorkExperience,
    updateWorkExperience,
    removeWorkExperience,
    
    addEducation,
    updateEducation,
    removeEducation,
    
    addSkill,
    updateSkill,
    removeSkill,
    
    addProject,
    updateProject,
    removeProject,
    
    addLanguage,
    updateLanguage,
    removeLanguage,
    
    addCertificate,
    updateCertificate,
    removeCertificate,
    
    addReference,
    updateReference,
    removeReference,
    
    setTemplate,
    resetResume
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};
