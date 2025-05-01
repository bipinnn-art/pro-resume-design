
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { LayoutTemplate, Check, ArrowRight, Download } from 'lucide-react';

const ResumeTemplates = () => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'A sleek, contemporary design with clean lines and strategic use of color accents. Perfect for tech, design, marketing, and creative roles.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=1000',
      features: [
        'Clean, minimal layout',
        'Strategic use of color accents',
        'Bold section headers',
        'Skill bars visualization',
        'Perfect for tech and creative roles',
        'Fully customizable color scheme'
      ],
      bestFor: ['Tech Professionals', 'Designers', 'Marketing', 'Creative Roles'],
      font: 'Poppins'
    },
    {
      id: 'classic',
      name: 'Classic',
      description: 'A timeless design with traditional formatting and subtle detailing. Ideal for corporate roles, finance, legal, healthcare, and positions in established industries.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=1000',
      features: [
        'Traditional layout',
        'Elegant typography',
        'Subtle borders and dividers',
        'Professional header design',
        'Industry-standard sections',
        'Perfect for conservative industries'
      ],
      bestFor: ['Corporate Roles', 'Finance', 'Legal', 'Healthcare', 'Executive Positions'],
      font: 'Georgia'
    },
    {
      id: 'ats-friendly',
      name: 'ATS-Friendly',
      description: 'Engineered specifically to pass Applicant Tracking Systems with ease. Features a straightforward layout with optimal keyword placement and standard formatting.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=1000',
      features: [
        'Maximized ATS compatibility',
        'Strategic keyword placement',
        'Simple, scannable formatting',
        'Standard section headings',
        'Clear hierarchy of information',
        'No complex design elements'
      ],
      bestFor: ['Online Applications', 'Large Companies', 'Government Positions', 'Any Industry'],
      font: 'Arial'
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'A distinctive design that stands out while maintaining professionalism. Features unique layout elements while ensuring content remains clear and readable.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=1000',
      features: [
        'Distinctive visual elements',
        'Creative section layouts',
        'Thoughtful use of white space',
        'Modern typography',
        'Visual skills representation',
        'Customizable design accents'
      ],
      bestFor: ['Graphic Design', 'Art Direction', 'Photography', 'Digital Media', 'Advertising'],
      font: 'Lato'
    }
  ];

  return (
    <>
      <PageHeader
        title="Resume Templates" 
        subtitle="Explore our collection of professionally designed resume templates to create a standout application."
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Template Features */}
        <div className="mb-16 bg-resume-gray-50 dark:bg-resume-gray-800/50 rounded-xl p-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-resume-gray-900 dark:text-white mb-4">Why Our Templates Stand Out</h2>
            <p className="text-resume-gray-600 dark:text-resume-gray-300 max-w-3xl mx-auto">
              Every template is crafted by professional designers with both visual appeal and functionality in mind.
              Our templates are tested to ensure they work well for both human reviewers and ATS systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ATS Optimized',
                description: 'Every template is tested with leading ATS software to ensure your resume gets past electronic filters.',
                icon: Check
              },
              {
                title: 'Professionally Designed',
                description: 'Created by expert designers following current industry standards and best practices.',
                icon: LayoutTemplate
              },
              {
                title: 'Easy to Customize',
                description: 'Adjust colors, fonts, and layouts to match your personal style and industry expectations.',
                icon: Download
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-resume-gray-800 p-6 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700">
                <div className="h-12 w-12 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-resume-blue-600 dark:text-resume-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-resume-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-resume-gray-600 dark:text-resume-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Templates Showcase */}
        <h2 className="text-2xl md:text-3xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">Browse Our Templates</h2>
        
        <div className="space-y-16">
          {templates.map((template, index) => (
            <div key={template.id} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="bg-white dark:bg-resume-gray-800 rounded-lg overflow-hidden shadow-md border border-resume-gray-200 dark:border-resume-gray-700">
                <img 
                  src={template.image} 
                  alt={`${template.name} resume template`} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-resume-blue-100 dark:bg-resume-blue-900 text-resume-blue-600 dark:text-resume-blue-400 rounded-full text-sm font-medium">
                  {template.name} Template
                </div>
                
                <h3 className="text-2xl font-bold text-resume-gray-900 dark:text-white">{template.name} Resume Template</h3>
                
                <p className="text-resume-gray-600 dark:text-resume-gray-300">{template.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-resume-gray-900 dark:text-white mb-2">Template Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {template.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-resume-blue-600 dark:text-resume-blue-400" />
                          <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-resume-gray-900 dark:text-white mb-2">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.bestFor.map((industry, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-resume-gray-100 dark:bg-resume-gray-700 text-resume-gray-700 dark:text-resume-gray-300 rounded-full text-xs"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-resume-gray-900 dark:text-white mb-2">Primary Font:</h4>
                    <span className="text-resume-gray-700 dark:text-resume-gray-300">{template.font}</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link to="/builder">
                    <Button variant="premium">
                      Use This Template
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">Template FAQs</h2>
          
          <div className="space-y-6">
            {[
              {
                question: 'Can I change templates after I've started building my resume?',
                answer: 'Yes, you can switch between any of our templates at any point without losing your content. This allows you to see which design works best for your specific resume.'
              },
              {
                question: 'Are all templates free to use?',
                answer: 'Yes, all of our templates are currently free to use, with no hidden fees or restrictions.'
              },
              {
                question: 'How do I know which template is right for my industry?',
                answer: 'We provide guidance on which templates work best for specific industries. Generally, conservative industries (finance, legal, healthcare) benefit from classic templates, while creative fields can use more distinctive designs.'
              },
              {
                question: 'Can I customize the colors and fonts?',
                answer: 'Yes, all templates offer customization options for colors, fonts, spacing, and section ordering to help you create a unique document that matches your personal brand.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700 p-6">
                <h4 className="text-lg font-semibold text-resume-gray-900 dark:text-white mb-3">{faq.question}</h4>
                <p className="text-resume-gray-600 dark:text-resume-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-resume-blue-600 to-resume-blue-500 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Create Your Resume Today</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Choose your favorite template and build a professional resume in minutes.
            No sign-up required, completely free to use.
          </p>
          <div className="flex justify-center">
            <Link to="/builder">
              <Button variant="premium" size="lg" className="bg-white text-resume-blue-600 hover:bg-resume-gray-100">
                Start Building Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeTemplates;
