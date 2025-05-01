
import React from 'react';
import BlogCategory from '@/components/Blog/BlogCategory';

const ResumeTipsCategory = () => {
  const posts = [
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
      id: 'resume-action-verbs',
      title: 'Power-Packed Action Verbs to Strengthen Your Resume',
      excerpt: 'Discover the most effective action verbs to make your experience and achievements stand out to potential employers.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Robert Chen',
      date: 'April 2, 2025',
      readTime: '5 min read',
      category: 'Resume Tips'
    },
    {
      id: 'tech-resume-guide',
      title: 'The Ultimate Tech Resume Guide',
      excerpt: 'A comprehensive guide for software developers, IT specialists, and other tech professionals to create compelling resumes.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Alicia Washington',
      date: 'March 25, 2025',
      readTime: '10 min read',
      category: 'Resume Tips'
    },
    {
      id: 'resume-length-guide',
      title: 'One Page or Two? The Definitive Resume Length Guide',
      excerpt: 'Resolve the debate on resume length once and for all with expert guidance on how long your resume should be based on your experience.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Thomas Baker',
      date: 'March 18, 2025',
      readTime: '6 min read',
      category: 'Resume Tips'
    }
  ];
  
  return (
    <BlogCategory 
      categoryName="Resume Tips" 
      categoryDescription="Expert advice and strategies for creating powerful, effective resumes that get you noticed by employers"
      posts={posts}
    />
  );
};

export default ResumeTipsCategory;
