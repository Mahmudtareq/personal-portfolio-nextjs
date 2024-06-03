import DetailsAbout from "@/components/about/DetailsAbout";
import EducationDetails from "@/components/about/EducationDetails";
import WorkExperience from "@/components/about/WorkExperience";
import SkillsTools from "@/components/home/SkillsTools";
import UserCard from "@/components/home/UserCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="w-full mx-auto max-w-[1140px] my-4 p-3">
      <Button variant="customButton" className="mb-3">
        <Link href="/" className="flex items-center gap-2 text-white font-bold">
          <ArrowLeft className="h-8 text-blue-600" /> Back To Home
        </Link>
      </Button>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-8">
        <div className="lg:col-span-2 space-y-4">
          <DetailsAbout />
          <WorkExperience />
          <EducationDetails />
        </div>
        <div className="space-y-4">
          <UserCard />
          <SkillsTools />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
