
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { FileText, ArrowRight, Check } from 'lucide-react';

const ResumeTips = () => {
  const sections = [
    {
      title: 'Contact Information',
      tips: [
        'Include your full name, phone number, professional email, and location (city, state).',
        'Add LinkedIn profile URL if it\'s up-to-date and professional.',
        'Optional: portfolio website or GitHub for tech roles.',
        'Avoid personal details like age, marital status, or photo (in US/Canadian resumes).'
      ]
    },
    {
      title: 'Professional Summary',
      tips: [
        'Keep it concise—3-5 impactful sentences maximum.',
        'Tailor it specifically to each job application.',
        'Include years of experience, relevant skills, and key achievements.',
        'Use strong action verbs and industry keywords.',
        'Avoid first-person pronouns (I, me, my).'
      ]
    },
    {
      title: 'Work Experience',
      tips: [
        'List experiences in reverse chronological order (most recent first).',
        'Include company name, location, job title, and dates of employment.',
        'Focus on achievements rather than responsibilities.',
        'Quantify results with numbers when possible (e.g., "Increased sales by 20%").',
        'Use bullet points (5-6 maximum per role) for easy scanning.',
        'Start each bullet with strong action verbs (managed, developed, implemented).',
        'Incorporate keywords from the job description.'
      ]
    },
    {
      title: 'Skills Section',
      tips: [
        'Create a dedicated skills section to pass ATS scans.',
        'Divide skills into categories (Technical, Soft, Languages) if you have many.',
        "Only list skills you're comfortable discussing in interviews.",
        'Include software proficiencies relevant to your industry.',
        'Adjust skills based on each job application.'
      ]
    },
    {
      title: 'Education',
      tips: [
        'List degrees in reverse chronological order.',
        'Include institution name, location, degree, field of study, and graduation date.',
        'Add GPA only if it\'s impressive (3.5+) and you\'re a recent graduate.',
        'Include relevant coursework, academic honors, or projects if you have limited work experience.',
        'If you have extensive work experience, keep education brief.'
      ]
    },
    {
      title: 'Formatting Tips',
      tips: [
        'Keep your resume to 1-2 pages maximum.',
        'Use consistent formatting throughout (fonts, bullets, spacing).',
        'Choose a clean, readable font (Arial, Calibri, Helvetica).',
        'Use 10-12 pt font size for body text, slightly larger for headings.',
        'Include plenty of white space to improve readability.',
        'Save and send as a PDF to preserve formatting.',
        'Name your file professionally (FirstName-LastName-Resume.pdf).'
      ]
    },
    {
      title: 'ATS Optimization',
      tips: [
        'Use standard section headings (Experience, Education, Skills).',
        'Avoid tables, graphics, headers/footers, and text boxes.',
        'Incorporate exact keywords from the job description.',
        'Use both spelled-out terms and acronyms (Project Manager, PM).',
        'Keep formatting simple and avoid unusual fonts.'
      ]
    }
  ];

  return (
    <>
      <PageHeader
        title="Resume Writing Tips" 
        subtitle="Expert advice to help you create a professional, effective resume that gets you noticed by recruiters and passes ATS systems."
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-resume-gray-700 dark:text-resume-gray-300 mb-6">
            Your resume is often the first impression you make on potential employers. In today's competitive job market, 
            a well-crafted resume is essential to stand out from the crowd and secure an interview. Follow these expert tips 
            to create a resume that showcases your skills and experience effectively.
          </p>
          
          <div className="flex justify-center mt-8 mb-12">
            <Link to="/builder">
              <Button variant="premium" size="lg">
                Build Your Resume Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Tips Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 overflow-hidden">
              <div className="bg-resume-blue-50 dark:bg-resume-blue-900/30 p-4 border-b border-resume-gray-200 dark:border-resume-gray-700">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-resume-blue-600 dark:text-resume-blue-400" />
                  <h2 className="text-xl font-bold text-resume-gray-900 dark:text-white">{section.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                        <Check className="h-3 w-3 text-resume-blue-600 dark:text-resume-blue-400" />
                      </div>
                      <span className="text-resume-gray-700 dark:text-resume-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Common Mistakes to Avoid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">Common Resume Mistakes to Avoid</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Using a generic, non-tailored resume for all applications',
              'Including irrelevant work experience or personal information',
              'Typos and grammatical errors',
              'Using an unprofessional email address',
              'Cluttered, hard-to-read formatting',
              'Focusing on job duties rather than achievements',
              'Including references directly on the resume',
              'Using vague statements without concrete examples',
              'Outdated or irrelevant information',
              'Lying or exaggerating qualifications'
            ].map((mistake, i) => (
              <div key={i} className="bg-resume-gray-50 dark:bg-resume-gray-800/50 p-5 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center text-resume-blue-600 dark:text-resume-blue-400">
                    <span className="text-xs font-bold">✕</span>
                  </div>
                  <span className="text-resume-gray-700 dark:text-resume-gray-300">{mistake}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Resume Templates */}
        <div className="mt-16 bg-resume-blue-50 dark:bg-resume-blue-900/20 rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-4">Ready to Apply These Tips?</h2>
            <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-6">
              Use our free resume builder with professionally designed templates to create your standout resume today.
            </p>
            <div className="flex justify-center">
              <Link to="/templates">
                <Button variant="premium" size="lg">
                  Browse Resume Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeTips;
