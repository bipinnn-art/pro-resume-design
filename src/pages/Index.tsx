
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-resume-gray-900 dark:text-white">
            Create Professional Resumes in Minutes
          </h1>
          <p className="text-xl text-resume-gray-600 dark:text-resume-gray-300 max-w-3xl mx-auto">
            Our AI-powered resume builder helps you craft standout resumes tailored to your industry and experience level.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/builder">
            <Button size="lg" variant="premium">
              Build Your Resume
            </Button>
          </Link>
          <Link to="/templates">
            <Button size="lg" variant="outline">
              Browse Templates
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
