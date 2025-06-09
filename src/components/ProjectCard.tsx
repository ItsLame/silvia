import { IconBrandYoutube, IconBrush, IconCode, IconExternalLink, IconFile, IconPlayerPlay } from "@tabler/icons-react";
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
  const LinkContent = ({ children }:{children?: ReactNode}) => {
    return (
      <div className="project-card-link-content">
        {children}
      </div>
    );
  };

  return (
    <Link href={link} target={newTab ? "_blank" : "_self"} className="project-card-link">
      <div className="project-card-link-content-container">
        <LinkContent>{children}</LinkContent> {newTab && <IconExternalLink className="w-4 h-4 hide-on-mobile" />}
      </div>
    </Link>
  );
};

const ProjectCard = ({ title, description, repoLink, demoLink, videoLink, designLink, paperLink, techStack }: {title: string, description?: string | null, repoLink?: string | null, demoLink?: string | null, videoLink?: string | null, designLink?: string | null, paperLink?: string | null, techStack?: { id?: string | null, tag?: string | null }[] | null }) => {
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
              <span className="hide-on-desktop">video</span>
            </ProjectLink>
          }
          {demoLink &&
            <ProjectLink link={demoLink} newTab>
              <IconPlayerPlay />
              <span className="hide-on-desktop">demo</span>
            </ProjectLink>
          }
          {repoLink &&
            <ProjectLink link={repoLink} newTab>
              <IconCode />
              <span className="hide-on-desktop">code</span>
            </ProjectLink>
          }
          {designLink &&
            <ProjectLink link={designLink} newTab>
              <IconBrush />
              <span className="hide-on-desktop">design</span>
            </ProjectLink>
          }
          {paperLink &&
            <ProjectLink link={paperLink} newTab>
              <IconFile />
              <span className="hide-on-desktop">paper</span>
            </ProjectLink>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
