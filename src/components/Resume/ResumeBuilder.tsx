
import React, { useState } from 'react';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import PersonalInfo from './FormSections/PersonalInfo';
import Experience from './FormSections/Experience';
import Education from './FormSections/Education';
import Skills from './FormSections/Skills';
import { useResumeContext } from '@/context/ResumeContext';
import { toast } from 'sonner';
import { TemplateType } from '@/types/resume';
import { useNavigate } from 'react-router-dom';

interface SectionTabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  isCompleted: boolean;
}

const SectionTab: React.FC<SectionTabProps> = ({ id, label, isActive, onClick, isCompleted }) => {
  return (
    <button
      id={id}
      className={`p-3 text-left border-l-4 transition-all ${
        isActive
          ? 'bg-resume-blue-50 border-resume-blue-600 dark:bg-resume-blue-900/20 dark:border-resume-blue-400'
          : isCompleted
          ? 'border-resume-green-400 bg-resume-green-50/50 dark:bg-resume-green-900/10 dark:border-resume-green-600'
          : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <span className="flex-1">{label}</span>
        {isCompleted && !isActive && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-resume-green-600"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </div>
    </button>
  );
};

type Section = 'personalInfo' | 'experience' | 'education' | 'skills';

const ResumeBuilder: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('personalInfo');
  const [templatesExpanded, setTemplatesExpanded] = useState(false);
  const { resumeData, setTemplate } = useResumeContext();
  const navigate = useNavigate();
  
  const handleTemplateSelect = (template: TemplateType) => {
    setTemplate(template);
    toast.success(`Template "${template}" selected`);
  };
  
  const handlePreview = () => {
    navigate('/preview');
  };
  
  const renderSection = () => {
    switch (activeSection) {
      case 'personalInfo':
        return <PersonalInfo />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      default:
        return <PersonalInfo />;
    }
  };
  
  const isPersonalInfoCompleted = () => {
    return !!(resumeData.contactInfo.firstName && resumeData.contactInfo.lastName && resumeData.contactInfo.email);
  };
  
  const isExperienceCompleted = () => {
    if (resumeData.workExperiences.length === 0) return false;
    return resumeData.workExperiences.some(exp => exp.company && exp.position && exp.startDate);
  };
  
  const isEducationCompleted = () => {
    if (resumeData.educations.length === 0) return false;
    return resumeData.educations.some(edu => edu.institution && edu.degree && edu.startDate);
  };
  
  const isSkillsCompleted = () => {
    return resumeData.skills.length > 0 && resumeData.skills.some(skill => skill.name);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Side Navigation */}
      <div className="w-full lg:w-64 flex-shrink-0">
        <Card className="sticky top-20">
          <div className="flex flex-col">
            <SectionTab
              id="personal-info-tab"
              label="Personal Info"
              isActive={activeSection === 'personalInfo'}
              onClick={() => setActiveSection('personalInfo')}
              isCompleted={isPersonalInfoCompleted()}
            />
            <SectionTab
              id="experience-tab"
              label="Work Experience"
              isActive={activeSection === 'experience'}
              onClick={() => setActiveSection('experience')}
              isCompleted={isExperienceCompleted()}
            />
            <SectionTab
              id="education-tab"
              label="Education"
              isActive={activeSection === 'education'}
              onClick={() => setActiveSection('education')}
              isCompleted={isEducationCompleted()}
            />
            <SectionTab
              id="skills-tab"
              label="Skills"
              isActive={activeSection === 'skills'}
              onClick={() => setActiveSection('skills')}
              isCompleted={isSkillsCompleted()}
            />
          </div>
          
          <div className="p-4 border-t">
            <Button onClick={handlePreview} className="w-full mb-2">
              Preview Resume
            </Button>
            
            <div className="mt-4">
              <div 
                className="flex items-center justify-between cursor-pointer text-resume-gray-700 dark:text-resume-gray-300 p-2 rounded hover:bg-resume-gray-100 dark:hover:bg-resume-gray-800"
                onClick={() => setTemplatesExpanded(!templatesExpanded)}
              >
                <span className="font-medium">Selected Template:</span>
                <div className="flex items-center">
                  <span className="capitalize mr-2">{resumeData.template}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${templatesExpanded ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
              
              {templatesExpanded && (
                <div className="mt-2 space-y-2">
                  <button
                    className={`w-full p-2 text-left rounded text-sm ${
                      resumeData.template === 'simple' 
                        ? 'bg-resume-blue-100 text-resume-blue-800 dark:bg-resume-blue-900/30 dark:text-resume-blue-300'
                        : 'hover:bg-resume-gray-100 dark:hover:bg-resume-gray-800'
                    }`}
                    onClick={() => handleTemplateSelect('simple')}
                  >
                    Simple
                  </button>
                  <button
                    className={`w-full p-2 text-left rounded text-sm ${
                      resumeData.template === 'modern' 
                        ? 'bg-resume-blue-100 text-resume-blue-800 dark:bg-resume-blue-900/30 dark:text-resume-blue-300'
                        : 'hover:bg-resume-gray-100 dark:hover:bg-resume-gray-800'
                    }`}
                    onClick={() => handleTemplateSelect('modern')}
                  >
                    Modern
                  </button>
                  <button
                    className={`w-full p-2 text-left rounded text-sm ${
                      resumeData.template === 'professional' 
                        ? 'bg-resume-blue-100 text-resume-blue-800 dark:bg-resume-blue-900/30 dark:text-resume-blue-300'
                        : 'hover:bg-resume-gray-100 dark:hover:bg-resume-gray-800'
                    }`}
                    onClick={() => handleTemplateSelect('professional')}
                  >
                    Professional
                  </button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
      
      {/* Form Area */}
      <div className="flex-1 min-w-0">
        {renderSection()}
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => {
              switch (activeSection) {
                case 'experience':
                  setActiveSection('personalInfo');
                  break;
                case 'education':
                  setActiveSection('experience');
                  break;
                case 'skills':
                  setActiveSection('education');
                  break;
                default:
                  break;
              }
            }}
            disabled={activeSection === 'personalInfo'}
          >
            Previous
          </Button>
          
          <Button
            onClick={() => {
              switch (activeSection) {
                case 'personalInfo':
                  setActiveSection('experience');
                  break;
                case 'experience':
                  setActiveSection('education');
                  break;
                case 'education':
                  setActiveSection('skills');
                  break;
                case 'skills':
                  handlePreview();
                  break;
                default:
                  break;
              }
            }}
          >
            {activeSection === 'skills' ? 'Preview Resume' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
