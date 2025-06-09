"use client";

import MouseTooltip from "@/components/MouseTooltip";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { PaginatedDocs } from "payload";

const ProjectCards = ({ projects }: { projects: PaginatedDocs }) => {
  const [tooltipText, setTooltipText] = useState("i like kway teow");
  const [isTooltipShow, setTooltipShow] = useState(false);

  const tooltipHandler: MouseTooltipHandler = {
    updateText: (text: string) => setTooltipText(text),
    updateVisibility: (show: boolean) => setTooltipShow(show),
  };

  return (
    <>
      <div className="projects-container">
        {projects.docs.length > 0
          ? projects.docs.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.content.title}
              description={project.content.description}
              repoLink={project.content.repoLink}
              demoLink={project.content.demoLink}
              videoLink={project.content.videoLink}
              designLink={project.content.designLink}
              paperLink={project.content.paperLink}
              techStack={project.metadata.tags}
              tooltipHandler={tooltipHandler}
            />
          ))
          : <p>no projects found...</p>
        }
      </div>
      <MouseTooltip show={isTooltipShow}>{tooltipText}</MouseTooltip>
    </>
  );
};

export default ProjectCards;
