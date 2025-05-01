
import React from 'react';
import BlogCategory from '@/components/Blog/BlogCategory';

const CareerAdviceCategory = () => {
  const posts = [
    {
      id: 'career-growth-strategies',
      title: 'Strategic Career Growth: Planning Your Next Five Years',
      excerpt: 'Learn how to set meaningful career goals and create an actionable roadmap to achieve them in the changing professional landscape.',
      image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Daniel Morgan',
      date: 'April 14, 2025',
      readTime: '9 min read',
      category: 'Career Advice'
    },
    {
      id: 'salary-negotiation-tactics',
      title: 'Salary Negotiation Tactics That Actually Work',
      excerpt: 'Expert techniques for negotiating your compensation package, from initial offer to final agreement, with scripts you can use.',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Lisa Chen',
      date: 'April 4, 2025',
      readTime: '7 min read',
      category: 'Career Advice'
    },
    {
      id: 'remote-work-productivity',
      title: 'Maximizing Your Productivity in Remote and Hybrid Work Environments',
      excerpt: 'Strategies to stay focused, manage your time effectively, and stand out as a top performer in distributed teams.',
      image: 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Mark Williams',
      date: 'March 26, 2025',
      readTime: '8 min read',
      category: 'Career Advice'
    },
    {
      id: 'career-change-guide',
      title: 'The Complete Guide to Making a Successful Career Change',
      excerpt: 'How to transition to a new field at any stage of your professional life, from initial exploration to landing your first role.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Sophia Adams',
      date: 'March 17, 2025',
      readTime: '11 min read',
      category: 'Career Advice'
    }
  ];
  
  return (
    <BlogCategory 
      categoryName="Career Advice" 
      categoryDescription="Professional guidance to help you navigate career decisions, grow in your current role, and achieve long-term success"
      posts={posts}
    />
  );
};

export default CareerAdviceCategory;
