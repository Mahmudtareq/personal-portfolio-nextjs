import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

const EducationDetails = () => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-[700]">Education</h1>
        <Button variant="outline" size="icon">
          <ArrowDownToLine />
        </Button>
      </div>
      <div>
        <div className="flex flex-col justify-start space-y-1">
          <h1 className="text-lg">2016 - 2020</h1>
          <h3 className="text-[16px]">
            Bachelor of Technology in Computer Science & Technology (B.Tech)
          </h3>
          <span>Lovely Professional University</span>
          <span>Punjab, India</span>
        </div>
        <Separator className="h-[1px] bg-black dark:bg-white my-3" />
        <div className="flex flex-col justify-start space-y-1">
          <h1 className="text-lg">2010 - 2014</h1>
          <h3 className="text-[16px]">Diploma in Computer Technology (CMT)</h3>
          <span>Lakshmipur Polytechnic Institute</span>
          <span>Lakshmipur, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
