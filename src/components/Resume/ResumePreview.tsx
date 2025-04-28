
import React, { useState, useRef } from 'react';
import { useResumeContext } from '@/context/ResumeContext';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import SimpleTemplate from './Templates/SimpleTemplate';
import ModernTemplate from './Templates/ModernTemplate';
import ProfessionalTemplate from './Templates/ProfessionalTemplate';
import html2pdf from 'html2pdf.js';
import { toast } from 'sonner';

const ResumePreview: React.FC = () => {
  const { resumeData, setTemplate } = useResumeContext();
  const resumeRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  
  const renderTemplate = () => {
    switch (resumeData.template) {
      case 'simple':
        return <SimpleTemplate data={resumeData} />;
      case 'modern':
        return <ModernTemplate data={resumeData} />;
      case 'professional':
        return <ProfessionalTemplate data={resumeData} />;
      default:
        return <SimpleTemplate data={resumeData} />;
    }
  };
  
  const handleTemplateChange = (template: 'simple' | 'modern' | 'professional') => {
    setTemplate(template);
    toast.success(`Template changed to ${template}`);
  };
  
  const handleDownloadPdf = async () => {
    if (!resumeRef.current) return;
    
    try {
      setIsGeneratingPdf(true);
      
      const element = resumeRef.current;
      const fileName = `${resumeData.contactInfo.firstName}_${resumeData.contactInfo.lastName}_Resume.pdf`;
      
      const opt = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      await html2pdf().set(opt).from(element).save();
      
      toast.success('Resume downloaded successfully!');
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Controls sidebar */}
      <div className="w-full lg:w-64 flex-shrink-0">
        <Card className="sticky top-20 no-print">
          <div className="p-4 border-b">
            <h3 className="font-semibold mb-2">Actions</h3>
            <div className="space-y-2">
              <Button
                onClick={handleDownloadPdf}
                className="w-full"
                disabled={isGeneratingPdf}
              >
                {isGeneratingPdf ? 'Generating...' : 'Download PDF'}
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handlePrint}
              >
                Print
              </Button>
            </div>
          </div>
          
          <div className="p-4 border-b">
            <h3 className="font-semibold mb-2">Templates</h3>
            <div className="space-y-2">
              <Button
                variant={resumeData.template === 'simple' ? 'default' : 'outline'}
                size="sm"
                className="w-full justify-start"
                onClick={() => handleTemplateChange('simple')}
              >
                Simple
              </Button>
              <Button
                variant={resumeData.template === 'modern' ? 'default' : 'outline'}
                size="sm"
                className="w-full justify-start"
                onClick={() => handleTemplateChange('modern')}
              >
                Modern
              </Button>
              <Button
                variant={resumeData.template === 'professional' ? 'default' : 'outline'}
                size="sm"
                className="w-full justify-start"
                onClick={() => handleTemplateChange('professional')}
              >
                Professional
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-semibold mb-2">View Mode</h3>
            <div className="flex rounded-md overflow-hidden border">
              <button
                className={`flex-1 p-2 text-sm text-center ${
                  viewMode === 'desktop'
                    ? 'bg-resume-blue-100 text-resume-blue-700 dark:bg-resume-blue-900/30 dark:text-resume-blue-300'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setViewMode('desktop')}
              >
                Desktop
              </button>
              <button
                className={`flex-1 p-2 text-sm text-center ${
                  viewMode === 'mobile'
                    ? 'bg-resume-blue-100 text-resume-blue-700 dark:bg-resume-blue-900/30 dark:text-resume-blue-300'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setViewMode('mobile')}
              >
                Mobile
              </button>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Preview area */}
      <div className="flex-1 flex justify-center no-print-container">
        <div 
          className={`bg-gray-100 dark:bg-gray-900 rounded-lg shadow p-6 overflow-auto ${
            viewMode === 'mobile' ? 'w-[480px]' : 'w-full'
          }`}
        >
          <div ref={resumeRef} className="shadow-lg mx-auto">
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
