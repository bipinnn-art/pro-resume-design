
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { Check, X, FileSearch, FileText, ArrowRight } from 'lucide-react';

const AtsGuide = () => {
  const goodExample = `
WORK EXPERIENCE

Marketing Manager
ABC Company, New York, NY
January 2020 - Present

• Increased social media engagement by 45% through implementation of content strategy
• Managed a team of 4 marketing specialists and a $250,000 annual budget
• Developed and executed digital marketing campaigns resulting in 35% growth in lead generation
• Collaborated with sales team to improve conversion rates by 28%
  `;
  
  const badExample = `
WORK EXPERIENCE

✨ MARKETING GURU ✨
ABC Company
2020 - Present

💼 I'm responsible for all things marketing and brand-related!
💻 Social media wizard who loves creating engaging content
📊 Worked with sales on various projects
🚀 Strong team player with a passion for digital marketing
  `;

  return (
    <>
      <PageHeader
        title="ATS Guide" 
        subtitle="Understanding Applicant Tracking Systems and how to optimize your resume to get past the electronic gatekeepers."
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* What is ATS? */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 p-8">
            <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-6">What is an ATS?</h2>
            
            <p className="text-resume-gray-700 dark:text-resume-gray-300 mb-4">
              An Applicant Tracking System (ATS) is software used by employers and recruiters to collect, scan, sort, 
              and rank job applications. These systems help employers manage the hiring process by filtering out 
              candidates who don't meet the minimum qualifications before a human ever sees their resume.
            </p>
            
            <p className="text-resume-gray-700 dark:text-resume-gray-300 mb-4">
              <strong>Key facts about ATS:</strong>
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                  <FileSearch className="h-3 w-3 text-resume-blue-600 dark:text-resume-blue-400" />
                </div>
                <span className="text-resume-gray-700 dark:text-resume-gray-300">
                  <strong>Widespread use:</strong> Over 90% of Fortune 500 companies use ATS software, and it's increasingly common among companies of all sizes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                  <FileSearch className="h-3 w-3 text-resume-blue-600 dark:text-resume-blue-400" />
                </div>
                <span className="text-resume-gray-700 dark:text-resume-gray-300">
                  <strong>Keyword scanning:</strong> Most systems scan for keywords related to the job description to evaluate relevance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                  <FileSearch className="h-3 w-3 text-resume-blue-600 dark:text-resume-blue-400" />
                </div>
                <span className="text-resume-gray-700 dark:text-resume-gray-300">
                  <strong>Initial filtering:</strong> 75% of resumes are eliminated by ATS before reaching a human recruiter.
                </span>
              </li>
            </ul>
            
            <p className="text-resume-gray-700 dark:text-resume-gray-300">
              Understanding how ATS works is crucial for job seekers. By optimizing your resume for these systems, 
              you significantly increase your chances of getting your application in front of actual hiring managers.
            </p>
          </div>
        </div>
        
        {/* How Our Templates Help */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">How Our Templates Help You Pass ATS</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ATS-Optimized Format',
                description: 'All our templates use clean, standard formatting that ATS systems can easily read and parse.'
              },
              {
                title: 'Standard Section Headings',
                description: 'We use conventional section names like "Experience," "Education," and "Skills" that ATS systems recognize.'
              },
              {
                title: 'No Complex Elements',
                description: 'Our templates avoid tables, graphics, headers/footers, and text boxes that confuse ATS systems.'
              },
              {
                title: 'Professional Fonts',
                description: 'We use standard, ATS-friendly fonts that ensure your content is properly scanned and indexed.'
              },
              {
                title: 'Clean Document Structure',
                description: 'Our templates have a logical flow that helps ATS systems understand the hierarchy of information.'
              },
              {
                title: 'PDF Optimization',
                description: 'Our exported PDFs are optimized for machine reading while remaining visually appealing to humans.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-resume-gray-800 p-6 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700">
                <h3 className="text-lg font-semibold text-resume-blue-600 dark:text-resume-blue-400 mb-3">{feature.title}</h3>
                <p className="text-resume-gray-600 dark:text-resume-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* ATS Do's and Don'ts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">ATS Do's and Don'ts</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 overflow-hidden">
              <div className="bg-resume-blue-50 dark:bg-resume-blue-900/30 p-4 border-b border-resume-gray-200 dark:border-resume-gray-700 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-resume-gray-900 dark:text-white">Do This</h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    'Use keywords from the job description',
                    'Stick to standard section headings',
                    'Use a clean, simple layout',
                    'Include both spelled-out terms and acronyms (e.g., "Project Manager (PM)")',
                    'Use standard fonts (Arial, Calibri, Times New Roman)',
                    'Format dates consistently (e.g., "January 2020 - Present")',
                    'Save as a standard PDF file',
                    'Include your name and contact information at the top',
                    'Use bullet points for better readability',
                    'Quantify achievements with numbers and metrics'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-resume-gray-700 dark:text-resume-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Don'ts */}
            <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 overflow-hidden">
              <div className="bg-resume-gray-50 dark:bg-resume-gray-800/70 p-4 border-b border-resume-gray-200 dark:border-resume-gray-700 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <X className="h-4 w-4 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-resume-gray-900 dark:text-white">Avoid This</h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    'Use tables, graphics, images, or icons',
                    'Put information in headers or footers',
                    'Use text boxes or multi-column layouts',
                    'Include abbreviations without spelling them out first',
                    'Use creative job titles (e.g., "Marketing Ninja")',
                    'Submit files in formats other than PDF or .docx',
                    'Use fancy fonts, colors, or formatting',
                    'Submit without proofreading for spelling errors',
                    'Use creative section headings that ATS might not recognize',
                    'Include special characters or emojis'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-red-100 dark:bg-red-900 flex-shrink-0 flex items-center justify-center">
                        <X className="h-3 w-3 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-resume-gray-700 dark:text-resume-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Example Comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">Good vs. Bad ATS Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Good Example */}
            <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 overflow-hidden">
              <div className="bg-green-50 dark:bg-green-900/30 p-4 border-b border-resume-gray-200 dark:border-resume-gray-700 flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-resume-gray-900 dark:text-white">ATS-Friendly Format</h3>
              </div>
              
              <div className="p-6">
                <pre className="bg-resume-gray-50 dark:bg-resume-gray-900/50 p-4 rounded-md whitespace-pre-wrap font-mono text-sm text-resume-gray-800 dark:text-resume-gray-300 border border-resume-gray-200 dark:border-resume-gray-700">
                  {goodExample}
                </pre>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-resume-gray-900 dark:text-white mb-3">Why This Works:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0 flex items-center justify-center">
                        <Check className="h-2 w-2 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">Clear section heading "WORK EXPERIENCE" is easily recognized by ATS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0 flex items-center justify-center">
                        <Check className="h-2 w-2 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">Job title, company, location, and dates are clearly formatted</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0 flex items-center justify-center">
                        <Check className="h-2 w-2 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">Uses simple bullet points to highlight achievements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0 flex items-center justify-center">
                        <Check className="h-2 w-2 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">Includes keywords like "marketing," "budget," "team," "strategy," and "campaigns"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0 flex items-center justify-center">
                        <Check className="h-2 w-2 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">Quantifies achievements with specific percentages and numbers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Bad Example */}
            <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 overflow-hidden">
              <div className="bg-red-50 dark:bg-red-900/30 p-4 border-b border-resume-gray-200 dark:border-resume-gray-700 flex items-center gap-2">
                <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h3 className="text-xl font-bold text-resume-gray-900 dark:text-white">ATS-Problematic Format</h3>
              </div>
              
              <div className="p-6">
                <pre className="bg-resume-gray-50 dark:bg-resume-gray-900/50 p-4 rounded-md whitespace-pre-wrap font-mono text-sm text-resume-gray-800 dark:text-resume-gray-300 border border-resume-gray-200 dark:border-resume-gray-700">
                  {badExample}
                </pre>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-resume-gray-900 dark:text-white mb-3">Problems With This Format:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded-full bg-red-100 dark:bg-red-900 flex-shrink-0 flex items-center justify-center">
                        <X className="h-2 w-2 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">Uses emojis that ATS cannot properly interpret</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded-full bg-red-100 dark:bg-red-900 flex-shrink-0 flex items-center justify-center">
                        <X className="h-2 w-2 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">Non-standard job title "MARKETING GURU" may not match keywords</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded-full bg-red-100 dark:bg-red-900 flex-shrink-0 flex items-center justify-center">
                        <X className="h-2 w-2 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">Missing location information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded-full bg-red-100 dark:bg-red-900 flex-shrink-0 flex items-center justify-center">
                        <X className="h-2 w-2 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">Vague descriptions with no quantifiable achievements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded-full bg-red-100 dark:bg-red-900 flex-shrink-0 flex items-center justify-center">
                        <X className="h-2 w-2 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">Uses first-person language "I'm" instead of action verbs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="bg-resume-blue-600 dark:bg-resume-blue-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Build Your ATS-Friendly Resume Today</h2>
          <p className="text-resume-blue-100 mb-6 max-w-2xl mx-auto">
            Start creating a resume that will get past the ATS filters and into the hands of hiring managers.
            Our templates are specifically designed to help you pass both the electronic and human reviews.
          </p>
          <div className="flex justify-center">
            <Link to="/builder">
              <Button variant="premium" size="lg" className="bg-white text-resume-blue-600 hover:bg-resume-gray-100">
                Create Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AtsGuide;
