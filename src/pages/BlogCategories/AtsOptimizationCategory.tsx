
import React from 'react';
import BlogCategory from '@/components/Blog/BlogCategory';

const AtsOptimizationCategory = () => {
  const posts = [
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
      id: 'ats-keywords-2025',
      title: 'Top ATS Keywords for Different Industries in 2025',
      excerpt: 'Learn which keywords and phrases ATS systems are programmed to look for in various industries and job roles.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Jessica Martinez',
      date: 'March 30, 2025',
      readTime: '7 min read',
      category: 'ATS Optimization'
    },
    {
      id: 'ats-resume-formatting',
      title: 'The Perfect Resume Format for ATS Success',
      excerpt: 'Detailed guide to formatting your resume for maximum ATS compatibility without sacrificing visual appeal.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Daniel Wong',
      date: 'March 22, 2025',
      readTime: '6 min read',
      category: 'ATS Optimization'
    },
    {
      id: 'testing-ats-compatibility',
      title: 'How to Test Your Resume for ATS Compatibility',
      excerpt: 'Learn about tools and techniques to evaluate whether your resume will pass through Applicant Tracking Systems successfully.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Rachel Kim',
      date: 'March 15, 2025',
      readTime: '5 min read',
      category: 'ATS Optimization'
    }
  ];
  
  return (
    <BlogCategory 
      categoryName="ATS Optimization" 
      categoryDescription="Strategies and techniques to ensure your resume passes through Applicant Tracking Systems and reaches hiring managers"
      posts={posts}
    />
  );
};

export default AtsOptimizationCategory;
