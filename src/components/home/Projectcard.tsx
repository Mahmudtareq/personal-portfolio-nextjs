import { ArrowRightToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from '@/assert/landing-two-all-projects.webp'

const Projectcard = () => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <h1 className="pb-2 pt-2 text-lg text-[#34d399]">See My Latest Works</h1>
      <Image
        src={image}
        alt="products image"
        width={500}
        height={100}
        className="py-1"
      />
      <div className="flex items-center justify-between my-4 pt-2">
        <h4 className="text-[#86efac] text-lg font-bold">All Projects</h4>
        <Link href="#">
          <ArrowRightToLine />
        </Link>
      </div>
    </div>
  );
};

export default Projectcard;
