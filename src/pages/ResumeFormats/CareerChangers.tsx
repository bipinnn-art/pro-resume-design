
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { ArrowLeft, Download, Eye, FileText, CheckCircle } from 'lucide-react';

const CareerChangersResumeFormat = () => {
  return (
    <>
      <PageHeader
        title="Resume Formats for Career Changers" 
        subtitle="Learn how to effectively highlight transferable skills and present your experience when transitioning to a new career path"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex mb-8">
          <Link to="/resume-tips">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Resume Tips
            </Button>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="prose dark:prose-invert max-w-none mb-12">
            <div className="bg-resume-gray-50 dark:bg-resume-gray-800/50 rounded-xl p-8 mb-10">
              <h2 className="text-2xl font-bold mb-4">The Challenge of Career Transitions</h2>
              <p>
                Changing careers is one of the most challenging professional transitions. You're competing against candidates with directly relevant experience while trying to convince employers that your background in a different field is valuable. The right resume format can make all the difference in highlighting your transferable skills and potential rather than emphasizing your lack of direct experience.
              </p>
            </div>
            
            <h2>The Best Resume Formats for Career Changers</h2>
            <p>
              When transitioning careers, the format of your resume plays a crucial role in how effectively you can showcase your relevant skills and experience. Here are the three most effective resume formats for career changers, with guidance on when to use each.
            </p>
            
            <h3 className="mt-8 mb-4">1. Functional (Skills-based) Resume</h3>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-2/3">
                <p>
                  The functional resume format emphasizes your skills and abilities rather than your chronological work history. This format is ideal for career changers as it allows you to showcase transferable skills prominently.
                </p>
                <p className="font-semibold mt-4 mb-2">Best when:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your previous job titles have little relevance to your target role</li>
                  <li>You have significant gaps in employment</li>
                  <li>Your transferable skills are your strongest selling point</li>
                </ul>
                <p className="font-semibold mt-4 mb-2">Key features:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Prominent skills section organized by skill categories</li>
                  <li>Accomplishments highlighted under relevant skill areas rather than jobs</li>
                  <li>Work history condensed to a simple list</li>
                </ul>
              </div>
              <div className="md:w-1/3 bg-white dark:bg-resume-gray-800 p-4 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-center">Example Structure</h4>
                <ol className="space-y-4">
                  <li>
                    <strong>Contact Information</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Name, phone, email, location, LinkedIn</p>
                  </li>
                  <li>
                    <strong>Professional Summary</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Focus on transferable skills and new career direction</p>
                  </li>
                  <li>
                    <strong>Skills Summary</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Grouped by categories relevant to target role</p>
                  </li>
                  <li>
                    <strong>Professional Experience</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Brief listing of roles without extensive details</p>
                  </li>
                  <li>
                    <strong>Education & Training</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Including recent courses relevant to new field</p>
                  </li>
                </ol>
              </div>
            </div>
            
            <h3 className="mt-12 mb-4">2. Hybrid (Combination) Resume</h3>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-2/3">
                <p>
                  A hybrid resume combines elements of both chronological and functional formats. It features a prominent skills section followed by a reverse-chronological work history that highlights relevant achievements in each role.
                </p>
                <p className="font-semibold mt-4 mb-2">Best when:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You have some transferable experience worth highlighting</li>
                  <li>Your previous roles included responsibilities relevant to your target position</li>
                  <li>You want to showcase both skills and a stable work history</li>
                </ul>
                <p className="font-semibold mt-4 mb-2">Key features:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Begins with skills summary focused on transferable and relevant skills</li>
                  <li>Work history details accomplishments that demonstrate those skills</li>
                  <li>Equal emphasis on capabilities and experience</li>
                </ul>
              </div>
              <div className="md:w-1/3 bg-white dark:bg-resume-gray-800 p-4 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-center">Example Structure</h4>
                <ol className="space-y-4">
                  <li>
                    <strong>Contact Information</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Name, phone, email, location, LinkedIn</p>
                  </li>
                  <li>
                    <strong>Professional Summary</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Emphasizing career transition and value proposition</p>
                  </li>
                  <li>
                    <strong>Core Competencies</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Key transferable skills and relevant abilities</p>
                  </li>
                  <li>
                    <strong>Professional Experience</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Chronological but focusing on relevant achievements</p>
                  </li>
                  <li>
                    <strong>Education & Certifications</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Highlighting recent learning in target field</p>
                  </li>
                </ol>
              </div>
            </div>
            
            <h3 className="mt-12 mb-4">3. Chronological with Skills Focus</h3>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-2/3">
                <p>
                  This is a modified chronological format that maintains the traditional timeline but reframes each position to emphasize skills relevant to your new career path. It works well when your previous experience does have some connection to your desired role.
                </p>
                <p className="font-semibold mt-4 mb-2">Best when:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your career progression shows growth in relevant areas</li>
                  <li>Your previous roles can be positioned as preparation for your target career</li>
                  <li>You have minimal employment gaps</li>
                </ul>
                <p className="font-semibold mt-4 mb-2">Key features:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Traditional chronological format but with carefully curated bullet points</li>
                  <li>Accomplishments described using terminology relevant to target industry</li>
                  <li>Strong summary and skills section at the top</li>
                </ul>
              </div>
              <div className="md:w-1/3 bg-white dark:bg-resume-gray-800 p-4 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-center">Example Structure</h4>
                <ol className="space-y-4">
                  <li>
                    <strong>Contact Information</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Name, phone, email, location, LinkedIn</p>
                  </li>
                  <li>
                    <strong>Career Summary</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Connecting past experience to new direction</p>
                  </li>
                  <li>
                    <strong>Skills Overview</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Relevant technical and soft skills</p>
                  </li>
                  <li>
                    <strong>Work Experience</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Traditional chronology with carefully selected achievements</p>
                  </li>
                  <li>
                    <strong>Education & Professional Development</strong>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Including courses in new field</p>
                  </li>
                </ol>
              </div>
            </div>
            
            <h2 className="mt-12 mb-6">Essential Tips for Career-Change Resumes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-resume-gray-800 p-6 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Skills Translation</h3>
                <p className="mb-4">
                  The most critical aspect of a career-change resume is effectively translating your existing skills into the language of your target industry. For every skill on your resume:
                </p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Research industry terminology in job descriptions</li>
                  <li>Reframe accomplishments using target industry language</li>
                  <li>Quantify results to demonstrate impact regardless of industry</li>
                  <li>Focus on universal professional skills like leadership, project management, and problem-solving</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-resume-gray-800 p-6 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Addressing the Career Change</h3>
                <p className="mb-4">
                  Be strategic about how you address your career transition:
                </p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Use your resume summary to explain your transition positively</li>
                  <li>Focus on your "why" — genuine interest and motivation for the change</li>
                  <li>Highlight relevant projects, volunteer work, or coursework</li>
                  <li>Connect the dots for the reader between your past and desired future</li>
                  <li>Include a skills section that prominently displays relevant capabilities</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-resume-blue-50 dark:bg-resume-blue-900/20 rounded-xl p-8 mt-10 mb-10">
              <h2 className="text-xl font-bold mb-4">Key Elements Every Career-Change Resume Needs</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Strong Skills Section",
                    description: "Prominently position transferable and newly acquired skills relevant to your target role."
                  },
                  {
                    title: "Compelling Professional Summary",
                    description: "Frame your experience in terms of your target industry and explain your transition."
                  },
                  {
                    title: "Achievement Focus",
                    description: "Highlight quantifiable results that demonstrate your potential value regardless of industry."
                  },
                  {
                    title: "Relevant Projects & Training",
                    description: "Include side projects, courses, certifications or volunteer work related to your target field."
                  },
                  {
                    title: "ATS-Friendly Keywords",
                    description: "Incorporate industry-specific terminology to pass through applicant tracking systems."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="h-5 w-5 text-resume-blue-600 dark:text-resume-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-resume-gray-700 dark:text-resume-gray-300">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <h2 className="mt-12 mb-6">Career Change Resume Templates</h2>
            <p className="mb-8">
              To help you get started with your career transition, we've created specialized resume templates designed specifically for career changers. These templates incorporate the best practices discussed above and make it easy to present your background in the most effective way for your situation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-resume-gray-800 rounded-lg overflow-hidden shadow-md border border-resume-gray-200 dark:border-resume-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=700&h=400"
                  alt="Functional Resume Template" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Functional Resume Template</h3>
                  <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-4">
                    Skills-focused template ideal for highlighting transferable abilities while downplaying limited experience in the new field.
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Link to="/builder">
                      <Button size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Use Template
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download Example
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-resume-gray-800 rounded-lg overflow-hidden shadow-md border border-resume-gray-200 dark:border-resume-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=700&h=400"
                  alt="Hybrid Resume Template" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hybrid Resume Template</h3>
                  <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-4">
                    Balanced template combining skills emphasis with chronological experience, perfect for those with some relevant background.
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Link to="/builder">
                      <Button size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Use Template
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download Example
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-6">Ready to Create Your Career Change Resume?</h2>
            <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our resume builder to create a professional, ATS-friendly resume that highlights your transferable skills and positions you for success in your new career path.
            </p>
            <Link to="/builder">
              <Button variant="premium" size="lg">
                Create Your Resume Now
                <FileText className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerChangersResumeFormat;
