
import React from "react";

const About = () => {
  return (
    <div className="min-h-[85vh] bg-white dark:bg-resume-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-resume-gray-900 dark:text-white">About ProResume</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-resume-gray-600 dark:text-resume-gray-300">
              ProResume was founded in 2025 with the vision of simplifying the resume-building process for everyone, everywhere.
              We believe that a strong, professional resume should be accessible to all job seekers — no matter their background or technical skills.
            </p>
            
            <p className="text-lg text-resume-gray-600 dark:text-resume-gray-300">
              At ProResume, we focus on creating ATS-friendly, visually appealing, and customizable resumes that empower individuals to present their best selves to employers.
            </p>
            
            <p className="text-lg text-resume-gray-600 dark:text-resume-gray-300">
              We are a solo-driven initiative, dedicated to innovation, user-friendliness, and providing exceptional tools to help users advance their careers.
            </p>
            
            <div className="mt-8 p-6 bg-resume-blue-50 dark:bg-resume-blue-900/20 rounded-lg">
              <h2 className="text-2xl font-semibold text-resume-blue-600 dark:text-resume-blue-400 mb-4">Our Mission</h2>
              <p className="text-xl italic text-resume-gray-700 dark:text-resume-gray-300">
                "Empowering individuals to craft perfect, professional resumes with ease and confidence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
