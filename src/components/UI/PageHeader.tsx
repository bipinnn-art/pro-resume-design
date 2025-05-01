
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div className={`py-12 lg:py-16 bg-gradient-to-b from-white to-resume-blue-50 dark:from-resume-gray-900 dark:to-resume-gray-800 ${className}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-resume-gray-900 dark:text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-resume-gray-600 dark:text-resume-gray-300 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
