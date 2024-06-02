import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ServiceOfferCard from "./ServiceOfferCard";

const Services = () => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-[22px] font-bold">Services I Offered</h1>
        <Link
          href="/services"
          className="flex items-center gap-1 hover:underline text-[#22c55e]"
        >
          See All Services{" "}
          <span>
            <ArrowRight />
          </span>
        </Link>
      </div>
      <div>
        <ServiceOfferCard />
      </div>
    </div>
  );
};

export default Services;
