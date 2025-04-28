
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm dark:bg-resume-gray-900/95">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-resume-blue-800 dark:text-resume-blue-300"
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
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/builder" 
            className="text-resume-gray-700 hover:text-resume-blue-600 dark:text-resume-gray-300 dark:hover:text-resume-blue-400"
          >
            Resume Builder
          </Link>
          <Link 
            to="/templates" 
            className="text-resume-gray-700 hover:text-resume-blue-600 dark:text-resume-gray-300 dark:hover:text-resume-blue-400"
          >
            Templates
          </Link>
          <Link 
            to="/pricing" 
            className="text-resume-gray-700 hover:text-resume-blue-600 dark:text-resume-gray-300 dark:hover:text-resume-blue-400"
          >
            Pricing
          </Link>
          <Link 
            to="/blog" 
            className="text-resume-gray-700 hover:text-resume-blue-600 dark:text-resume-gray-300 dark:hover:text-resume-blue-400"
          >
            Blog
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="premium" size="sm">
            Get Pro
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-resume-gray-700 hover:bg-resume-gray-100 dark:text-resume-gray-300 dark:hover:bg-resume-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4 px-4 bg-white dark:bg-resume-gray-900">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/builder" 
              className="text-resume-gray-700 hover:text-resume-blue-600 dark:text-resume-gray-300 dark:hover:text-resume-blue-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume Builder
            </Link>
            <Link 
              to="/templates" 
              className="text-resume-gray-700 hover:text-resume-blue-600 dark:text-resume-gray-300 dark:hover:text-resume-blue-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              to="/pricing" 
              className="text-resume-gray-700 hover:text-resume-blue-600 dark:text-resume-gray-300 dark:hover:text-resume-blue-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className="text-resume-gray-700 hover:text-resume-blue-600 dark:text-resume-gray-300 dark:hover:text-resume-blue-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
                Sign In
              </Button>
              <Button variant="premium" onClick={() => setIsMenuOpen(false)}>
                Get Pro
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
