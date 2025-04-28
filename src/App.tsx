
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
