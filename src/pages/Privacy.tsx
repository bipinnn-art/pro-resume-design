
import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-[85vh] bg-white dark:bg-resume-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-resume-gray-900 dark:text-white">Privacy Policy</h1>
          <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Last updated: April 2025</p>
          
          <div className="prose dark:prose-invert max-w-none space-y-6">
            <p className="text-resume-gray-600 dark:text-resume-gray-300">
              ProResume values your privacy and is committed to protecting your personal information.
            </p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">Information We Collect</h2>
              <ul className="list-disc pl-6 text-resume-gray-600 dark:text-resume-gray-300">
                <li>Basic resume information (name, email address, education history, work experience, certifications, skills)</li>
                <li>Email address if you choose to contact us or register for updates</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-resume-gray-600 dark:text-resume-gray-300">
                <li>To generate personalized resumes</li>
                <li>To improve our website and user experience</li>
                <li>To respond to customer service inquiries</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">Cookies and Tracking</h2>
              <p className="text-resume-gray-600 dark:text-resume-gray-300">
                We use cookies to enhance user experience and analyze website traffic.
                By using our website, you consent to our use of cookies.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">Legal Compliance</h2>
              <p className="text-resume-gray-600 dark:text-resume-gray-300">
                We comply with major data protection regulations including GDPR (EU) and CCPA (California).
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">Your Rights</h2>
              <p className="text-resume-gray-600 dark:text-resume-gray-300">
                You have the right to access, update, or delete your personal information at any time.
                To exercise these rights, please contact us at thetechtides@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
