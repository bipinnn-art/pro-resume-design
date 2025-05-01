
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResumeProvider } from "./context/ResumeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Builder from "./pages/Builder";
import Preview from "./pages/Preview";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import ResumeTips from "./pages/ResumeTips";
import AtsGuide from "./pages/AtsGuide";
import CareerAdvice from "./pages/CareerAdvice";
import Faq from "./pages/Faq";
import ResumeTemplates from "./pages/ResumeTemplates";
import ExampleResumes from "./pages/ExampleResumes";
import Resources from "./pages/Resources";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import React from "react";

// Blog Post Pages
import JobWinningResume2025 from "./pages/BlogPosts/JobWinningResume2025";
import AtsFriendlyResumeTips from "./pages/BlogPosts/AtsFriendlyResumeTips";
import BestResumeFormats from "./pages/BlogPosts/BestResumeFormats";
import WhyRecruitersRejectResumes from "./pages/BlogPosts/WhyRecruitersRejectResumes";

// Blog Category Pages
import ResumeTipsCategory from "./pages/BlogCategories/ResumeTipsCategory";
import AtsOptimizationCategory from "./pages/BlogCategories/AtsOptimizationCategory";
import ResumeFormatsCategory from "./pages/BlogCategories/ResumeFormatsCategory";
import RecruiterInsightsCategory from "./pages/BlogCategories/RecruiterInsightsCategory";
import CareerAdviceCategory from "./pages/BlogCategories/CareerAdviceCategory";
import InterviewPrepCategory from "./pages/BlogCategories/InterviewPrepCategory";
import JobSearchCategory from "./pages/BlogCategories/JobSearchCategory";
import CoverLettersCategory from "./pages/BlogCategories/CoverLettersCategory";

// Initialize the query client outside of the component
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ResumeProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/builder" element={<Builder />} />
                  <Route path="/preview" element={<Preview />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/templates" element={<Templates />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/resume-tips" element={<ResumeTips />} />
                  <Route path="/ats-guide" element={<AtsGuide />} />
                  <Route path="/career-advice" element={<CareerAdvice />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/resume-templates" element={<ResumeTemplates />} />
                  <Route path="/example-resumes" element={<ExampleResumes />} />
                  <Route path="/resources" element={<Resources />} />
                  
                  {/* Blog Post Routes */}
                  <Route path="/blog/job-winning-resume-2025" element={<JobWinningResume2025 />} />
                  <Route path="/blog/ats-friendly-resume-tips" element={<AtsFriendlyResumeTips />} />
                  <Route path="/blog/best-resume-formats" element={<BestResumeFormats />} />
                  <Route path="/blog/why-recruiters-reject-resumes" element={<WhyRecruitersRejectResumes />} />
                  
                  {/* Blog Category Routes */}
                  <Route path="/blog/category/resume-tips" element={<ResumeTipsCategory />} />
                  <Route path="/blog/category/ats-optimization" element={<AtsOptimizationCategory />} />
                  <Route path="/blog/category/resume-formats" element={<ResumeFormatsCategory />} />
                  <Route path="/blog/category/recruiter-insights" element={<RecruiterInsightsCategory />} />
                  <Route path="/blog/category/career-advice" element={<CareerAdviceCategory />} />
                  <Route path="/blog/category/interview-prep" element={<InterviewPrepCategory />} />
                  <Route path="/blog/category/job-search" element={<JobSearchCategory />} />
                  <Route path="/blog/category/cover-letters" element={<CoverLettersCategory />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </ResumeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
