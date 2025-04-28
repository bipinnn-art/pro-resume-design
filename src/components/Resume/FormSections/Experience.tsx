import React from 'react';
import { TextInput, TextArea, Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/UI';
import { useResumeContext } from '@/context/ResumeContext';

const Experience: React.FC = () => {
  const { resumeData, addWorkExperience, updateWorkExperience, removeWorkExperience } = useResumeContext();
  const { workExperiences } = resumeData;

  const handleChange = (id: string, field: string, value: string | boolean) => {
    updateWorkExperience(id, { [field]: value });
  };

  const handleHighlightChange = (id: string, index: number, value: string) => {
    const experience = workExperiences.find(exp => exp.id === id);
    if (!experience) return;
    
    const highlights = [...experience.highlights];
    highlights[index] = value;
    
    updateWorkExperience(id, { highlights });
  };

  const addHighlight = (id: string) => {
    const experience = workExperiences.find(exp => exp.id === id);
    if (!experience) return;
    
    const highlights = [...experience.highlights, ""];
    updateWorkExperience(id, { highlights });
  };

  const removeHighlight = (id: string, index: number) => {
    const experience = workExperiences.find(exp => exp.id === id);
    if (!experience) return;
    
    const highlights = [...experience.highlights];
    highlights.splice(index, 1);
    
    updateWorkExperience(id, { highlights });
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Work Experience</CardTitle>
          <CardDescription>
            Add your relevant work history and accomplishments
          </CardDescription>
        </div>
        <Button onClick={addWorkExperience} variant="default" size="sm">
          Add Experience
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {workExperiences.length === 0 ? (
          <div className="text-center py-6 text-resume-gray-500">
            <p>No work experiences added yet. Click "Add Experience" to get started.</p>
          </div>
        ) : (
          workExperiences.map((experience, expIndex) => (
            <div 
              key={experience.id} 
              className="border rounded-md p-4 space-y-4 relative"
            >
              <button
                type="button"
                onClick={() => removeWorkExperience(experience.id)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-resume-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
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
                >
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6L18 18"></path>
                </svg>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Company"
                  value={experience.company}
                  onChange={(e) => handleChange(experience.id, 'company', e.target.value)}
                  placeholder="Company Name"
                  required
                />
                <TextInput
                  label="Position"
                  value={experience.position}
                  onChange={(e) => handleChange(experience.id, 'position', e.target.value)}
                  placeholder="Job Title"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Location (Optional)"
                  value={experience.location || ''}
                  onChange={(e) => handleChange(experience.id, 'location', e.target.value)}
                  placeholder="City, State or Remote"
                />
                <div className="flex items-center gap-4">
                  <div className="w-1/2">
                    <TextInput
                      label="Start Date"
                      type="month"
                      value={experience.startDate}
                      onChange={(e) => handleChange(experience.id, 'startDate', e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    {!experience.isCurrentRole ? (
                      <TextInput
                        label="End Date"
                        type="month"
                        value={experience.endDate as string}
                        onChange={(e) => handleChange(experience.id, 'endDate', e.target.value)}
                        required
                        disabled={experience.isCurrentRole}
                      />
                    ) : (
                      <TextInput
                        label="End Date"
                        value="Present"
                        disabled
                      />
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`current-role-${experience.id}`}
                  checked={experience.isCurrentRole}
                  onChange={(e) => {
                    handleChange(experience.id, 'isCurrentRole', e.target.checked);
                    if (e.target.checked) {
                      handleChange(experience.id, 'endDate', 'Present');
                    } else {
                      handleChange(experience.id, 'endDate', '');
                    }
                  }}
                  className="rounded text-resume-blue-600 focus:ring-resume-blue-500"
                />
                <label htmlFor={`current-role-${experience.id}`} className="text-sm text-resume-gray-700 dark:text-resume-gray-300">
                  I currently work here
                </label>
              </div>
              
              <TextArea
                label="Job Description"
                value={experience.description}
                onChange={(e) => handleChange(experience.id, 'description', e.target.value)}
                placeholder="Brief overview of your role and responsibilities..."
                rows={3}
              />
              
              <div className="space-y-3">
                <label className="block text-sm font-medium text-resume-gray-700 dark:text-resume-gray-300 mb-1">
                  Key Achievements / Responsibilities
                </label>
                
                {experience.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-start gap-2">
                    <TextInput
                      value={highlight}
                      onChange={(e) => handleHighlightChange(experience.id, highlightIndex, e.target.value)}
                      placeholder="Achieved X by doing Y which resulted in Z..."
                      className="flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => removeHighlight(experience.id, highlightIndex)}
                      className="mt-2 p-1 rounded text-resume-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                      disabled={experience.highlights.length <= 1}
                    >
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
                      >
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6L18 18"></path>
                      </svg>
                    </button>
                  </div>
                ))}
                
                <Button 
                  type="button" 
                  onClick={() => addHighlight(experience.id)}
                  variant="outline"
                  size="sm"
                  className="mt-1"
                >
                  Add Achievement
                </Button>
              </div>
            </div>
          ))
        )}
        
        {workExperiences.length > 0 && (
          <div className="flex justify-center">
            <Button
              onClick={addWorkExperience}
              variant="outline"
              className="w-full max-w-sm"
            >
              Add Another Experience
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Experience;
