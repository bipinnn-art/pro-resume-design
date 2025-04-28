
import ResumeBuilder from "@/components/Resume/ResumeBuilder";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI/Button";

const Builder = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-resume-gray-900 dark:text-white">
          Create Your Resume
        </h1>
        <Link to="/preview">
          <Button variant="outline">Preview</Button>
        </Link>
      </div>
      <ResumeBuilder />
    </div>
  );
};

export default Builder;
