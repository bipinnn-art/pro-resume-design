
import React from 'react';
import BlogCategory from '@/components/Blog/BlogCategory';

const RecruiterInsightsCategory = () => {
  const posts = [
    {
      id: 'why-recruiters-reject-resumes',
      title: 'Why Recruiters Reject Resumes Instantly',
      excerpt: 'Avoid these common mistakes that cause recruiters to discard resumes within seconds, and learn how to make yours stand out instead.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'David Rodriguez',
      date: 'March 29, 2025',
      readTime: '5 min read',
      category: 'Recruiter Insights'
    },
    {
      id: 'recruiter-resume-pet-peeves',
      title: 'Top 10 Recruiter Resume Pet Peeves to Avoid',
      excerpt: 'Insider perspective from professional recruiters on the resume mistakes that instantly turn them off.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Samantha Lee',
      date: 'March 25, 2025',
      readTime: '6 min read',
      category: 'Recruiter Insights'
    },
    {
      id: 'what-recruiters-actually-look-for',
      title: 'What Recruiters Actually Look for in a Resume',
      excerpt: 'Real insights from hiring professionals about what makes them stop and take notice of an application.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Ryan Thompson',
      date: 'March 18, 2025',
      readTime: '7 min read',
      category: 'Recruiter Insights'
    },
    {
      id: 'follow-up-strategies-recruiters-respect',
      title: 'Follow-Up Strategies Recruiters Actually Respect',
      excerpt: 'How to follow up on job applications without annoying recruiters, with advice directly from hiring professionals.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500',
      author: 'Olivia Wilson',
      date: 'March 10, 2025',
      readTime: '5 min read',
      category: 'Recruiter Insights'
    }
  ];
  
  return (
    <BlogCategory 
      categoryName="Recruiter Insights" 
      categoryDescription="Direct advice from hiring professionals on how to create resumes that catch their attention and stand out from the competition"
      posts={posts}
    />
  );
};

export default RecruiterInsightsCategory;
