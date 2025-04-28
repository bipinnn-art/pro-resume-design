
import React from 'react';
import { ResumeData } from '@/types/resume';

interface SimpleTemplateProps {
  data: ResumeData;
}

const SimpleTemplate: React.FC<SimpleTemplateProps> = ({ data }) => {
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
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-resume-gray-900 mb-1">
          {contactInfo.firstName} {contactInfo.lastName}
        </h1>
        
        <div className="text-sm text-resume-gray-700 space-x-2">
          {contactInfo.email && (
            <span>{contactInfo.email}</span>
          )}
          {contactInfo.phone && (
            <>
              <span>•</span>
              <span>{contactInfo.phone}</span>
            </>
          )}
          {contactInfo.location && (
            <>
              <span>•</span>
              <span>{contactInfo.location}</span>
            </>
          )}
        </div>
        
        <div className="text-sm text-resume-gray-700 space-x-2 mt-1">
          {contactInfo.linkedIn && (
            <span>{contactInfo.linkedIn}</span>
          )}
          {contactInfo.github && (
            <>
              <span>•</span>
              <span>{contactInfo.github}</span>
            </>
          )}
          {contactInfo.website && (
            <>
              <span>•</span>
              <span>{contactInfo.website}</span>
            </>
          )}
        </div>
      </div>
      
      {/* Summary */}
      {contactInfo.summary && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-resume-gray-900 border-b border-resume-gray-200 mb-2 pb-1">
            Professional Summary
          </h2>
          <p className="text-resume-gray-700 text-sm">
            {contactInfo.summary}
          </p>
        </div>
      )}
      
      {/* Work Experience */}
      {workExperiences.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-resume-gray-900 border-b border-resume-gray-200 mb-2 pb-1">
            Work Experience
          </h2>
          
          <div className="space-y-3">
            {workExperiences.map((experience) => (
              <div key={experience.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-resume-gray-900">{experience.position}</h3>
                    <p className="text-resume-gray-700 text-sm">{experience.company}</p>
                  </div>
                  <div className="text-sm text-resume-gray-600">
                    {formatDate(experience.startDate)} - {formatDate(experience.endDate as string)}
                    {experience.location && <span> | {experience.location}</span>}
                  </div>
                </div>
                
                {experience.description && (
                  <p className="text-sm text-resume-gray-700 mt-1">
                    {experience.description}
                  </p>
                )}
                
                {experience.highlights.length > 0 && experience.highlights[0] !== '' && (
                  <ul className="list-disc list-outside pl-5 text-sm text-resume-gray-700 mt-1 space-y-1">
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
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-resume-gray-900 border-b border-resume-gray-200 mb-2 pb-1">
            Education
          </h2>
          
          <div className="space-y-3">
            {educations.map((education) => (
              <div key={education.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-resume-gray-900">{education.degree}</h3>
                    <p className="text-resume-gray-700 text-sm">
                      {education.institution}
                      {education.fieldOfStudy && <span>, {education.fieldOfStudy}</span>}
                      {education.gpa && <span> • GPA: {education.gpa}</span>}
                    </p>
                  </div>
                  <div className="text-sm text-resume-gray-600">
                    {formatDate(education.startDate)} - {formatDate(education.endDate as string)}
                    {education.location && <span> | {education.location}</span>}
                  </div>
                </div>
                
                {education.highlights.length > 0 && education.highlights[0] !== '' && (
                  <ul className="list-disc list-outside pl-5 text-sm text-resume-gray-700 mt-1 space-y-1">
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
      
      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-resume-gray-900 border-b border-resume-gray-200 mb-2 pb-1">
            Skills
          </h2>
          
          {/* Group skills by category */}
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
                <h3 className="text-sm font-medium text-resume-gray-800">{category}:</h3>
                <p className="text-sm text-resume-gray-700">
                  {categorySkills.map(skill => skill.name).join(', ')}
                </p>
              </div>
            ));
          })()}
        </div>
      )}
      
      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-resume-gray-900 border-b border-resume-gray-200 mb-2 pb-1">
            Projects
          </h2>
          
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-resume-gray-900">
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
                    <p className="text-resume-gray-700 text-sm">{project.description}</p>
                  </div>
                  {project.startDate && (
                    <div className="text-sm text-resume-gray-600">
                      {formatDate(project.startDate)} - {formatDate(project.endDate as string)}
                    </div>
                  )}
                </div>
                
                {project.highlights.length > 0 && project.highlights[0] !== '' && (
                  <ul className="list-disc list-outside pl-5 text-sm text-resume-gray-700 mt-1 space-y-1">
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
      
      {/* Languages */}
      {languages.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-resume-gray-900 border-b border-resume-gray-200 mb-2 pb-1">
            Languages
          </h2>
          
          <div className="flex flex-wrap">
            {languages.map((language, index) => (
              <span key={language.id} className="text-sm text-resume-gray-700">
                {language.name} ({language.proficiency})
                {index < languages.length - 1 && <span className="mx-2">•</span>}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Certificates */}
      {certificates.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-resume-gray-900 border-b border-resume-gray-200 mb-2 pb-1">
            Certifications
          </h2>
          
          <div className="space-y-2">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-resume-gray-900">{certificate.name}</h3>
                  <p className="text-resume-gray-700 text-sm">
                    {certificate.issuer}
                    {certificate.description && <span> - {certificate.description}</span>}
                  </p>
                </div>
                <div className="text-sm text-resume-gray-600">
                  {formatDate(certificate.dateIssued)}
                  {certificate.dateExpires && <span> - {formatDate(certificate.dateExpires)}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* References - Often excluded from initial resume */}
      {references.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-resume-gray-900 border-b border-resume-gray-200 mb-2 pb-1">
            References
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {references.map((reference) => (
              <div key={reference.id} className="text-sm">
                <p className="font-medium text-resume-gray-900">{reference.name}</p>
                <p className="text-resume-gray-700">{reference.position} at {reference.company}</p>
                {reference.email && <p className="text-resume-gray-700">{reference.email}</p>}
                {reference.phone && <p className="text-resume-gray-700">{reference.phone}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleTemplate;
