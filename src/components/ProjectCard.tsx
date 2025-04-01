import { IconBrandYoutube, IconCode, IconExternalLink, IconPlayerPlay } from "@tabler/icons-react";
import { ReactNode } from "react";
import Link from "next/link";

const ProjectTag = ({ children }:{children?: ReactNode}) => {
  return (
    <div className="project-card-tag">
      {children}
    </div>
  );
};

const ProjectLink = ({ children, link, newTab } : {children?: ReactNode, link: string, newTab?: true}) => {
  return (
    <Link href={link} target={newTab ? "_blank" : "_self"} className="project-card-link">
      <div className="flex justify-center">
        {children} {newTab && <IconExternalLink className="w-4 h-4" />}
      </div>
    </Link>
  );
};

const ProjectCard = ({ title, description, repoLink, demoLink, videoLink, techStack }: {title: string, description?: string | null, repoLink?: string | null, demoLink?: string | null, videoLink?: string | null, techStack?: { id?: string | null, tag?: string | null }[] | null }) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        {techStack && techStack.length > 0 && (
          <div className="project-card-tags">
            {techStack.map(tag =>
              <ProjectTag key={tag.id}>{tag.tag}</ProjectTag>
            )}
          </div>
        )}
        <p>{description}</p>
        <div className="project-card-links">
          {videoLink &&
            <ProjectLink link={videoLink} newTab>
              <IconBrandYoutube />
            </ProjectLink>
          }
          {demoLink &&
            <ProjectLink link={demoLink} newTab>
              <IconPlayerPlay />
            </ProjectLink>
          }
          {repoLink &&
            <ProjectLink link={repoLink} newTab>
              <IconCode />
            </ProjectLink>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
