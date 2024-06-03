import Image from "next/image";
import React from "react";
import service1 from "@/assert/service-1.webp";
import service2 from "@/assert/service-2.webp";
import service3 from "@/assert/service-4.webp";

const ServiceOfferCard = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 my-3">
      <div className="flex flex-col justify-center items-center space-y-2 dark:bg-slate-700 bg-slate-200 p-4 rounded-md shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
        <Image src={service3} alt="image" />
        <p className="text-[14px] dark:text-white text-black">
          Web Development
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 dark:bg-slate-700 bg-slate-200 p-4 rounded-md shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
        <Image src={service1} alt="image" />
        <p className="text-[14px] dark:text-white text-black">UI/UX Design</p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 dark:bg-slate-700 bg-slate-200 p-4 rounded-md shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
        <Image src={service2} alt="image" />
        <p className="text-[14px] dark:text-white text-black">
          Digital Marketing
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 dark:bg-slate-700 bg-slate-200 p-4 rounded-md shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
        <Image src={service1} alt="image" />
        <p className="text-[14px] dark:text-white text-black">Website Testing</p>
      </div>
    </div>
  );
};

export default ServiceOfferCard;
