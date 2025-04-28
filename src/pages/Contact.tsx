
import React from "react";
import { Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-[85vh] bg-white dark:bg-resume-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-resume-gray-900 dark:text-white">Contact Us</h1>
          
          <div className="grid gap-8">
            <div className="p-6 bg-white dark:bg-resume-gray-800 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-resume-blue-600 dark:text-resume-blue-400" />
                <h2 className="text-xl font-semibold text-resume-gray-900 dark:text-white">Email</h2>
              </div>
              <a href="mailto:thetechtides@gmail.com" className="text-resume-blue-600 dark:text-resume-blue-400 hover:underline">
                thetechtides@gmail.com
              </a>
            </div>
            
            <div className="p-6 bg-white dark:bg-resume-gray-800 rounded-lg shadow-sm border border-resume-gray-200 dark:border-resume-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-resume-blue-600 dark:text-resume-blue-400" />
                <h2 className="text-xl font-semibold text-resume-gray-900 dark:text-white">Support Hours</h2>
              </div>
              <p className="text-resume-gray-600 dark:text-resume-gray-300">
                Monday to Friday, 9:00 AM to 6:00 PM (+5:45 GMT)
              </p>
              <p className="mt-4 text-resume-gray-600 dark:text-resume-gray-300">
                We aim to respond to all inquiries within 24–48 hours.
              </p>
            </div>
            
            <div className="p-6 bg-resume-gray-50 dark:bg-resume-gray-800/50 rounded-lg">
              <p className="text-resume-gray-600 dark:text-resume-gray-300">
                We operate fully online and do not maintain a public physical office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
