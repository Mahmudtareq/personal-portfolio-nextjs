import Experence from "@/components/home/Experence";
import Projectcard from "@/components/home/Projectcard";
import Services from "@/components/home/Services";
import SkillsTools from "@/components/home/SkillsTools";
import UserCard from "@/components/home/UserCard";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full mx-auto max-w-[1140px] my-4 p-3">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div>
          <UserCard />
        </div>
        <div>
          <SkillsTools />
        </div>
        <div>
          <Projectcard />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-8">
        <div className="lg:col-span-2 ">
          <Services />
        </div>
        <div className="">
          <Experence />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
