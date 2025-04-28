
import React from 'react';
import { ResumeData } from '@/types/resume';

interface ProfessionalTemplateProps {
  data: ResumeData;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ data }) => {
  const { contactInfo, workExperiences, educations, skills, projects, languages, certificates, references } = data;

  const formatDate = (dateString: string): string => {
    if (!dateString || dateString === 'Present') return dateString;
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className="resume-page bg-white text-resume-gray-900 font-sans">
      {/* Header */}
      <div className="border-b-4 border-resume-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-resume-gray-900 uppercase tracking-wider mb-2">
          {contactInfo.firstName} {contactInfo.lastName}
        </h1>
        
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-resume-gray-700">
          {contactInfo.email && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {contactInfo.email}
            </div>
          )}
          
          {contactInfo.phone && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {contactInfo.phone}
            </div>
          )}
          
          {(contactInfo.city || contactInfo.state || contactInfo.country) && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {[contactInfo.city, contactInfo.state, contactInfo.country]
                .filter(Boolean)
                .join(', ')}
            </div>
          )}
          
          {contactInfo.linkedIn && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              {contactInfo.linkedIn}
            </div>
          )}
          
          {contactInfo.github && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              {contactInfo.github}
            </div>
          )}
          
          {contactInfo.website && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {contactInfo.website}
            </div>
          )}
        </div>
      </div>
      
      {/* Summary */}
      {contactInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider text-resume-gray-900 border-b-2 border-resume-gray-300 mb-2 pb-1">
            Professional Summary
          </h2>
          <p className="text-resume-gray-700">
            {contactInfo.summary}
          </p>
        </div>
      )}
      
      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider text-resume-gray-900 border-b-2 border-resume-gray-300 mb-2 pb-1">
            Technical Skills
          </h2>
          
          {(() => {
            const groupedSkills: Record<string, typeof skills> = {};
            
            skills.forEach(skill => {
              const category = skill.category || 'Other';
              if (!groupedSkills[category]) {
                groupedSkills[category] = [];
              }
              groupedSkills[category].push(skill);
            });
            
            return Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="mb-2">
                <h3 className="text-sm font-semibold text-resume-gray-800">{category}:</h3>
                <p className="text-resume-gray-700">
                  {categorySkills.map(skill => skill.name).join(' • ')}
                </p>
              </div>
            ));
          })()}
        </div>
      )}
      
      {/* Work Experience */}
      {workExperiences.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider text-resume-gray-900 border-b-2 border-resume-gray-300 mb-3 pb-1">
            Professional Experience
          </h2>
          
          <div className="space-y-4">
            {workExperiences.map((experience) => (
              <div key={experience.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-resume-gray-900">
                    {experience.position} | {experience.company}
                  </h3>
                  <div className="text-sm font-medium text-resume-gray-700">
                    {formatDate(experience.startDate)} - {formatDate(experience.endDate as string)}
                  </div>
                </div>
                
                {experience.location && (
                  <p className="text-sm italic text-resume-gray-600 mb-1">
                    {experience.location}
                  </p>
                )}
                
                {experience.description && (
                  <p className="text-resume-gray-700 mb-1">
                    {experience.description}
                  </p>
                )}
                
                {experience.highlights.length > 0 && experience.highlights[0] !== '' && (
                  <ul className="list-disc list-outside pl-5 text-resume-gray-700 space-y-0.5">
                    {experience.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Education */}
      {educations.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider text-resume-gray-900 border-b-2 border-resume-gray-300 mb-3 pb-1">
            Education
          </h2>
          
          <div className="space-y-3">
            {educations.map((education) => (
              <div key={education.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <div>
                    <h3 className="font-semibold text-resume-gray-900">
                      {education.degree}
                      {education.fieldOfStudy && <span> in {education.fieldOfStudy}</span>}
                    </h3>
                    <p className="text-resume-gray-700">
                      {education.institution}
                      {education.location && <span>, {education.location}</span>}
                    </p>
                  </div>
                  <div className="text-sm font-medium text-resume-gray-700">
                    {formatDate(education.startDate)} - {formatDate(education.endDate as string)}
                  </div>
                </div>
                
                {education.gpa && (
                  <p className="text-sm text-resume-gray-700 mb-1">
                    GPA: {education.gpa}
                  </p>
                )}
                
                {education.highlights.length > 0 && education.highlights[0] !== '' && (
                  <ul className="list-disc list-outside pl-5 text-sm text-resume-gray-700">
                    {education.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider text-resume-gray-900 border-b-2 border-resume-gray-300 mb-3 pb-1">
            Projects
          </h2>
          
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-resume-gray-900">
                    {project.name}
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-resume-blue-600 text-sm ml-2 no-print"
                      >
                        (Link)
                      </a>
                    )}
                  </h3>
                  
                  {project.startDate && (
                    <div className="text-sm font-medium text-resume-gray-700">
                      {formatDate(project.startDate)} - {formatDate(project.endDate as string)}
                    </div>
                  )}
                </div>
                
                {project.description && (
                  <p className="text-resume-gray-700 mb-1">
                    {project.description}
                  </p>
                )}
                
                {project.highlights.length > 0 && project.highlights[0] !== '' && (
                  <ul className="list-disc list-outside pl-5 text-resume-gray-700 space-y-0.5">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
                
                {project.technologies && project.technologies.length > 0 && (
                  <p className="text-sm text-resume-gray-700 mt-1">
                    <span className="font-medium">Technologies:</span> {project.technologies.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Certifications and Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Certifications */}
        {certificates.length > 0 && (
          <div>
            <h2 className="text-lg font-bold uppercase tracking-wider text-resume-gray-900 border-b-2 border-resume-gray-300 mb-2 pb-1">
              Certifications
            </h2>
            
            <ul className="list-disc list-outside pl-5 text-resume-gray-700 space-y-1">
              {certificates.map((certificate) => (
                <li key={certificate.id}>
                  <span className="font-medium">{certificate.name}</span> - {certificate.issuer}
                  <span className="text-sm text-resume-gray-600 ml-1">
                    ({formatDate(certificate.dateIssued)})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h2 className="text-lg font-bold uppercase tracking-wider text-resume-gray-900 border-b-2 border-resume-gray-300 mb-2 pb-1">
              Languages
            </h2>
            
            <ul className="list-disc list-outside pl-5 text-resume-gray-700 space-y-1">
              {languages.map((language) => (
                <li key={language.id}>
                  <span className="font-medium">{language.name}</span> - {language.proficiency}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
