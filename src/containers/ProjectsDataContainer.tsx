import React from "react";
import { ReactComponent as Illustration } from "../assets/project.svg";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";

import { ProjectCardProps } from "../types/types";

interface props {
  header: string;
  data: ProjectCardProps[];
  id: string;
}

const ProjectsContainer = ({ header, data, id }: props) => {
  return (
    <div className="flex flex-col w-full my-6">
      <Heading
        heading={header}
        id={id}
        illustration={<Illustration className="max-h-48" />}
      />
      <div className="grid gap-6 mt-5 lg:grid-cols-3 justify-items-center md:grid-cols-1 auto-rows-fr">
        {data.map(
          ({
            id,
            projectName,
            projectDescription,
            projectImageLogo,
            tech,
            link,
            buttonText,
          }) => (
            <ProjectCard
              id={id}
              key={id}
              projectDescription={projectDescription}
              projectImageLogo={projectImageLogo}
              projectName={projectName}
              tech={tech}
              link={link}
              buttonText={buttonText}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectsContainer;
