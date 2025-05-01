
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is it free to use ProResume?',
      answer: 'Yes, ProResume is completely free to use. You can create, customize, and download your resume at no cost. We aim to make professional resume building accessible to everyone.'
    },
    {
      question: 'Can I download my resume?',
      answer: 'Absolutely! After you\'ve completed your resume, you can download it as a PDF file. This format is industry-standard and ensures your resume looks the same on any device.'
    },
    {
      question: 'Is this resume builder ATS-friendly?',
      answer: 'Yes, all our resume templates are specifically designed to be ATS-friendly. They use standard formatting, proper heading structures, and avoid complex elements that could confuse applicant tracking systems.'
    },
    {
      question: 'Can I choose different templates?',
      answer: 'Yes! We offer multiple professional templates that you can choose from. You can even switch between templates without losing your content to see which one works best for your needs.'
    },
    {
      question: 'Is my data safe?',
      answer: 'We take data security seriously. Your personal information is encrypted and never shared with third parties. We only use your data to provide our resume building service. You can read more in our Privacy Policy.'
    },
    {
      question: 'Do I need to sign up?',
      answer: 'No, you can start creating your resume without signing up. However, creating a free account allows you to save your progress and return to edit your resume later.'
    },
    {
      question: 'How do I export to PDF?',
      answer: 'Once you\'ve completed your resume, simply click on the "Download" or "Export" button in the preview section. Your resume will be generated as a high-quality PDF file that you can save to your device.'
    },
    {
      question: 'Can I edit my resume later?',
      answer: 'Yes, you can return to edit your resume at any time. If you create an account, your resume data will be saved automatically. If using the tool without an account, you\'ll need to complete your resume in one session.'
    },
    {
      question: 'Can I use it on mobile?',
      answer: 'Yes, ProResume is fully responsive and works on smartphones and tablets. However, for the best experience with detailed formatting options, we recommend using a desktop computer if possible.'
    },
    {
      question: 'Will you add more templates?',
      answer: 'Yes, we\'re constantly working on adding new professionally designed templates. We regularly update our template library based on current industry standards and user feedback.'
    },
    {
      question: 'How should I format my resume?',
      answer: 'We recommend using a clean, professional layout with clear section headings. Focus on relevant experience, use bullet points for achievements, and keep it concise (1-2 pages). Our templates are designed to handle the formatting for you, so you can focus on content.'
    },
    {
      question: 'What should I include in my resume?',
      answer: 'A standard resume should include contact information, a professional summary, work experience, education, and relevant skills. Depending on your field, you might also want to include certifications, projects, publications, or volunteer work. Our builder guides you through including all relevant sections.'
    },
    {
      question: 'How far back should my work history go?',
      answer: 'Generally, include the past 10-15 years of relevant work experience. For most professionals, focusing on the most recent and relevant positions is best. Recent graduates can include internships and part-time work relevant to their field.'
    },
    {
      question: 'Should I include references on my resume?',
      answer: 'No, it\'s not necessary to include references directly on your resume. Instead, prepare a separate reference list that you can provide when requested. This also saves valuable space on your resume for highlighting your qualifications.'
    },
    {
      question: 'How can I make my resume stand out?',
      answer: 'Focus on quantifiable achievements rather than just listing responsibilities. Use strong action verbs, customize your resume for each job application, ensure perfect grammar and formatting, and highlight results and accomplishments that demonstrate your value.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(
    (faq) => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about using our resume builder."
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-resume-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 border border-resume-gray-300 dark:border-resume-gray-700 rounded-md bg-white dark:bg-resume-gray-800 text-resume-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-resume-blue-500"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700 overflow-hidden"
              >
                <button
                  className="w-full text-left p-5 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-resume-gray-900 dark:text-white">{faq.question}</h3>
                  <div className="ml-2 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-resume-gray-500 dark:text-resume-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-resume-gray-500 dark:text-resume-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="p-5 pt-0 border-t border-resume-gray-200 dark:border-resume-gray-700">
                    <p className="text-resume-gray-600 dark:text-resume-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-4">No results found for "{searchQuery}"</p>
              <Button variant="outline" onClick={() => setSearchQuery('')}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
        
        {/* Still Have Questions */}
        <div className="mt-16 bg-resume-gray-50 dark:bg-resume-gray-800/50 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-4">Still Have Questions?</h2>
          <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-6">
            If you couldn&apos;t find the answer you were looking for, feel free to reach out to our support team.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact">
              <Button variant="premium">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Related Resources */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">Explore Related Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Resume Tips',
                description: 'Expert advice for creating an effective resume',
                link: '/resume-tips',
                linkText: 'View Tips'
              },
              {
                title: 'ATS Guide',
                description: 'Learn how to optimize for applicant tracking systems',
                link: '/ats-guide',
                linkText: 'Read Guide'
              },
              {
                title: 'Career Advice',
                description: 'Strategies for job searching and career growth',
                link: '/career-advice',
                linkText: 'Get Advice'
              }
            ].map((resource, i) => (
              <div key={i} className="bg-white dark:bg-resume-gray-800 p-6 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700">
                <h3 className="text-lg font-semibold text-resume-gray-900 dark:text-white mb-2">{resource.title}</h3>
                <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-4">{resource.description}</p>
                <Link to={resource.link} className="text-resume-blue-600 dark:text-resume-blue-400 flex items-center hover:underline">
                  <span>{resource.linkText}</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
