
import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/UI/PageHeader';
import { Button } from '@/components/UI';
import { ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogCategoryProps {
  categoryName: string;
  categoryDescription: string;
  posts: BlogPost[];
}

const BlogCategory = ({ categoryName, categoryDescription, posts }: BlogCategoryProps) => {
  return (
    <>
      <PageHeader
        title={categoryName}
        subtitle={categoryDescription}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-resume-gray-800 rounded-lg overflow-hidden shadow-md border border-resume-gray-200 dark:border-resume-gray-700 transition-all hover:shadow-lg">
              <div className="h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-resume-blue-600 dark:text-resume-blue-400 mb-2">{post.category}</div>
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

        {/* Back to all categories */}
        <div className="mt-12 text-center">
          <Link to="/blog">
            <Button variant="outline">
              Back to All Articles
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCategory;
