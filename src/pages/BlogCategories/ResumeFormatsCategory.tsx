
import React from 'react';
import BlogCategory from '@/components/Blog/BlogCategory';

const ResumeFormatsCategory = () => {
  const posts = [
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
      id: 'chronological-vs-functional',
      title: 'Chronological vs. Functional vs. Combination: Which Resume Format Is Right for You?',
      excerpt: 'A detailed comparison of the three main resume formats to help you choose the best option for your situation.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Marcus Johnson',
      date: 'March 28, 2025',
      readTime: '6 min read',
      category: 'Resume Formats'
    },
    {
      id: 'executive-resume-format',
      title: 'Executive Resume Format: Stand Out at the Leadership Level',
      excerpt: 'Specialized formatting advice for C-suite executives and senior managers seeking high-level positions.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Victoria Chang',
      date: 'March 20, 2025',
      readTime: '8 min read',
      category: 'Resume Formats'
    },
    {
      id: 'resume-format-career-change',
      title: 'Resume Formats for Career Changers',
      excerpt: 'How to structure your resume when transitioning to a new industry or role to highlight transferable skills.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Jason Rodriguez',
      date: 'March 12, 2025',
      readTime: '7 min read',
      category: 'Resume Formats'
    }
  ];
  
  return (
    <BlogCategory 
      categoryName="Resume Formats" 
      categoryDescription="Expert guidance on choosing and implementing the right resume structure for your career situation"
      posts={posts}
    />
  );
};

export default ResumeFormatsCategory;
