import ProjectCard from "@/components/project/ProjectCard";
import { getProjectData } from "@/data/project";

import React from "react";

const ProjectPage = async () => {
  const data = await getProjectData();
  return (
    <div className="w-full mx-auto max-w-[1040px] my-4 p-3">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
        {data.map((data) => (
          <ProjectCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
