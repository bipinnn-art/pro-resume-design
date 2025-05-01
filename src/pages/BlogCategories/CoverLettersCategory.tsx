
import React from 'react';
import BlogCategory from '@/components/Blog/BlogCategory';

const CoverLettersCategory = () => {
  const posts = [
    {
      id: 'cover-letter-guide-2025',
      title: 'The Complete Cover Letter Guide for 2025',
      excerpt: 'Learn how to write compelling cover letters that complement your resume and convince hiring managers to call you for an interview.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Emma Rodriguez',
      date: 'April 15, 2025',
      readTime: '8 min read',
      category: 'Cover Letters'
    },
    {
      id: 'cover-letter-templates',
      title: 'Proven Cover Letter Templates for 10 Different Industries',
      excerpt: 'Industry-specific templates and examples to help you craft the perfect cover letter for your target role.',
      image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Thomas Clark',
      date: 'April 6, 2025',
      readTime: '7 min read',
      category: 'Cover Letters'
    },
    {
      id: 'cover-letter-mistakes',
      title: '7 Cover Letter Mistakes That Ruin Your Chances (And How to Avoid Them)',
      excerpt: 'Common errors that cause hiring managers to discard applications, with expert advice on how to avoid these pitfalls.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Nicole Taylor',
      date: 'March 28, 2025',
      readTime: '6 min read',
      category: 'Cover Letters'
    },
    {
      id: 'cover-letter-for-career-change',
      title: 'How to Write a Cover Letter for a Career Change',
      excerpt: 'Specific strategies for highlighting your transferable skills and explaining your career transition in a convincing way.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Robert Kim',
      date: 'March 19, 2025',
      readTime: '9 min read',
      category: 'Cover Letters'
    }
  ];
  
  return (
    <BlogCategory 
      categoryName="Cover Letters" 
      categoryDescription="Expert guidance on creating compelling cover letters that complement your resume and help you stand out to potential employers"
      posts={posts}
    />
  );
};

export default CoverLettersCategory;
