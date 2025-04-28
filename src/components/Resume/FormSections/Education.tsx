
import React from 'react';
import { TextInput } from '@/components/UI/TextInput';
import { TextArea } from '@/components/UI/TextArea';
import { Button } from '@/components/UI/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/UI/Card';
import { useResumeContext } from '@/context/ResumeContext';

const Education: React.FC = () => {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResumeContext();
  const { educations } = resumeData;

  const handleChange = (id: string, field: string, value: string | boolean) => {
    updateEducation(id, { [field]: value });
  };

  const handleHighlightChange = (id: string, index: number, value: string) => {
    const education = educations.find(edu => edu.id === id);
    if (!education) return;
    
    const highlights = [...education.highlights];
    highlights[index] = value;
    
    updateEducation(id, { highlights });
  };

  const addHighlight = (id: string) => {
    const education = educations.find(edu => edu.id === id);
    if (!education) return;
    
    const highlights = [...education.highlights, ""];
    updateEducation(id, { highlights });
  };

  const removeHighlight = (id: string, index: number) => {
    const education = educations.find(edu => edu.id === id);
    if (!education) return;
    
    const highlights = [...education.highlights];
    highlights.splice(index, 1);
    
    updateEducation(id, { highlights });
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Education</CardTitle>
          <CardDescription>
            Add your educational background
          </CardDescription>
        </div>
        <Button onClick={addEducation} variant="default" size="sm">
          Add Education
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {educations.length === 0 ? (
          <div className="text-center py-6 text-resume-gray-500">
            <p>No education added yet. Click "Add Education" to get started.</p>
          </div>
        ) : (
          educations.map((education, eduIndex) => (
            <div 
              key={education.id} 
              className="border rounded-md p-4 space-y-4 relative"
            >
              <button
                type="button"
                onClick={() => removeEducation(education.id)}
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
                  label="Institution"
                  value={education.institution}
                  onChange={(e) => handleChange(education.id, 'institution', e.target.value)}
                  placeholder="University Name"
                  required
                />
                <TextInput
                  label="Degree"
                  value={education.degree}
                  onChange={(e) => handleChange(education.id, 'degree', e.target.value)}
                  placeholder="Bachelor of Science"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Field of Study (Optional)"
                  value={education.fieldOfStudy || ''}
                  onChange={(e) => handleChange(education.id, 'fieldOfStudy', e.target.value)}
                  placeholder="Computer Science"
                />
                <TextInput
                  label="Location (Optional)"
                  value={education.location || ''}
                  onChange={(e) => handleChange(education.id, 'location', e.target.value)}
                  placeholder="City, State or Country"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-1/2">
                    <TextInput
                      label="Start Date"
                      type="month"
                      value={education.startDate}
                      onChange={(e) => handleChange(education.id, 'startDate', e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    {!education.isCurrentlyEnrolled ? (
                      <TextInput
                        label="End Date"
                        type="month"
                        value={education.endDate as string}
                        onChange={(e) => handleChange(education.id, 'endDate', e.target.value)}
                        required
                        disabled={education.isCurrentlyEnrolled}
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
                
                <TextInput
                  label="GPA (Optional)"
                  value={education.gpa || ''}
                  onChange={(e) => handleChange(education.id, 'gpa', e.target.value)}
                  placeholder="3.8 / 4.0"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`current-education-${education.id}`}
                  checked={education.isCurrentlyEnrolled}
                  onChange={(e) => {
                    handleChange(education.id, 'isCurrentlyEnrolled', e.target.checked);
                    if (e.target.checked) {
                      handleChange(education.id, 'endDate', 'Present');
                    } else {
                      handleChange(education.id, 'endDate', '');
                    }
                  }}
                  className="rounded text-resume-blue-600 focus:ring-resume-blue-500"
                />
                <label htmlFor={`current-education-${education.id}`} className="text-sm text-resume-gray-700 dark:text-resume-gray-300">
                  I'm currently studying here
                </label>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-medium text-resume-gray-700 dark:text-resume-gray-300 mb-1">
                  Notable Achievements (Optional)
                </label>
                
                {education.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-start gap-2">
                    <TextInput
                      value={highlight}
                      onChange={(e) => handleHighlightChange(education.id, highlightIndex, e.target.value)}
                      placeholder="Academic honors, scholarships, relevant coursework..."
                      className="flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => removeHighlight(education.id, highlightIndex)}
                      className="mt-2 p-1 rounded text-resume-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                      disabled={education.highlights.length <= 1}
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
                  onClick={() => addHighlight(education.id)}
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
        
        {educations.length > 0 && (
          <div className="flex justify-center">
            <Button
              onClick={addEducation}
              variant="outline"
              className="w-full max-w-sm"
            >
              Add Another Education
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Education;
