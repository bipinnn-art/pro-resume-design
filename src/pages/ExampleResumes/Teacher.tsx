
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { ArrowLeft, Download, FileText } from 'lucide-react';

const TeacherExample = () => {
  return (
    <>
      <PageHeader
        title="Elementary School Teacher Resume Example" 
        subtitle="A professional teacher resume sample highlighting educational credentials, classroom experience, and teaching philosophy"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex mb-8">
          <Link to="/example-resumes">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Example Resumes
            </Button>
          </Link>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Resume Preview Image */}
          <div className="mb-10 bg-white p-6 rounded-lg shadow-lg border border-resume-gray-200">
            <div className="aspect-[1/1.3] bg-resume-gray-50 rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Teacher Resume Example"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Resume Details */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Analysis */}
            <div className="md:col-span-2 space-y-8">
              <div className="prose dark:prose-invert max-w-none">
                <h2>Resume Breakdown</h2>
                <p>
                  This elementary school teacher resume example demonstrates how to effectively showcase teaching credentials, classroom experience, and educational philosophy. It follows a structured format that highlights qualifications most relevant to school administrators and hiring committees.
                </p>
                
                <h3>Key Strengths</h3>
                <ul>
                  <li>
                    <strong>Credentials Section:</strong> Teaching certifications and licenses are prominently displayed at the top.
                  </li>
                  <li>
                    <strong>Teaching Philosophy:</strong> A concise statement that conveys the candidate's educational approach and values.
                  </li>
                  <li>
                    <strong>Student Achievement Data:</strong> Quantifiable results showing impact on student learning and performance.
                  </li>
                  <li>
                    <strong>Specialized Skills:</strong> Highlights experience with diverse learning needs, curriculum development, and educational technology.
                  </li>
                  <li>
                    <strong>Professional Development:</strong> Ongoing learning and specialized training that enhances teaching effectiveness.
                  </li>
                </ul>
                
                <h3>What Makes This Resume Effective</h3>
                <ol>
                  <li>
                    <strong>Education-Focused Format:</strong> The resume prioritizes teaching credentials, certifications, and relevant training.
                  </li>
                  <li>
                    <strong>Achievement Orientation:</strong> Emphasizes student outcomes and classroom achievements rather than just listing responsibilities.
                  </li>
                  <li>
                    <strong>Specialized Experience:</strong> Highlights particular educational approaches, such as experiential learning and differentiated instruction.
                  </li>
                  <li>
                    <strong>Modern Educational Techniques:</strong> Demonstrates familiarity with current educational technology and teaching methodologies.
                  </li>
                </ol>
                
                <h3>How to Adapt This Example</h3>
                <p>
                  When customizing this template for your own use, focus on these areas:
                </p>
                <ul>
                  <li>Update the credentials section with your own certifications and educational background</li>
                  <li>Customize the teaching philosophy to reflect your own educational values and approach</li>
                  <li>Highlight specific grade levels, subjects, or special programs you've taught</li>
                  <li>Include quantifiable achievements from your classroom experience</li>
                  <li>Feature any specialized training or skills relevant to your target position</li>
                </ul>
              </div>
            </div>
            
            {/* Right Column - Features & Download */}
            <div className="space-y-8">
              <div className="bg-resume-gray-50 dark:bg-resume-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Resume Features</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span>Credentials prominently displayed</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span>Teaching philosophy statement</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span>Student achievement metrics</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span>Classroom management skills</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span>Educational technology integration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-resume-gray-800 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700 p-6">
                <h3 className="text-xl font-semibold mb-4">Featured Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Curriculum Development', 'Differentiated Instruction', 'Special Education', 'Student Assessment', 'Classroom Management', 'Parent Communication', 'Technology Integration', 'Montessori Methods'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-resume-gray-100 dark:bg-resume-gray-700 text-resume-gray-700 dark:text-resume-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Link to="/builder">
                  <Button className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Create Similar Resume
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download This Example
                </Button>
              </div>
            </div>
          </div>
          
          {/* Tips Section */}
          <div className="mt-16 bg-resume-blue-50 dark:bg-resume-blue-900/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Pro Tips for Teacher Resumes</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Showcase Your Educational Impact</h3>
                <p>
                  Include quantifiable achievements such as improved test scores, reading levels, or reduced behavior incidents. Schools want to see evidence of your teaching effectiveness.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Highlight Special Training</h3>
                <p>
                  Feature special certifications or training in areas like special education, ESL, gifted education, or specific teaching methodologies that are relevant to your target position.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Demonstrate Tech Proficiency</h3>
                <p>
                  With the increasing importance of educational technology, highlight your experience with learning management systems, interactive tools, and other relevant educational software.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-4">Ready to Build Your Teaching Resume?</h2>
            <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-8 max-w-2xl mx-auto">
              Use our resume builder to create a professional education resume that showcases your teaching credentials, classroom experience, and educational philosophy.
            </p>
            <Link to="/builder">
              <Button variant="premium" size="lg">
                Start Building Your Resume
                <FileText className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherExample;
