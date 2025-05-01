
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI";
import { ArrowRight, FileText, LayoutTemplate } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-[85vh] w-full bg-gradient-to-b from-white to-resume-blue-50 dark:from-resume-gray-900 dark:to-resume-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-resume-gray-900 dark:text-white leading-tight">
              Create Your Perfect Resume — <span className="text-resume-blue-600 dark:text-resume-blue-400">Fast, Easy, and Free</span>
            </h1>
            
            <p className="text-xl text-resume-gray-600 dark:text-resume-gray-300 max-w-lg">
              Our AI-powered resume builder helps you create standout resumes tailored to your industry and experience level.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link to="/builder">
                <Button size="lg" variant="premium" className="w-full sm:w-auto group">
                  <span>Build Your Resume</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/templates">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <LayoutTemplate className="mr-2 h-4 w-4" />
                  <span>Browse Templates</span>
                </Button>
              </Link>
            </div>
            
            {/* Features List */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "AI-powered content suggestions",
                "ATS-optimized templates",
                "Industry-specific formats",
                "Expert-designed layouts"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-resume-blue-100 dark:bg-resume-blue-900 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-resume-blue-600 dark:bg-resume-blue-400"></div>
                  </div>
                  <span className="text-resume-gray-700 dark:text-resume-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Resume Preview */}
          <div className="relative h-[460px] w-full max-w-md mx-auto md:ml-auto animate-slide-up">
            <div className="absolute top-0 right-0 w-full h-full bg-white dark:bg-resume-gray-800 rounded-md shadow-xl border border-resume-gray-200 dark:border-resume-gray-700 transform rotate-3 transition-all"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-resume-gray-800 rounded-md shadow-xl border border-resume-gray-200 dark:border-resume-gray-700 transform -rotate-3 transition-all"></div>
            
            {/* Main Resume Preview Card */}
            <div className="relative h-full w-full bg-white dark:bg-resume-gray-800 rounded-md shadow-xl border border-resume-gray-200 dark:border-resume-gray-700 overflow-hidden">
              {/* Resume Header */}
              <div className="h-28 bg-gradient-to-r from-resume-blue-600 to-resume-blue-500 p-6">
                <div className="h-8 w-48 bg-white dark:bg-resume-gray-100 rounded-md opacity-80"></div>
                <div className="flex gap-2 mt-2">
                  <div className="h-4 w-24 bg-white dark:bg-resume-gray-100 rounded-sm opacity-60"></div>
                  <div className="h-4 w-32 bg-white dark:bg-resume-gray-100 rounded-sm opacity-60"></div>
                </div>
              </div>
              
              {/* Resume Content */}
              <div className="p-6">
                <div className="h-4 w-full bg-resume-gray-200 dark:bg-resume-gray-700 rounded-md mb-4"></div>
                <div className="h-4 w-3/4 bg-resume-gray-200 dark:bg-resume-gray-700 rounded-md mb-6"></div>
                
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-resume-blue-600 dark:text-resume-blue-400" />
                  <div className="h-5 w-32 bg-resume-gray-300 dark:bg-resume-gray-600 rounded-md"></div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="h-3 w-full bg-resume-gray-200 dark:bg-resume-gray-700 rounded-sm"></div>
                  <div className="h-3 w-full bg-resume-gray-200 dark:bg-resume-gray-700 rounded-sm"></div>
                  <div className="h-3 w-2/3 bg-resume-gray-200 dark:bg-resume-gray-700 rounded-sm"></div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-resume-blue-600 dark:text-resume-blue-400" />
                  <div className="h-5 w-32 bg-resume-gray-300 dark:bg-resume-gray-600 rounded-md"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-3 w-full bg-resume-gray-200 dark:bg-resume-gray-700 rounded-sm"></div>
                  <div className="h-3 w-full bg-resume-gray-200 dark:bg-resume-gray-700 rounded-sm"></div>
                  <div className="h-3 w-3/4 bg-resume-gray-200 dark:bg-resume-gray-700 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials/Stats Section */}
      <div className="bg-resume-gray-50 dark:bg-resume-gray-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10,000+", text: "Resumes Created" },
              { number: "94%", text: "Interview Success Rate" },
              { number: "200+", text: "Industry Templates" }
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-resume-gray-800/50 p-6 rounded-lg shadow-sm border border-resume-gray-100 dark:border-resume-gray-700">
                <div className="text-3xl font-bold text-resume-blue-600 dark:text-resume-blue-400 mb-2">{stat.number}</div>
                <div className="text-resume-gray-600 dark:text-resume-gray-300">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
