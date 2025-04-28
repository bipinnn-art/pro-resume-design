
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI/Button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-resume-blue-50 to-white dark:from-resume-gray-900 dark:to-resume-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-resume-gray-900 dark:text-white leading-tight animate-fade-in">
                Create an ATS-Friendly Resume in Minutes
              </h1>
              <p className="text-xl text-resume-gray-700 dark:text-resume-gray-300 animate-slide-up">
                Design professional resumes that pass through Applicant Tracking Systems and impress recruiters.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Link to="/builder">
                  <Button className="w-full sm:w-auto" variant="premium" size="lg">
                    Create Your Resume
                  </Button>
                </Link>
                <Link to="/templates">
                  <Button className="w-full sm:w-auto" variant="outline" size="lg">
                    View Templates
                  </Button>
                </Link>
              </div>
              
              <div className="pt-6 flex items-center">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-resume-gray-800 bg-gray-200 flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: ['#BBE2EC', '#FEFFBE', '#FFCBC1', '#D5C1FF'][i] }}
                    />
                  ))}
                </div>
                <p className="ml-4 text-sm text-resume-gray-700 dark:text-resume-gray-300">
                  <span className="font-semibold">5,000+</span> resumes created this week
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-resume-blue-500 rounded-lg transform rotate-3 scale-105 dark:bg-resume-blue-600"></div>
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop"
                  alt="Resume Template Preview"
                  className="relative rounded-lg shadow-xl w-full max-w-md transform hover:scale-[1.02] transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-resume-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-resume-gray-900 dark:text-white">
              Why Choose ProResume?
            </h2>
            <p className="text-lg text-resume-gray-700 dark:text-resume-gray-300 max-w-2xl mx-auto">
              Our platform offers everything you need to create impressive, job-winning resumes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ATS-Optimized Templates',
                description: 'Our templates are designed to pass through Applicant Tracking Systems with ease',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resume-blue-600">
                    <path d="M8 3H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1" />
                    <path d="M12 17v4" />
                    <path d="M8 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1H8z" />
                    <path d="M16 13h.01" />
                    <path d="M12 13h.01" />
                    <path d="M8 13h.01" />
                    <path d="M16 9h.01" />
                    <path d="M12 9h.01" />
                    <path d="M8 9h.01" />
                  </svg>
                )
              },
              {
                title: 'Easy Content Building',
                description: 'Simple form-based interface to add sections, reorder content, and customize your resume',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resume-blue-600">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18 2h-8a2 2 0 0 0-2 2v8" />
                    <path d="m15 9 6-6" />
                  </svg>
                )
              },
              {
                title: 'Modern Designs',
                description: 'Professional, clean templates that stand out to recruiters while maintaining ATS compatibility',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resume-blue-600">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                )
              },
              {
                title: 'Real-time Preview',
                description: 'See changes as you make them and toggle between desktop and mobile views',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resume-blue-600">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )
              },
              {
                title: 'PDF Export',
                description: 'Download your resume as a high-quality PDF ready to send to employers',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resume-blue-600">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                )
              },
              {
                title: 'Multiple Layouts',
                description: 'Choose from single column, double column, or hybrid styles to match your preferences',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resume-blue-600">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-resume-gray-50 dark:bg-resume-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900/30 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-resume-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-resume-gray-700 dark:text-resume-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Templates Preview Section */}
      <section className="py-16 bg-resume-gray-50 dark:bg-resume-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-resume-gray-900 dark:text-white">
              Professional Resume Templates
            </h2>
            <p className="text-lg text-resume-gray-700 dark:text-resume-gray-300 max-w-2xl mx-auto">
              Choose from our library of ATS-friendly templates designed to showcase your skills and experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Simple', image: 'https://images.unsplash.com/photo-1611946258676-f95c5b3b000b?q=80&w=400&auto=format&fit=crop', premium: false },
              { name: 'Modern', image: 'https://images.unsplash.com/photo-1608354580875-30bd4168b724?q=80&w=400&auto=format&fit=crop', premium: false },
              { name: 'Professional', image: 'https://images.unsplash.com/photo-1635346679154-2631971250ed?q=80&w=400&auto=format&fit=crop', premium: true }
            ].map((template, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-white dark:bg-resume-gray-900 shadow-md group relative">
                <div className="aspect-w-8 aspect-h-11 w-full">
                  <img
                    src={template.image}
                    alt={`${template.name} Template`}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-resume-gray-900 dark:text-white">
                    {template.name}
                  </h3>
                  {template.premium ? (
                    <span className="px-2 py-1 bg-gradient-to-r from-amber-500 to-amber-400 text-white text-xs font-semibold rounded">
                      PREMIUM
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-resume-blue-100 text-resume-blue-700 dark:bg-resume-blue-900/30 dark:text-resume-blue-300 text-xs font-semibold rounded">
                      FREE
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-resume-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-12">
                  <Link to={`/builder?template=${template.name.toLowerCase()}`}>
                    <Button variant={template.premium ? 'premium' : 'default'}>
                      Use This Template
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/templates">
              <Button variant="outline" size="lg">
                View All Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-resume-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-resume-gray-900 dark:text-white">
              What Our Users Say
            </h2>
            <p className="text-lg text-resume-gray-700 dark:text-resume-gray-300 max-w-2xl mx-auto">
              Success stories from job seekers who found their dream job using our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I received 5 interview calls after submitting my new resume. The ATS optimization really made a difference.",
                author: "Sarah Johnson",
                position: "Software Developer",
                image: "https://randomuser.me/api/portraits/women/12.jpg"
              },
              {
                quote: "The templates are both beautiful and functional. I was able to create a professional resume in less than 30 minutes.",
                author: "Michael Chen",
                position: "Marketing Specialist",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "As a career coach, I recommend ProResume to all my clients. The results speak for themselves.",
                author: "Emily Rodriguez",
                position: "Career Advisor",
                image: "https://randomuser.me/api/portraits/women/45.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-resume-gray-50 dark:bg-resume-gray-800 rounded-lg p-6 shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-resume-gray-900 dark:text-white">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-resume-gray-700 dark:text-resume-gray-300 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-resume-blue-600 to-resume-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-resume-blue-100">
            Create a professional, ATS-friendly resume in minutes and increase your chances of getting an interview.
          </p>
          <Link to="/builder">
            <Button size="lg" variant="default" className="bg-white text-resume-blue-700 hover:bg-resume-blue-50">
              Create Your Resume Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
