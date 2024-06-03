import { Button } from "@/components/ui/button";
import { getProjectData } from "@/data/project";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectDetails = async ({ params }: any) => {
  const data = await getProjectData();
  const sinleProject = data.find((item) => item.id === parseInt(params.id));
  console.log(sinleProject);
  return (
    <div className="w-full mx-auto max-w-[1040px] my-4 p-3">
      <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
        <div>
          <Image
            src={sinleProject!.image}
            alt="project image"
            width={500}
            height={100}
          />
        </div>
        <div>
          <h1 className="text-[20px] font-bold leading-7">
            {sinleProject?.title}
          </h1>
          <p className="text-justify leading-6 my-3">
            {sinleProject?.description}
          </p>
          <div>
            <h2 className="text-lg font-[700] my-3">Technoloy Used</h2>
            <ul className="space-y-2 text-left text-gray-500 dark:text-gray-400">
              {sinleProject?.technology.map((item, idx) => (
                <li key={idx} className="ps-4 flex items-center space-x-2">
                  <Check className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <h1 className="my-3 text-lg">Visite Website</h1>
          <div className="my-3 flex items-center space-x-4">
            <Button variant="customButton">
              <Link
                href={sinleProject!.liveSiteLink}
                className=""
                target="_blank"
              >
                Live Site
              </Link>
            </Button>
            <Button variant="customButton">
              <Link
                href={sinleProject!.githubLink}
                className=""
                target="_blank"
              >
                Github
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
