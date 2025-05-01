
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI';
import PageHeader from '@/components/UI/PageHeader';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: React.ReactNode;
}

const BlogPost = ({
  title,
  subtitle,
  author,
  date,
  readTime,
  category,
  image,
  content
}: BlogPostProps) => {
  return (
    <>
      <PageHeader
        title={title}
        subtitle={subtitle}
      />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/blog" className="inline-flex items-center text-resume-blue-600 dark:text-resume-blue-400 hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Back to all articles</span>
        </Link>
        
        <div className="bg-white dark:bg-resume-gray-800 rounded-xl overflow-hidden shadow-lg border border-resume-gray-200 dark:border-resume-gray-700 mb-8">
          <div className="h-64 lg:h-96 w-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="inline-block bg-resume-blue-100 dark:bg-resume-blue-900 text-resume-blue-600 dark:text-resume-blue-400 rounded-full px-3 py-1 text-sm font-medium mb-4">
                <Link to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                  {category}
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-resume-gray-500 dark:text-resume-gray-400">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-resume-gray-900 dark:prose-headings:text-white prose-a:text-resume-blue-600 dark:prose-a:text-resume-blue-400">
              {content}
            </div>
          </div>
        </div>
        
        {/* Related Posts CTA would go here */}
        <div className="my-12 bg-resume-gray-50 dark:bg-resume-gray-800/50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-resume-gray-900 dark:text-white mb-3">
            Ready to Build Your Resume?
          </h3>
          <p className="text-resume-gray-600 dark:text-resume-gray-300 mb-4">
            Apply what you've learned and create a standout resume with our free builder.
          </p>
          <Link to="/builder">
            <Button variant="premium">Create Your Resume</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
