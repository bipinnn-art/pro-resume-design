
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { ArrowLeft, Download, Eye, FileText } from 'lucide-react';

const SoftwareEngineerExample = () => {
  return (
    <>
      <PageHeader
        title="Software Engineer Resume Example" 
        subtitle="A comprehensive sample resume for software engineers highlighting technical skills, project experience, and professional accomplishments"
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Software Engineer Resume Example"
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
                  This software engineer resume example demonstrates how to effectively showcase technical expertise and project accomplishments. It follows a clean, organized structure that makes it easy for hiring managers and ATS systems to identify key qualifications.
                </p>
                
                <h3>Key Strengths</h3>
                <ul>
                  <li>
                    <strong>Technical Skills Section:</strong> Clearly categorized programming languages, frameworks, and tools with proficiency indicators.
                  </li>
                  <li>
                    <strong>Project-Based Experience:</strong> Each role highlights specific projects with measurable outcomes rather than just listing responsibilities.
                  </li>
                  <li>
                    <strong>Quantifiable Achievements:</strong> Metrics demonstrate impact, such as "Reduced load time by 40%" and "Improved code test coverage from 70% to 95%."
                  </li>
                  <li>
                    <strong>Technical Problem Solving:</strong> Examples of solving complex problems showcase analytical thinking abilities.
                  </li>
                  <li>
                    <strong>GitHub and Portfolio Links:</strong> Direct access to code samples provides tangible evidence of skills.
                  </li>
                </ul>
                
                <h3>What Makes This Resume Effective</h3>
                <ol>
                  <li>
                    <strong>Technical Depth Without Overwhelming:</strong> Skills are presented in a scannable format while demonstrating depth of knowledge.
                  </li>
                  <li>
                    <strong>Balanced Focus:</strong> Equal emphasis on technical proficiency and business impact shows the candidate understands both aspects of software development.
                  </li>
                  <li>
                    <strong>Project Highlights:</strong> Each role emphasizes projects and their outcomes rather than routine responsibilities.
                  </li>
                  <li>
                    <strong>Clean, Modern Design:</strong> The technical layout reflects the organized thinking expected of a software engineer.
                  </li>
                </ol>
                
                <h3>How to Adapt This Example</h3>
                <p>
                  When customizing this template for your own use, focus on these areas:
                </p>
                <ul>
                  <li>Update the technical skills section with your own expertise, maintaining the categorized format</li>
                  <li>Replace project examples with your own work, emphasizing problems solved and quantifiable results</li>
                  <li>Adjust the balance of technical details based on the specific role you're targeting</li>
                  <li>Include links to your GitHub, portfolio, or notable projects you've contributed to</li>
                  <li>Customize the skills visualization to accurately reflect your proficiency levels</li>
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
                    <span>Clean technical layout with skill visualization</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span>Project-based experience section</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span>Technical skills clearly categorized</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span>GitHub and portfolio links integrated</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span>ATS-optimized formatting and keywords</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-resume-gray-800 rounded-lg border border-resume-gray-200 dark:border-resume-gray-700 p-6">
                <h3 className="text-xl font-semibold mb-4">Key Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'React', 'Node.js', 'AWS', 'Docker', 'Cloud Architecture', 'RESTful APIs', 'CI/CD', 'Microservices', 'Agile Development', 'Data Structures'].map((skill) => (
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
            <h2 className="text-2xl font-bold mb-6 text-center">Pro Tips for Software Engineer Resumes</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technical Skills Presentation</h3>
                <p>
                  Group skills by categories (languages, frameworks, tools) and indicate proficiency levels. Prioritize technologies mentioned in the job description.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Project Highlights</h3>
                <p>
                  Focus on problems solved, technologies used, and business impact. Include personal projects or open-source contributions if they showcase relevant skills.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Keep It Technical But Readable</h3>
                <p>
                  Use technical terminology appropriately but ensure your achievements are understandable to non-technical reviewers who may screen resumes first.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-4">Ready to Build Your Software Engineer Resume?</h2>
            <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-8 max-w-2xl mx-auto">
              Use our resume builder to create a professional, ATS-friendly software engineer resume that highlights your technical skills and accomplishments.
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

export default SoftwareEngineerExample;
