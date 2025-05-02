import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { LayoutTemplate, Check } from 'lucide-react';

const Templates = () => {
  const templates = [
    {
      id: 'simple',
      name: 'Simple',
      description: 'Clean, contemporary design with stylish typography and a professional layout.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500&h=650&crop=entropy',
      features: ['ATS-Friendly', 'Professional', 'Modern Layout']
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Traditional resume format perfect for corporate and established industries.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500&h=650&crop=entropy',
      features: ['Timeless Design', 'ATS-Optimized', 'Highly Readable']
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Specifically designed to pass through Applicant Tracking Systems with ease.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500&h=650&crop=entropy',
      features: ['Maximum ATS Compatibility', 'Clear Hierarchy', 'Structured Format']
    },
    {
      id: 'classic-garamond',
      name: 'Classic Garamond',
      description: 'Stand out with a unique design while maintaining professional readability.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500&h=650&crop=entropy',
      features: ['Eye-Catching', 'Industry-Specific', 'Still ATS-Compatible']
    }
  ];

  return (
    <>
      <PageHeader 
        title="Resume Templates" 
        subtitle="Choose from our professionally designed templates to create your perfect resume." 
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="bg-white dark:bg-resume-gray-800 rounded-lg overflow-hidden shadow-md border border-resume-gray-200 dark:border-resume-gray-700 transition-all hover:shadow-lg">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={template.image} 
                  alt={`${template.name} resume template`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-resume-gray-900/80 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">{template.name}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                <p className="text-resume-gray-600 dark:text-resume-gray-300">{template.description}</p>
                
                <div className="space-y-2">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-resume-blue-600 dark:text-resume-blue-400" />
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/builder">
                  <Button variant="premium" className="w-full">
                    <LayoutTemplate className="mr-2 h-4 w-4" />
                    Use This Template
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-resume-gray-900 dark:text-white mb-6">All Templates Are</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'ATS-Optimized', description: 'Designed to pass through Applicant Tracking Systems with ease' },
              { title: '100% Customizable', description: 'Adjust fonts, colors, and layouts to match your personal style' },
              { title: 'Professional Design', description: 'Created by professional designers with recruiters in mind' },
              { title: 'Ready to Download', description: 'Export your resume as a PDF for immediate use' }
            ].map((feature, i) => (
              <div key={i} className="bg-resume-gray-50 dark:bg-resume-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-resume-blue-600 dark:text-resume-blue-400 mb-2">{feature.title}</h3>
                <p className="text-resume-gray-600 dark:text-resume-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
