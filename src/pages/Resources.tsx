
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { FileText, Check, ExternalLink, ArrowRight, Book, Briefcase, Search, Clock } from 'lucide-react';

const Resources = () => {
  return (
    <>
      <PageHeader
        title="Career Resources" 
        subtitle="Comprehensive tools and guides to help you succeed in your job search and career development."
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { 
              title: 'Resume Tips',
              icon: FileText,
              description: 'Expert advice for creating effective resumes',
              link: '/resume-tips'
            },
            { 
              title: 'ATS Guide',
              icon: Search,
              description: 'Optimize your resume for applicant tracking systems',
              link: '/ats-guide'
            },
            { 
              title: 'Career Advice',
              icon: Briefcase,
              description: 'Strategies for job searching and career growth',
              link: '/career-advice'
            },
            { 
              title: 'Example Resumes',
              icon: FileText,
              description: 'Sample resumes for different industries',
              link: '/example-resumes'
            }
          ].map((resource, i) => (
            <Link key={i} to={resource.link}>
              <div className="bg-white dark:bg-resume-gray-800 p-6 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700 h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center">
                    <resource.icon className="h-5 w-5 text-resume-blue-600 dark:text-resume-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-resume-gray-900 dark:text-white">{resource.title}</h3>
                </div>
                <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-4">{resource.description}</p>
                <div className="text-resume-blue-600 dark:text-resume-blue-400 flex items-center text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Resume Checklist */}
        <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-lg border border-resume-gray-200 dark:border-resume-gray-700 overflow-hidden mb-16">
          <div className="bg-resume-blue-600 dark:bg-resume-blue-800 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white">Ultimate Resume Checklist</h2>
            <p className="text-resume-blue-100 mt-2">
              Use this comprehensive checklist to ensure your resume is complete, professional, and ready to impress employers.
            </p>
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-resume-gray-900 dark:text-white mb-4">Content & Structure</h3>
                <ul className="space-y-3">
                  {[
                    'Contact information is up-to-date and professional',
                    'Resume includes a compelling professional summary',
                    'Work experience is in reverse chronological order',
                    'Accomplishments are quantified with numbers when possible',
                    'Education section includes relevant degrees and certifications',
                    'Skills section highlights relevant technical and soft skills',
                    'No spelling or grammatical errors',
                    'No personal information (age, marital status, etc.)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                        <Check className="h-3 w-3 text-resume-blue-600 dark:text-resume-blue-400" />
                      </div>
                      <span className="text-resume-gray-700 dark:text-resume-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-resume-gray-900 dark:text-white mb-4">Formatting & Delivery</h3>
                <ul className="space-y-3">
                  {[
                    'Font is professional and consistent (10-12pt size)',
                    'Layout is clean with adequate white space',
                    'Resume length is appropriate (typically 1-2 pages)',
                    'Bullets are used for easy scanning',
                    'File is saved as PDF to preserve formatting',
                    'File name includes your name (e.g., John_Smith_Resume.pdf)',
                    'Design is appropriate for your industry',
                    'Template is ATS-friendly (no tables, text boxes, or graphics)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                        <Check className="h-3 w-3 text-resume-blue-600 dark:text-resume-blue-400" />
                      </div>
                      <span className="text-resume-gray-700 dark:text-resume-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/builder">
                <Button variant="premium">
                  Build Your Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Cover Letter Guide */}
        <div className="mb-16">
          <div className="bg-resume-gray-50 dark:bg-resume-gray-800/50 rounded-xl p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Book className="h-6 w-6 text-resume-blue-600 dark:text-resume-blue-400" />
                <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white">Cover Letter Guide</h2>
              </div>
              
              <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-6">
                A strong cover letter complements your resume and provides additional context and personality. 
                Follow these guidelines to create an effective cover letter that enhances your job application.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-resume-gray-900 dark:text-white mb-3">Cover Letter Format</h3>
                  <div className="bg-white dark:bg-resume-gray-800 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700 p-5">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-resume-gray-900 dark:text-white">1. Header</h4>
                        <p className="text-sm text-resume-gray-600 dark:text-resume-gray-300">
                          Include your contact information, date, and the recipient's details if known.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-resume-gray-900 dark:text-white">2. Greeting</h4>
                        <p className="text-sm text-resume-gray-600 dark:text-resume-gray-300">
                          Address the hiring manager by name if possible. If unknown, use "Dear Hiring Manager."
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-resume-gray-900 dark:text-white">3. Opening Paragraph</h4>
                        <p className="text-sm text-resume-gray-600 dark:text-resume-gray-300">
                          State the position you're applying for and how you discovered it. Include a brief statement about why you're interested.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-resume-gray-900 dark:text-white">4. Body Paragraphs (1-2)</h4>
                        <p className="text-sm text-resume-gray-600 dark:text-resume-gray-300">
                          Highlight relevant achievements and explain how your skills match the job requirements. Use specific examples.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-resume-gray-900 dark:text-white">5. Closing Paragraph</h4>
                        <p className="text-sm text-resume-gray-600 dark:text-resume-gray-300">
                          Reiterate your interest, thank the reader, and indicate your desire for an interview.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-resume-gray-900 dark:text-white">6. Signature</h4>
                        <p className="text-sm text-resume-gray-600 dark:text-resume-gray-300">
                          End with "Sincerely" or "Regards" followed by your name.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-resume-gray-900 dark:text-white mb-3">Cover Letter Do's and Don'ts</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-resume-gray-800 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700 p-5">
                      <h4 className="font-medium text-resume-gray-900 dark:text-white mb-3">Do</h4>
                      <ul className="space-y-2">
                        {[
                          'Customize each letter for the specific job',
                          'Keep it concise (3-4 paragraphs)',
                          'Address specific requirements from the job posting',
                          'Show enthusiasm for the company and role',
                          'Proofread carefully for errors'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="mt-1 h-4 w-4 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                              <Check className="h-2 w-2 text-resume-blue-600 dark:text-resume-blue-400" />
                            </div>
                            <span className="text-sm text-resume-gray-600 dark:text-resume-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-resume-gray-800 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700 p-5">
                      <h4 className="font-medium text-resume-gray-900 dark:text-white mb-3">Don't</h4>
                      <ul className="space-y-2">
                        {[
                          'Repeat your entire resume',
                          'Use generic templates without customization',
                          'Include irrelevant personal information',
                          'Make unsupported claims about your abilities',
                          'Exceed one page in length'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="mt-1 h-4 w-4 rounded-full bg-red-100 dark:bg-red-900 flex-shrink-0 flex items-center justify-center text-red-600 dark:text-red-400">
                              <span className="text-xs font-bold">✕</span>
                            </div>
                            <span className="text-sm text-resume-gray-600 dark:text-resume-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Job Boards & External Resources */}
        <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">Job Search Resources</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Job Boards */}
          <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 overflow-hidden">
            <div className="bg-resume-blue-50 dark:bg-resume-blue-900/30 p-5 border-b border-resume-gray-200 dark:border-resume-gray-700">
              <h3 className="text-xl font-semibold text-resume-gray-900 dark:text-white">Popular Job Boards</h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs', description: 'Professional networking and job search' },
                  { name: 'Indeed', url: 'https://www.indeed.com', description: 'Comprehensive job search engine' },
                  { name: 'Glassdoor', url: 'https://www.glassdoor.com', description: 'Jobs with company reviews and insights' },
                  { name: 'ZipRecruiter', url: 'https://www.ziprecruiter.com', description: 'Job matching technology' },
                  { name: 'Monster', url: 'https://www.monster.com', description: 'Global employment website' },
                  { name: 'FlexJobs', url: 'https://www.flexjobs.com', description: 'Remote and flexible job opportunities' }
                ].map((site, i) => (
                  <div key={i} className="flex flex-col">
                    <a 
                      href={site.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-resume-blue-600 dark:text-resume-blue-400 font-medium hover:underline flex items-center"
                    >
                      {site.name}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <span className="text-sm text-resume-gray-600 dark:text-resume-gray-300">{site.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Interview Prep */}
          <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 overflow-hidden">
            <div className="bg-resume-blue-50 dark:bg-resume-blue-900/30 p-5 border-b border-resume-gray-200 dark:border-resume-gray-700">
              <h3 className="text-xl font-semibold text-resume-gray-900 dark:text-white">Interview Preparation Resources</h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Glassdoor Interview Questions', url: 'https://www.glassdoor.com/Interview', description: 'Company-specific interview questions' },
                  { name: 'LeetCode', url: 'https://leetcode.com', description: 'Technical interview practice' },
                  { name: 'Interview Cake', url: 'https://www.interviewcake.com', description: 'Coding interview preparation' },
                  { name: 'Big Interview', url: 'https://biginterview.com', description: 'Mock interview practice' },
                  { name: 'Pramp', url: 'https://www.pramp.com', description: 'Peer-to-peer mock interviews' },
                  { name: 'LinkedIn Interview Prep', url: 'https://www.linkedin.com/interview-prep', description: 'AI-powered interview preparation' }
                ].map((site, i) => (
                  <div key={i} className="flex flex-col">
                    <a 
                      href={site.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-resume-blue-600 dark:text-resume-blue-400 font-medium hover:underline flex items-center"
                    >
                      {site.name}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <span className="text-sm text-resume-gray-600 dark:text-resume-gray-300">{site.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Resources */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-resume-gray-900 dark:text-white mb-6 text-center">Additional Career Resources</h3>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Salary Research',
                icon: Clock,
                links: [
                  { name: 'Glassdoor Salary Tool', url: 'https://www.glassdoor.com/Salaries' },
                  { name: 'PayScale', url: 'https://www.payscale.com' },
                  { name: 'Salary.com', url: 'https://www.salary.com' }
                ]
              },
              {
                title: 'Skill Development',
                icon: FileText,
                links: [
                  { name: 'Coursera', url: 'https://www.coursera.org' },
                  { name: 'Udemy', url: 'https://www.udemy.com' },
                  { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' }
                ]
              },
              {
                title: 'Networking',
                icon: Briefcase,
                links: [
                  { name: 'Meetup', url: 'https://www.meetup.com' },
                  { name: 'LinkedIn Groups', url: 'https://www.linkedin.com/mynetwork/groups' },
                  { name: 'Eventbrite Professional Events', url: 'https://www.eventbrite.com' }
                ]
              }
            ].map((resource, i) => (
              <div key={i} className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <resource.icon className="h-5 w-5 text-resume-blue-600 dark:text-resume-blue-400" />
                  <h4 className="font-semibold text-resume-gray-900 dark:text-white">{resource.title}</h4>
                </div>
                
                <ul className="space-y-2">
                  {resource.links.map((link, j) => (
                    <li key={j}>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-resume-blue-600 dark:text-resume-blue-400 text-sm hover:underline flex items-center"
                      >
                        {link.name}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-resume-blue-600 to-resume-blue-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Building Your Career Today</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Put these resources to use and create a professional resume that showcases your skills and experience.
            Our free resume builder makes it easy to get started.
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

export default Resources;
