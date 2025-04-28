import React from 'react';
import { TextInput, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Select } from '@/components/UI';
import { useResumeContext } from '@/context/ResumeContext';

const skillLevelOptions = [
  { value: '1', label: 'Beginner' },
  { value: '2', label: 'Elementary' },
  { value: '3', label: 'Intermediate' },
  { value: '4', label: 'Advanced' },
  { value: '5', label: 'Expert' }
];

const skillCategoryOptions = [
  { value: 'Technical', label: 'Technical' },
  { value: 'Soft', label: 'Soft Skills' },
  { value: 'Language', label: 'Language' },
  { value: 'Software', label: 'Software' },
  { value: 'Industry', label: 'Industry Knowledge' },
  { value: 'Other', label: 'Other' }
];

const Skills: React.FC = () => {
  const { resumeData, addSkill, updateSkill, removeSkill } = useResumeContext();
  const { skills } = resumeData;

  const handleChange = (id: string, field: string, value: string | number) => {
    if (field === 'level') {
      updateSkill(id, { [field]: Number(value) });
    } else {
      updateSkill(id, { [field]: value });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Skills</CardTitle>
          <CardDescription>
            Add your technical and professional skills
          </CardDescription>
        </div>
        <Button onClick={addSkill} variant="default" size="sm">
          Add Skill
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {skills.length === 0 ? (
          <div className="text-center py-6 text-resume-gray-500">
            <p>No skills added yet. Click "Add Skill" to get started.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center font-medium text-sm text-resume-gray-700 dark:text-resume-gray-300 border-b pb-2">
              <div className="md:pl-3">Skill Name</div>
              <div>Category</div>
              <div>Proficiency Level</div>
            </div>
            
            {skills.map((skill) => (
              <div 
                key={skill.id} 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-2 relative"
              >
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => removeSkill(skill.id)}
                    className="text-resume-gray-400 hover:text-red-500 transition-colors"
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
                  <TextInput
                    value={skill.name}
                    onChange={(e) => handleChange(skill.id, 'name', e.target.value)}
                    placeholder="e.g., React.js"
                    className="flex-1"
                  />
                </div>
                
                <Select
                  options={skillCategoryOptions}
                  value={skill.category || 'Technical'}
                  onChange={(e) => handleChange(skill.id, 'category', e.target.value)}
                />
                
                <Select
                  options={skillLevelOptions}
                  value={String(skill.level || 3)}
                  onChange={(e) => handleChange(skill.id, 'level', e.target.value)}
                />
              </div>
            ))}
          </>
        )}
        
        {skills.length > 0 && (
          <div className="flex justify-center">
            <Button
              onClick={addSkill}
              variant="outline"
              className="w-full max-w-sm"
            >
              Add Another Skill
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Skills;
