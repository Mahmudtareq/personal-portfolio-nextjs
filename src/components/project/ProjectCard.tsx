/* eslint-disable react/no-unescaped-entities */
// import image1 from "@/assert/E-Shop_1.png";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const ProjectCard = ({ data }: any) => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/project/${data.id}`}>
        <Image
          src={data.image}
          alt="project image"
          className="rounded-t-lg py-2"
          width={500}
          height={100}
        />
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.description.slice(0, 50)}
        </p>
        <Button variant="customButton">
          <Link
            href={`/project/${data.id}`}
            className="inline-flex items-center  text-sm font-medium text-center "
          >
            Show Details
            <ArrowRight className="ms-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
