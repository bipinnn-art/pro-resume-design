
import ResumePreview from "@/components/Resume/ResumePreview";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI/Button";
import { useIsMobile } from "@/hooks/use-mobile";

const Preview = () => {
  const isMobile = useIsMobile();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-resume-gray-900 dark:text-white">
          Resume Preview
        </h1>
        <Link to="/builder">
          <Button variant="outline">Back to Editor</Button>
        </Link>
      </div>
      <div className="w-full overflow-x-auto">
        <ResumePreview />
      </div>
    </div>
  );
};

export default Preview;
