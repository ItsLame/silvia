import { IconBrandYoutube, IconCode, IconExternalLink, IconPlayerPlay } from "@tabler/icons-react";
import { ReactNode } from "react";
import Link from "next/link";

const ProjectTag = ({ children }:{children?: ReactNode}) => {
  return (
    <div className="flex text-xs bg-orange-900 text-orange-900 bg-opacity-15 dark:text-orange-400 dark:bg-opacity-50 py-1 px-2 w-fit rounded-lg">
      {children}
    </div>
  );
};

const ProjectLink = ({ children, link, newTab } : {children?: ReactNode, link: string, newTab?: true}) => {
  return (
    <Link href={link} target={newTab ? "_blank" : "_self"} className="py-2 px-4 min-w-[72px] bg-orange-500 bg-opacity-30 rounded-full hover:text-orange-600 dark:hover:text-orange-300">
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
          <div className="project-card-tags flex gap-2 mb-2 flex-wrap">
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
