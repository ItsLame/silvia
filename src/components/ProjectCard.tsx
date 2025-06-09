import { IconBrandYoutube, IconBrush, IconCode, IconExternalLink, IconFile, IconPlayerPlay } from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
import { IBaseChildrenProps, NullableString } from "@/models";

interface IProjectTagProps extends IBaseChildrenProps {}

interface IProjectLinkProps extends IBaseChildrenProps {
  link: string,
  newTab?: true,
  tooltipHandler?: IMouseTooltipHandler
}

interface IProjectCardProps {
  title: string,
  description?: NullableString,
  repoLink?: NullableString,
  demoLink?: NullableString,
  videoLink?: NullableString,
  designLink?: NullableString,
  paperLink?: NullableString,
  techStack?: { id?: NullableString, tag?: NullableString }[] | null,
  tooltipHandler?: IMouseTooltipHandler
}

const ProjectTag = ({ children }: IProjectTagProps) => {
  return (
    <div className="project-card-tag">
      {children}
    </div>
  );
};

const ProjectLink = ({ children, link, newTab, tooltipHandler }: IProjectLinkProps) => {
  const handleShowTooltip = () => {
    tooltipHandler?.updateVisibility(true);
    tooltipHandler?.updateText(link);
  };

  const handleHideTooltip = () => {
    tooltipHandler?.updateVisibility(false);
  };

  const LinkContent = ({ children }: IBaseChildrenProps) => {
    return (
      <div className="project-card-link-content">
        {children}
      </div>
    );
  };

  return (
    <Link href={link} target={newTab ? "_blank" : "_self"} className="project-card-link"
      onMouseEnter={handleShowTooltip} onMouseLeave={handleHideTooltip}
    >
      <div className="project-card-link-content-container">
        <LinkContent>{children}</LinkContent> {newTab && <IconExternalLink className="w-4 h-4 hide-on-mobile" />}
      </div>
    </Link>
  );
};

const ProjectCard = ({ title, description, repoLink, demoLink, videoLink, designLink, paperLink, techStack, tooltipHandler }: IProjectCardProps) => {
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
            <ProjectLink link={videoLink} tooltipHandler={tooltipHandler} newTab>
              <IconBrandYoutube />
              <span className="hide-on-desktop">video</span>
            </ProjectLink>
          }
          {demoLink &&
            <ProjectLink link={demoLink} tooltipHandler={tooltipHandler} newTab>
              <IconPlayerPlay />
              <span className="hide-on-desktop">demo</span>
            </ProjectLink>
          }
          {repoLink &&
            <ProjectLink link={repoLink} tooltipHandler={tooltipHandler} newTab>
              <IconCode />
              <span className="hide-on-desktop">code</span>
            </ProjectLink>
          }
          {designLink &&
            <ProjectLink link={designLink} tooltipHandler={tooltipHandler} newTab>
              <IconBrush />
              <span className="hide-on-desktop">design</span>
            </ProjectLink>
          }
          {paperLink &&
            <ProjectLink link={paperLink} tooltipHandler={tooltipHandler} newTab>
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
