import {
  ArrowBigDown,
  ArrowDownToLine,
  ArrowRight,
  Download,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

const WorkExperience = () => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-[700]">Work Experience</h1>
        <Button variant="outline" size="icon">
          <ArrowDownToLine />
        </Button>
      </div>
      <div>
        <div className="flex flex-col justify-start space-y-1">
          <h1 className="text-lg">01 May 2023 - Now</h1>
          <h2 className="text-[16px]">Global Travel & Tours (OTA)</h2>
          <h3>Front End Developer</h3>
          <span className="text-[14px]">
            Global Travel & Tours is a US-based full-service travel agency
            specializing in worldwide travel since 2013.
          </span>
        </div>
        <Separator className="h-[1px] bg-black dark:bg-white my-3" />
        <div className="flex flex-col justify-start space-y-1">
          <h1 className="text-lg">02 Nov 2022 - 01 May 2023</h1>
          <h1>Cybersafe Station</h1>
          <h3>React Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
