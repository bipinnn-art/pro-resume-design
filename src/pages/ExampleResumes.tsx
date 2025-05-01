
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { FileText, ArrowRight, Download, Eye } from 'lucide-react';

const ExampleResumes = () => {
  const exampleResumes = [
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      description: 'A clean, technical resume highlighting programming skills, project experience, and technical achievements.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=1000',
      experience: '5 years',
      highlights: [
        'Clean, technical focus with skill visualization',
        'Project-based experience section',
        'Technical skills clearly categorized',
        'GitHub and portfolio links integrated'
      ],
      keyFeatures: ['Java', 'Python', 'React', 'Cloud Architecture', 'Agile Development']
    },
    {
      id: 'teacher',
      title: 'Elementary School Teacher',
      description: 'An organized, professional resume emphasizing teaching credentials, classroom experience, and educational accomplishments.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=1000',
      experience: '8 years',
      highlights: [
        'Credentials and certifications prominently displayed',
        'Teaching philosophy statement included',
        'Student achievement metrics highlighted',
        'Classroom management skills emphasized'
      ],
      keyFeatures: ['Curriculum Development', 'Special Education', 'Student Assessment', 'Parent Communication', 'Technology Integration']
    },
    {
      id: 'marketing-specialist',
      title: 'Marketing Specialist',
      description: 'A creative yet professional resume showcasing campaign results, brand management experience, and marketing skills.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=1000',
      experience: '4 years',
      highlights: [
        'Campaign results with metrics and ROI',
        'Visual branding elements incorporated',
        'Social media expertise highlighted',
        'Portfolio links integrated'
      ],
      keyFeatures: ['Social Media Marketing', 'Content Strategy', 'Analytics', 'Brand Development', 'SEO/SEM']
    },
    {
      id: 'financial-analyst',
      title: 'Financial Analyst',
      description: 'A structured, detail-oriented resume highlighting financial expertise, analytical skills, and business impact.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=1000',
      experience: '6 years',
      highlights: [
        'Financial impact metrics prominently featured',
        'Technical certifications highlighted',
        'Project-based achievements quantified',
        'Industry specialization clear'
      ],
      keyFeatures: ['Financial Modeling', 'Risk Assessment', 'Investment Analysis', 'Forecasting', 'Data Visualization']
    }
  ];

  return (
    <>
      <PageHeader
        title="Example Resumes" 
        subtitle="Browse professionally written resume examples for different career paths to inspire your own."
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-resume-gray-700 dark:text-resume-gray-300">
            Looking for inspiration? Explore these sample resumes crafted for different professions. 
            Each example showcases effective ways to present your skills and experience in your specific field. 
            Use these as reference points when creating your own standout resume.
          </p>
        </div>
        
        {/* Example Resumes */}
        <div className="space-y-16">
          {exampleResumes.map((resume, index) => (
            <div key={resume.id}>
              <div className={`grid md:grid-cols-5 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:col-span-2">
                  <div className="bg-white dark:bg-resume-gray-800 rounded-lg overflow-hidden shadow-lg border border-resume-gray-200 dark:border-resume-gray-700">
                    <img 
                      src={resume.image} 
                      alt={`${resume.title} resume example`} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-3 space-y-6">
                  <div className="inline-block px-3 py-1 bg-resume-blue-100 dark:bg-resume-blue-900 text-resume-blue-600 dark:text-resume-blue-400 rounded-full text-sm font-medium">
                    {resume.experience} Experience
                  </div>
                  
                  <h3 className="text-2xl font-bold text-resume-gray-900 dark:text-white">{resume.title} Resume Example</h3>
                  
                  <p className="text-resume-gray-600 dark:text-resume-gray-300">{resume.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-resume-gray-900 dark:text-white mb-2">Resume Highlights:</h4>
                      <ul className="space-y-2">
                        {resume.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                            </div>
                            <span className="text-resume-gray-700 dark:text-resume-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-resume-gray-900 dark:text-white mb-2">Featured Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {resume.keyFeatures.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-resume-gray-100 dark:bg-resume-gray-700 text-resume-gray-700 dark:text-resume-gray-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex flex-wrap gap-3">
                    <Button variant="premium">
                      <Eye className="mr-2 h-4 w-4" />
                      View Full Example
                    </Button>
                    <Link to="/builder">
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Create Similar Resume
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {index < exampleResumes.length - 1 && (
                <div className="my-16 border-b border-resume-gray-200 dark:border-resume-gray-700"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Resume Tips */}
        <div className="mt-20 bg-resume-gray-50 dark:bg-resume-gray-900/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">Resume Writing Tips by Industry</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 p-6">
              <h3 className="text-xl font-semibold text-resume-gray-900 dark:text-white mb-4">Tech Industry Tips</h3>
              
              <ul className="space-y-3">
                {[
                  'Include relevant technical skills with proficiency levels',
                  'Highlight specific projects with measurable outcomes',
                  'Mention contributions to open-source projects or personal GitHub repositories',
                  'Include certifications and continuous learning initiatives',
                  'Quantify achievements with metrics (e.g., improved performance by 40%)'
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span className="text-resume-gray-700 dark:text-resume-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 p-6">
              <h3 className="text-xl font-semibold text-resume-gray-900 dark:text-white mb-4">Education Field Tips</h3>
              
              <ul className="space-y-3">
                {[
                  'Emphasize credentials, certifications, and continuing education',
                  'Highlight student achievement metrics and teaching methods',
                  'Include curriculum development and leadership experiences',
                  'Detail classroom management approaches and teaching philosophy',
                  'Showcase technology integration skills and innovative teaching methods'
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span className="text-resume-gray-700 dark:text-resume-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 p-6">
              <h3 className="text-xl font-semibold text-resume-gray-900 dark:text-white mb-4">Marketing Field Tips</h3>
              
              <ul className="space-y-3">
                {[
                  'Quantify campaign results, ROI, and growth metrics',
                  'Include experience with specific marketing tools and platforms',
                  'Highlight content creation skills and examples',
                  'Demonstrate knowledge of analytics and data-driven decision making',
                  'Showcase successful brand initiatives and creative solutions'
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span className="text-resume-gray-700 dark:text-resume-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-md border border-resume-gray-200 dark:border-resume-gray-700 p-6">
              <h3 className="text-xl font-semibold text-resume-gray-900 dark:text-white mb-4">Finance Industry Tips</h3>
              
              <ul className="space-y-3">
                {[
                  'Emphasize analytical skills and attention to detail',
                  'Highlight experience with specific financial software and tools',
                  'Include relevant certifications (CFA, CPA, etc.)',
                  'Quantify achievements with numerical results and percentages',
                  'Demonstrate regulatory knowledge and compliance experience'
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex-shrink-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                    </div>
                    <span className="text-resume-gray-700 dark:text-resume-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-6">Ready to Create Your Own Professional Resume?</h2>
          <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-8 max-w-2xl mx-auto">
            Take inspiration from these examples and build your own standout resume with our easy-to-use builder.
            Choose from professional templates and create a resume that gets results.
          </p>
          <Link to="/builder">
            <Button variant="premium" size="lg">
              Start Building Your Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExampleResumes;
