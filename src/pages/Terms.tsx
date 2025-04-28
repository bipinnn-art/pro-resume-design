
import React from "react";

const Terms = () => {
  return (
    <div className="min-h-[85vh] bg-white dark:bg-resume-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-resume-gray-900 dark:text-white">Terms of Service</h1>
          <p className="text-sm text-resume-gray-600 dark:text-resume-gray-400">Last updated: April 2025</p>
          
          <div className="prose dark:prose-invert max-w-none space-y-8">
            <p className="text-lg text-resume-gray-600 dark:text-resume-gray-300">
              Welcome to ProResume! By using our website, you agree to comply with and be bound by the following terms:
            </p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">1. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-resume-gray-600 dark:text-resume-gray-300">
                <li>Users are responsible for the accuracy and legality of the content they generate using our services</li>
                <li>Users must not create fraudulent, illegal, or misleading resumes</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">2. Usage Restrictions</h2>
              <p className="text-resume-gray-600 dark:text-resume-gray-300">
                Unauthorized use of the platform for unlawful purposes is strictly prohibited.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">3. Premium Features</h2>
              <ul className="list-disc pl-6 text-resume-gray-600 dark:text-resume-gray-300">
                <li>Certain advanced templates or AI services may be offered as premium features in the future</li>
                <li>Subscription details and terms will be disclosed at the time of purchase</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">4. Refund Policy</h2>
              <p className="text-resume-gray-600 dark:text-resume-gray-300">
                Refunds (if applicable) will be honored within 7 days of purchase for premium services if the user is not satisfied.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">5. Intellectual Property</h2>
              <p className="text-resume-gray-600 dark:text-resume-gray-300">
                All website content, design, and technology are owned by ProResume unless otherwise stated.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-resume-gray-900 dark:text-white">6. Limitation of Liability</h2>
              <p className="text-resume-gray-600 dark:text-resume-gray-300">
                ProResume is not responsible for any career outcomes based on resumes generated from our service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
