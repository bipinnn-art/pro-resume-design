
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { Briefcase, ArrowRight, FileText, Search, User } from 'lucide-react';

const CareerAdvice = () => {
  const careerTips = [
    {
      category: 'Job Search Strategy',
      icon: Search,
      tips: [
        {
          title: 'Targeted Applications',
          content: "Focus on quality over quantity. It's better to submit 10 well-tailored applications than 50 generic ones."
        },
        {
          title: 'Company Research',
          content: "Research each company thoroughly before applying. Understand their values, challenges, and recent achievements."
        },
        {
          title: 'Track Your Applications',
          content: "Keep a spreadsheet of where you've applied, when, and any follow-up actions to stay organized."
        },
        {
          title: 'Leverage Job Boards Wisely',
          content: "Use industry-specific job boards in addition to general sites like LinkedIn and Indeed."
        },
        {
          title: 'Set Up Job Alerts',
          content: "Create job alerts on multiple platforms to be notified of new opportunities that match your criteria."
        }
      ]
    },
    {
      category: 'LinkedIn Optimization',
      icon: User,
      tips: [
        {
          title: 'Professional Profile Photo',
          content: "Use a high-quality headshot with a neutral background and professional attire."
        },
        {
          title: 'Compelling Headline',
          content: "Go beyond just your job title. Include your specialty and the value you provide."
        },
        {
          title: 'Keyword-Rich Summary',
          content: "Include relevant industry keywords in your summary to improve visibility in recruiter searches."
        },
        {
          title: 'Engagement Strategy',
          content: "Regularly share industry content, comment on posts, and participate in relevant groups."
        },
        {
          title: 'Recommendations',
          content: "Request recommendations from colleagues and managers that highlight specific skills and achievements."
        }
      ]
    },
    {
      category: 'Interview Preparation',
      icon: Briefcase,
      tips: [
        {
          title: 'Research-Based Questions',
          content: "Prepare thoughtful questions based on your research of the company and role."
        },
        {
          title: 'STAR Method',
          content: "Structure your answers using the Situation, Task, Action, Result framework for behavioral questions."
        },
        {
          title: 'Mock Interviews',
          content: "Practice with a friend or career coach to receive feedback on your responses and body language."
        },
        {
          title: 'Technical Preparation',
          content: "For technical roles, review fundamentals and practice common problems in your field."
        },
        {
          title: 'Salary Research',
          content: "Research industry-standard compensation to prepare for salary negotiations."
        }
      ]
    },
    {
      category: 'Career Transitions',
      icon: FileText,
      tips: [
        {
          title: 'Skills Analysis',
          content: "Identify transferable skills from your current role that apply to your target industry."
        },
        {
          title: 'Strategic Networking',
          content: "Connect with professionals in your target field to gain insights and potential opportunities."
        },
        {
          title: 'Gap Analysis',
          content: "Identify skills gaps and create a plan to address them through courses, certifications, or projects."
        },
        {
          title: 'Resume Repositioning',
          content: "Reframe your experience to highlight relevance to your new target role or industry."
        },
        {
          title: 'Start Small',
          content: "Consider volunteering, freelancing, or part-time work to build experience in your new field."
        }
      ]
    }
  ];

  return (
    <>
      <PageHeader
        title="Career Advice" 
        subtitle="Expert guidance to help you navigate job searches, career transitions, and professional development."
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-resume-gray-700 dark:text-resume-gray-300 mb-6">
            Whether you're just starting your career journey, looking to make a change, or aiming for advancement, 
            we've compiled expert advice to help you succeed. Explore our tips below to develop your professional 
            skills, prepare for interviews, and create a strategic career plan.
          </p>
          
          <div className="flex justify-center mt-8">
            <Link to="/builder">
              <Button variant="premium" size="lg">
                Create Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Career Advice Sections */}
        <div className="space-y-16">
          {careerTips.map((section, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center">
                  <section.icon className="h-5 w-5 text-resume-blue-600 dark:text-resume-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white">{section.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.tips.map((tip, i) => (
                  <div key={i} className="bg-white dark:bg-resume-gray-800 p-6 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700">
                    <h3 className="text-lg font-semibold text-resume-gray-900 dark:text-white mb-3">{tip.title}</h3>
                    <p className="text-resume-gray-600 dark:text-resume-gray-300">{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Job Search Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">Essential Job Search Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Top Job Boards',
                items: [
                  'LinkedIn Jobs',
                  'Indeed',
                  'Glassdoor',
                  'ZipRecruiter',
                  'Monster',
                  'AngelList (for startups)',
                  'Dice (for tech roles)',
                  'Remote.co (for remote positions)'
                ]
              },
              {
                title: 'Networking Platforms',
                items: [
                  'LinkedIn',
                  'Meetup.com for industry events',
                  'Twitter for industry discussions',
                  'GitHub for developers',
                  'Industry-specific Slack communities',
                  'Alumni networks',
                  'Professional associations',
                  'Virtual job fairs'
                ]
              }
            ].map((resource, i) => (
              <div key={i} className="bg-white dark:bg-resume-gray-800 rounded-lg overflow-hidden shadow-md border border-resume-gray-200 dark:border-resume-gray-700">
                <div className="bg-resume-blue-50 dark:bg-resume-blue-900/30 p-4 border-b border-resume-gray-200 dark:border-resume-gray-700">
                  <h3 className="text-xl font-bold text-resume-gray-900 dark:text-white">{resource.title}</h3>
                </div>
                
                <div className="p-6">
                  <ul className="grid grid-cols-2 gap-2">
                    {resource.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                        <span className="text-resume-gray-700 dark:text-resume-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Interview Tips */}
        <div className="mt-16 bg-resume-gray-50 dark:bg-resume-gray-900/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-8 text-center">Quick Interview Tips</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Before the Interview',
                tips: [
                  'Research the company thoroughly',
                  'Practice common interview questions',
                  'Prepare your own questions to ask',
                  'Plan your outfit in advance',
                  'Test your tech for virtual interviews'
                ]
              },
              {
                title: 'During the Interview',
                tips: [
                  'Make a strong first impression',
                  'Use the STAR method for answers',
                  'Show enthusiasm and positive body language',
                  'Listen actively before responding',
                  'Highlight relevant achievements'
                ]
              },
              {
                title: 'Handling Tough Questions',
                tips: [
                  'Stay calm and composed',
                  'Request clarification if needed',
                  'Focus on solutions, not problems',
                  'Be honest but strategic',
                  'Turn negatives into learning experiences'
                ]
              },
              {
                title: 'After the Interview',
                tips: [
                  'Send a personalized thank you email',
                  'Follow up after a week if no response',
                  'Reflect on your performance',
                  'Continue your job search meanwhile',
                  'Request feedback if rejected'
                ]
              }
            ].map((section, i) => (
              <div key={i} className="bg-white dark:bg-resume-gray-800 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700 p-6">
                <h3 className="text-lg font-semibold text-resume-gray-900 dark:text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                      </div>
                      <span className="text-sm text-resume-gray-700 dark:text-resume-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-resume-blue-600 to-resume-blue-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Job Search?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Create a professional, ATS-optimized resume that highlights your skills and experience.
            Our templates are designed to help you stand out and get noticed by employers.
          </p>
          <div className="flex justify-center">
            <Link to="/builder">
              <Button variant="premium" size="lg" className="bg-white text-resume-blue-600 hover:bg-resume-gray-100">
                Build Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerAdvice;
