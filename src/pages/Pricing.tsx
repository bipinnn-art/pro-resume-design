
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { Check } from 'lucide-react';

const Pricing = () => {
  const features = [
    'Access to all resume templates',
    'Unlimited resumes',
    'Download as PDF',
    'ATS-friendly formats',
    'Content suggestions',
    'Pre-written examples',
    'Resume matching score',
    'Resume analytics',
    'Custom sections',
    'Mobile-responsive builder'
  ];

  return (
    <>
      <PageHeader
        title="Pricing" 
        subtitle="Simple, transparent pricing to help you build your perfect resume."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-resume-gray-800 rounded-xl overflow-hidden shadow-lg border border-resume-gray-200 dark:border-resume-gray-700">
            {/* Header */}
            <div className="bg-resume-blue-600 dark:bg-resume-blue-800 p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Free Resume Builder</h2>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-white">$0</span>
                <span className="text-white text-xl ml-2">Forever Free</span>
              </div>
              <p className="text-resume-blue-100 mt-2">No credit card required</p>
            </div>
            
            {/* Features */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-resume-gray-900 dark:text-white mb-6">Everything you need to create a professional resume:</h3>
              
              <ul className="grid gap-4 md:grid-cols-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center">
                      <Check className="h-4 w-4 text-resume-blue-600 dark:text-resume-blue-400" />
                    </div>
                    <span className="text-resume-gray-700 dark:text-resume-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <Link to="/builder">
                  <Button variant="premium" size="lg" className="w-full sm:w-auto px-8">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Coming Soon */}
          <div className="mt-16 bg-resume-gray-50 dark:bg-resume-gray-800/50 rounded-lg p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-resume-gray-900 dark:text-white mb-4">Premium Features Coming Soon</h3>
            <p className="text-resume-gray-600 dark:text-resume-gray-300 max-w-2xl mx-auto">
              {"We're working on advanced features including AI-powered content suggestions, premium templates, cover letter builder, and more. Subscribe to our newsletter to be notified when they launch."}
            </p>
            <div className="mt-6">
              <Button variant="outline" size="lg">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-resume-gray-900 dark:text-white text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="grid gap-6 max-w-3xl mx-auto">
            {[
              {
                question: 'Is it really free to use?',
                answer: 'Yes! ProResume is completely free to use with no hidden fees. You can create, edit, and download as many resumes as you need at no cost.'
              },
              {
                question: 'Do I need to create an account?',
                answer: 'No account is required to use our basic features. However, creating a free account allows you to save your progress and access your resumes from any device.'
              },
              {
                question: 'How do I download my resume?',
                answer: "Once you've completed your resume, simply click the \"Download\" button to save it as a PDF file that you can easily share with employers."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-resume-gray-800 p-6 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700">
                <h3 className="text-lg font-semibold text-resume-gray-900 dark:text-white mb-2">{item.question}</h3>
                <p className="text-resume-gray-600 dark:text-resume-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
