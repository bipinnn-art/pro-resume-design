
import React from 'react';
import BlogCategory from '@/components/Blog/BlogCategory';

const ResumeFormatsCategory = () => {
  const posts = [
    {
      id: 'resume-formats-career-changers',
      title: 'Resume Formats for Career Changers',
      excerpt: 'Learn how to effectively highlight transferable skills and present your experience when transitioning to a new career path.',
      image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Michael Rodriguez',
      date: 'April 25, 2025',
      readTime: '11 min read',
      category: 'Resume Formats',
      link: '/resume-formats/career-changers'
    },
    {
      id: 'best-resume-formats',
      title: 'The Best Resume Formats for 2025',
      excerpt: 'An in-depth comparison of chronological, functional, and hybrid resume formats to help you choose the right one for your situation.',
      image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Jennifer Lee',
      date: 'April 12, 2025',
      readTime: '9 min read',
      category: 'Resume Formats'
    },
    {
      id: 'ats-friendly-resume-formats',
      title: 'ATS-Friendly Resume Formats That Get Results',
      excerpt: 'How to structure your resume to ensure it passes through Applicant Tracking Systems while still impressing human recruiters.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Robert Chen',
      date: 'April 5, 2025',
      readTime: '8 min read',
      category: 'Resume Formats'
    },
    {
      id: 'executive-resume-formats',
      title: 'Executive Resume Formats: Showcasing Leadership and Impact',
      excerpt: 'Specialized resume formats for executive-level candidates that highlight leadership capabilities and strategic achievements.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Sarah Johnson',
      date: 'March 28, 2025',
      readTime: '10 min read',
      category: 'Resume Formats'
    }
  ];
  
  return (
    <BlogCategory 
      categoryName="Resume Formats" 
      categoryDescription="Explore different resume formats and structures to find the best approach for your experience level, industry, and career goals"
      posts={posts}
    />
  );
};

export default ResumeFormatsCategory;
