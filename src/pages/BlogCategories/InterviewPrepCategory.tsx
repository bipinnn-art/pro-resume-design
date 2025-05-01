
import React from 'react';
import BlogCategory from '@/components/Blog/BlogCategory';

const InterviewPrepCategory = () => {
  const posts = [
    {
      id: 'common-interview-questions',
      title: 'How to Answer the 20 Most Common Interview Questions',
      excerpt: 'Prepare for your next interview with expert answers to the questions hiring managers ask most frequently.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Michael Williams',
      date: 'April 12, 2025',
      readTime: '10 min read',
      category: 'Interview Prep'
    },
    {
      id: 'behavioral-interview-questions',
      title: 'Mastering Behavioral Interview Questions Using the STAR Method',
      excerpt: 'Learn how to structure compelling stories about your past experiences using the Situation, Task, Action, Result framework.',
      image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Jennifer Lee',
      date: 'April 5, 2025',
      readTime: '8 min read',
      category: 'Interview Prep'
    },
    {
      id: 'technical-interview-preparation',
      title: 'Technical Interview Preparation: A Complete Guide',
      excerpt: 'Strategies for excelling in coding challenges, system design questions, and other technical evaluations.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'David Chen',
      date: 'March 27, 2025',
      readTime: '12 min read',
      category: 'Interview Prep'
    },
    {
      id: 'virtual-interview-tips',
      title: 'Virtual Interview Tips: How to Make a Strong Impression Online',
      excerpt: 'Master remote interviews with these tips on technology setup, body language, and virtual communication.',
      image: 'https://images.unsplash.com/photo-1616587226157-48e49c2a7051?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Sophia Rodriguez',
      date: 'March 20, 2025',
      readTime: '7 min read',
      category: 'Interview Prep'
    }
  ];
  
  return (
    <BlogCategory 
      categoryName="Interview Prep" 
      categoryDescription="Strategies and techniques to help you confidently navigate job interviews and showcase your qualifications to potential employers"
      posts={posts}
    />
  );
};

export default InterviewPrepCategory;
