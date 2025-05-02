
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResumeProvider } from './context/ResumeContext';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme-provider';

// Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Pages
import Index from './pages/Index';
import About from './pages/About';
import Builder from './pages/Builder';
import Preview from './pages/Preview';
import Templates from './pages/Templates';
import ResumeTemplates from './pages/ResumeTemplates';
import ExampleResumes from './pages/ExampleResumes';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Resources from './pages/Resources';
import ResumeTips from './pages/ResumeTips';
import AtsGuide from './pages/AtsGuide';
import CareerAdvice from './pages/CareerAdvice';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// Blog Categories
import ResumeTipsCategory from './pages/BlogCategories/ResumeTipsCategory';
import AtsOptimizationCategory from './pages/BlogCategories/AtsOptimizationCategory';
import ResumeFormatsCategory from './pages/BlogCategories/ResumeFormatsCategory';
import CoverLettersCategory from './pages/BlogCategories/CoverLettersCategory';
import JobSearchCategory from './pages/BlogCategories/JobSearchCategory';
import InterviewPrepCategory from './pages/BlogCategories/InterviewPrepCategory';
import CareerAdviceCategory from './pages/BlogCategories/CareerAdviceCategory';
import RecruiterInsightsCategory from './pages/BlogCategories/RecruiterInsightsCategory';

// Blog Posts
import AtsFriendlyResumeTips from './pages/BlogPosts/AtsFriendlyResumeTips';
import BestResumeFormats from './pages/BlogPosts/BestResumeFormats';
import JobWinningResume2025 from './pages/BlogPosts/JobWinningResume2025';
import WhyRecruitersRejectResumes from './pages/BlogPosts/WhyRecruitersRejectResumes';

// Example Resumes
import SoftwareEngineerExample from './pages/ExampleResumes/SoftwareEngineer';
import TeacherExample from './pages/ExampleResumes/Teacher';

// Resume Formats
import CareerChangersResumeFormat from './pages/ResumeFormats/CareerChangers';

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="color-theme">
        <ResumeProvider>
          <Header />
          <main className="min-h-screen pt-16">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/builder" element={<Builder />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/resume-templates" element={<ResumeTemplates />} />
              <Route path="/example-resumes" element={<ExampleResumes />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resume-tips" element={<ResumeTips />} />
              <Route path="/ats-guide" element={<AtsGuide />} />
              <Route path="/career-advice" element={<CareerAdvice />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Blog Categories */}
              <Route path="/blog/category/resume-tips" element={<ResumeTipsCategory />} />
              <Route path="/blog/category/ats-optimization" element={<AtsOptimizationCategory />} />
              <Route path="/blog/category/resume-formats" element={<ResumeFormatsCategory />} />
              <Route path="/blog/category/cover-letters" element={<CoverLettersCategory />} />
              <Route path="/blog/category/job-search" element={<JobSearchCategory />} />
              <Route path="/blog/category/interview-prep" element={<InterviewPrepCategory />} />
              <Route path="/blog/category/career-advice" element={<CareerAdviceCategory />} />
              <Route path="/blog/category/recruiter-insights" element={<RecruiterInsightsCategory />} />
              
              {/* Blog Posts */}
              <Route path="/blog/ats-friendly-resume-tips" element={<AtsFriendlyResumeTips />} />
              <Route path="/blog/best-resume-formats" element={<BestResumeFormats />} />
              <Route path="/blog/job-winning-resume-2025" element={<JobWinningResume2025 />} />
              <Route path="/blog/why-recruiters-reject-resumes" element={<WhyRecruitersRejectResumes />} />
              
              {/* Example Resumes */}
              <Route path="/example-resumes/software-engineer" element={<SoftwareEngineerExample />} />
              <Route path="/example-resumes/teacher" element={<TeacherExample />} />
              
              {/* Resume Formats */}
              <Route path="/resume-formats/career-changers" element={<CareerChangersResumeFormat />} />
              
              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-center" richColors />
        </ResumeProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
