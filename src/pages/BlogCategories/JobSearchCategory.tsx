
import React from 'react';
import BlogCategory from '@/components/Blog/BlogCategory';

const JobSearchCategory = () => {
  const posts = [
    {
      id: 'job-search-strategy-2025',
      title: 'Job Search Strategy for 2025: What's Changed and What Works Now',
      excerpt: 'The latest effective approaches to finding job opportunities in today's competitive market, from networking to AI-powered job platforms.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Rebecca Johnson',
      date: 'April 8, 2025',
      readTime: '9 min read',
      category: 'Job Search'
    },
    {
      id: 'linkedin-profile-optimization',
      title: 'LinkedIn Profile Optimization: Get Noticed by Recruiters',
      excerpt: 'How to enhance your LinkedIn profile to attract recruiters and generate job opportunities even when you're not actively looking.',
      image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Marcus Thompson',
      date: 'April 1, 2025',
      readTime: '6 min read',
      category: 'Job Search'
    },
    {
      id: 'networking-strategies',
      title: 'Modern Networking Strategies That Actually Work',
      excerpt: 'How to build authentic professional relationships that can lead to job opportunities, without feeling awkward or transactional.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Alicia Wong',
      date: 'March 25, 2025',
      readTime: '7 min read',
      category: 'Job Search'
    },
    {
      id: 'job-search-burnout',
      title: 'Avoiding Job Search Burnout: Maintaining Momentum and Mental Health',
      excerpt: 'Strategies to stay motivated and protect your wellbeing during extended job searches in a challenging market.',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'James Peterson',
      date: 'March 18, 2025',
      readTime: '8 min read',
      category: 'Job Search'
    }
  ];
  
  return (
    <BlogCategory 
      categoryName="Job Search" 
      categoryDescription="Effective strategies and practical advice to help you navigate the job market, find opportunities, and land your next position"
      posts={posts}
    />
  );
};

export default JobSearchCategory;
