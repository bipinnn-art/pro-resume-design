
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 'job-winning-resume-2025',
      title: 'How to Write a Job-Winning Resume in 2025',
      excerpt: 'Learn the latest techniques and best practices for creating a resume that stands out to both recruiters and ATS systems in 2025.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Emily Johnson',
      date: 'April 15, 2025',
      readTime: '8 min read',
      category: 'Resume Tips'
    },
    {
      id: 'ats-friendly-resume-tips',
      title: 'ATS-Friendly Resume Tips',
      excerpt: 'Discover how to optimize your resume to pass through Applicant Tracking Systems and land on the hiring manager\'s desk.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Michael Chen',
      date: 'April 10, 2025',
      readTime: '6 min read',
      category: 'ATS Optimization'
    },
    {
      id: 'best-resume-formats',
      title: 'Best Resume Formats for Different Careers',
      excerpt: 'Find the perfect resume format based on your industry, experience level, and career goals to make the best impression.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Sarah Williams',
      date: 'April 5, 2025',
      readTime: '7 min read',
      category: 'Resume Formats'
    },
    {
      id: 'why-recruiters-reject-resumes',
      title: 'Why Recruiters Reject Resumes Instantly',
      excerpt: 'Avoid these common mistakes that cause recruiters to discard resumes within seconds, and learn how to make yours stand out instead.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'David Rodriguez',
      date: 'March 29, 2025',
      readTime: '5 min read',
      category: 'Recruiter Insights'
    }
  ];

  return (
    <>
      <PageHeader
        title="Resume Tips Blog" 
        subtitle="Expert advice, trends, and strategies to help you create a standout resume and advance your career."
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="bg-white dark:bg-resume-gray-800 rounded-xl overflow-hidden shadow-lg border border-resume-gray-200 dark:border-resume-gray-700 mb-12">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="text-sm font-medium text-resume-blue-600 dark:text-resume-blue-400 mb-2">{blogPosts[0].category}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-resume-gray-900 dark:text-white mb-4">{blogPosts[0].title}</h2>
              <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-6">{blogPosts[0].excerpt}</p>
              
              <div className="flex items-center gap-4 text-sm text-resume-gray-500 dark:text-resume-gray-400 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              
              <Link to={`/blog/${blogPosts[0].id}`}>
                <Button variant="premium">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Recent Posts */}
        <h2 className="text-2xl md:text-3xl font-bold text-resume-gray-900 dark:text-white mb-8">Recent Articles</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white dark:bg-resume-gray-800 rounded-lg overflow-hidden shadow-md border border-resume-gray-200 dark:border-resume-gray-700 transition-all hover:shadow-lg">
              <div className="h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-resume-blue-600 dark:text-resume-blue-400 mb-2">
                  <Link to={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {post.category}
                  </Link>
                </div>
                <h3 className="text-xl font-bold text-resume-gray-900 dark:text-white mb-3">{post.title}</h3>
                <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-resume-gray-500 dark:text-resume-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-resume-blue-600 dark:text-resume-blue-400 flex items-center hover:underline">
                    <span>Read More</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-resume-gray-900 dark:text-white mb-6">Browse by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Resume Tips', 'ATS Optimization', 'Career Advice', 'Interview Prep', 'Job Search', 'Resume Formats', 'Cover Letters', 'Recruiter Insights'].map((category, i) => (
              <Link 
                key={i} 
                to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-resume-gray-50 dark:bg-resume-gray-800/50 p-4 rounded-lg text-center hover:bg-resume-blue-50 dark:hover:bg-resume-blue-900/20 transition-colors border border-resume-gray-200 dark:border-resume-gray-700"
              >
                <span className="text-resume-gray-900 dark:text-white font-medium">{category}</span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Subscribe */}
        <div className="mt-16 bg-gradient-to-r from-resume-blue-600 to-resume-blue-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Resume Tips in Your Inbox</h2>
          <p className="mb-6 max-w-2xl mx-auto">Subscribe to our newsletter for the latest resume trends, career advice, and job search strategies.</p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 rounded-md text-resume-gray-900 focus:outline-none focus:ring-2 focus:ring-resume-blue-300"
            />
            <Button className="bg-white text-resume-blue-600 hover:bg-resume-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
