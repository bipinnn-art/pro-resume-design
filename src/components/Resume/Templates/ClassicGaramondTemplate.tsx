
import React from 'react';
import { ResumeData } from '@/types/resume';

interface ClassicGaramondTemplateProps {
  data: ResumeData;
}

const ClassicGaramondTemplate: React.FC<ClassicGaramondTemplateProps> = ({ data }) => {
  const { contactInfo, workExperiences, educations, skills, languages } = data;

  const formatDate = (dateString: string | null): string => {
    if (!dateString || dateString === 'Present') return dateString || '';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className="resume-page bg-white text-resume-gray-900 font-garamond">
      {/* Header with Name and Contact Info */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold text-black uppercase tracking-wide mb-2">
          {contactInfo.firstName} {contactInfo.lastName}
        </h1>
        
        <div className="text-base text-resume-gray-700">
          {[
            contactInfo.city && contactInfo.state ? `${contactInfo.city}, ${contactInfo.state}` : contactInfo.location, 
            contactInfo.phone, 
            contactInfo.email
          ]
            .filter(Boolean)
            .join(' | ')}
        </div>
      </div>
      
      {/* Summary */}
      {contactInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-black uppercase border-b border-gray-800 mb-2 pb-1">
            Summary
          </h2>
          <p className="text-resume-gray-800 text-justify">
            {contactInfo.summary}
          </p>
        </div>
      )}
      
      {/* Technical Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-black uppercase border-b border-gray-800 mb-2 pb-1">
            Technical Skills
          </h2>
          
          <div className="text-resume-gray-800">
            {(() => {
              const groupedSkills: Record<string, typeof skills> = {};
              
              skills.forEach(skill => {
                const category = skill.category || 'Technical';
                if (!groupedSkills[category]) {
                  groupedSkills[category] = [];
                }
                groupedSkills[category].push(skill);
              });
              
              return Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="mb-1">
                  <strong>{category}: </strong>
                  {categorySkills.map(skill => skill.name).join(', ')}
                </div>
              ));
            })()}
          </div>
        </div>
      )}
      
      {/* Professional Experience */}
      {workExperiences.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-black uppercase border-b border-gray-800 mb-2 pb-1">
            Professional Experience
          </h2>
          
          <div className="space-y-4">
            {workExperiences.map((experience) => (
              <div key={experience.id}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-semibold text-resume-gray-900">{experience.company} - {experience.location}</h3>
                    <p className="italic">{experience.position}</p>
                  </div>
                  <div className="text-resume-gray-700 italic">
                    {formatDate(experience.startDate)} - {experience.isCurrentRole ? "Present" : formatDate(experience.endDate)}
                  </div>
                </div>
                
                {experience.description && (
                  <p className="text-resume-gray-800 mt-1">
                    {experience.description}
                  </p>
                )}
                
                {experience.highlights && experience.highlights.length > 0 && experience.highlights[0] !== '' && (
                  <ul className="list-disc list-outside pl-5 text-resume-gray-800 mt-2 space-y-1">
                    {experience.highlights.map((highlight, index) => (
                      <li key={index} className="ml-1">
                        {highlight.split(' ').length > 0 && <strong>{highlight.split(' ')[0]}</strong>} 
                        {highlight.split(' ').length > 1 && highlight.split(' ').slice(1).join(' ')}
                      </li>
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
          <h2 className="text-lg font-semibold text-black uppercase border-b border-gray-800 mb-2 pb-1">
            Education & Other
          </h2>
          
          <div className="space-y-3">
            {educations.map((education) => (
              <div key={education.id}>
                <div>
                  <h3 className="font-semibold text-resume-gray-900">{education.degree}</h3>
                  <p>
                    {education.institution}, {education.location}
                    {education.gpa && <span className="block">{education.gpa}</span>}
                  </p>
                  {(education.startDate || education.endDate) && (
                    <p className="italic text-resume-gray-700">
                      {education.startDate && formatDate(education.startDate)}
                      {education.endDate && ` - ${formatDate(education.endDate)}`}
                    </p>
                  )}
                </div>
                
                {education.highlights && education.highlights.length > 0 && education.highlights[0] !== '' && (
                  <ul className="list-disc list-outside pl-5 text-resume-gray-800 space-y-1 mt-1">
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
      
      {/* Languages */}
      {languages.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-black uppercase border-b border-gray-800 mb-2 pb-1">
            Languages
          </h2>
          
          <div className="text-resume-gray-800">
            {languages.map((language, index) => (
              <div key={language.id} className="mb-1">
                <strong>{language.name}:</strong> {language.proficiency}
                {index < languages.length - 1 && <br />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassicGaramondTemplate;
