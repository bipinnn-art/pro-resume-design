
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-resume-gray-900 border-t">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-resume-blue-800 dark:text-resume-blue-300 mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M8 3H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1" />
                <path d="M12 17v4" />
                <path d="M8 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1H8z" />
                <path d="M16 13h.01" />
                <path d="M12 13h.01" />
                <path d="M8 13h.01" />
                <path d="M16 9h.01" />
                <path d="M12 9h.01" />
                <path d="M8 9h.01" />
              </svg>
              <span className="font-bold text-xl">ProResume</span>
            </Link>
            <p className="text-resume-gray-600 dark:text-resume-gray-400 text-sm">
              Create professional, ATS-friendly resumes and CVs that help you stand out and get hired faster.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-resume-gray-800 dark:text-resume-gray-200 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/builder" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Resume Templates
                </Link>
              </li>
              <li>
                <Link to="/example-resumes" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Example Resumes
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-resume-gray-800 dark:text-resume-gray-200 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resume-tips" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Resume Tips
                </Link>
              </li>
              <li>
                <Link to="/ats-guide" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  ATS Guide
                </Link>
              </li>
              <li>
                <Link to="/career-advice" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-resume-gray-800 dark:text-resume-gray-200 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-resume-gray-600 dark:text-resume-gray-400 text-sm">
            © {currentYear} ProResume. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-resume-gray-600 hover:text-resume-blue-600 dark:text-resume-gray-400 dark:hover:text-resume-blue-400">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
