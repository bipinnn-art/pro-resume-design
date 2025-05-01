
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
