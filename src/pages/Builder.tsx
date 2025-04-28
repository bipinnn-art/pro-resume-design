
import ResumeBuilder from "@/components/Resume/ResumeBuilder";

const Builder = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-resume-gray-900 dark:text-white mb-8">
        Create Your Resume
      </h1>
      <ResumeBuilder />
    </div>
  );
};

export default Builder;
