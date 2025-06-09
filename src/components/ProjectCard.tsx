import { IconBrandYoutube, IconBrush, IconCode, IconExternalLink, IconFile, IconPlayerPlay } from "@tabler/icons-react";
import React, { ReactNode } from "react";
import Link from "next/link";
import { IBaseChildrenProps, NullableString } from "@/models";

interface IProjectTagProps extends IBaseChildrenProps {}

interface IProjectLinkProps {
  link: string,
  linkText: string,
  icon?: ReactNode,
  newTab?: true,
  tooltipHandler?: IMouseTooltipHandler,
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

const ProjectLink = ({ link, linkText, icon, newTab, tooltipHandler }: IProjectLinkProps) => {
  const handleShowTooltip = () => {
    tooltipHandler?.updateVisibility(true);
    tooltipHandler?.updateText(`${linkText}` || "view");
  };

  const handleHideTooltip = () => {
    tooltipHandler?.updateVisibility(false);
  };

  const LinkContent = () => {
    return (
      <div className="project-card-link-content">
        {icon}
        <span className="hide-on-desktop">{linkText}</span>
      </div>
    );
  };

  return (
    <Link href={link} target={newTab ? "_blank" : "_self"} className="project-card-link"
      onMouseEnter={handleShowTooltip} onMouseLeave={handleHideTooltip}
    >
      <div className="project-card-link-content-container">
        <LinkContent /> {newTab && <IconExternalLink className="w-4 h-4 hide-on-mobile" />}
      </div>
    </Link>
  );
};


const ProjectCard = ({ title, description, repoLink, demoLink, videoLink, designLink, paperLink, techStack, tooltipHandler }: IProjectCardProps) => {
  enum LinkType {
    Video = "video",
    Demo = "demo",
    Repo = "repo",
    Design = "design",
    Paper = "paper"
  }

  interface IProjectCardLink {
    type: LinkType,
    icon: ReactNode
    newTab?: true,
    name?: string,
    url?: NullableString,
  }

  const projectCardLinks: IProjectCardLink[] = [
    { type: LinkType.Video, url: videoLink, icon: <IconBrandYoutube />, newTab: true },
    { type: LinkType.Demo, url: demoLink, icon: <IconPlayerPlay />, newTab: true },
    { type: LinkType.Repo, url: repoLink, name: "code", icon: <IconCode />, newTab: true },
    { type: LinkType.Design, url: designLink, icon: <IconBrush />, newTab: true },
    { type: LinkType.Paper, url: paperLink, icon: <IconFile />, newTab: true },
  ];

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
          {projectCardLinks.map(link =>
            link.url &&
            <ProjectLink
              key={link.url}
              link={link.url}
              linkText={link.name || link.type}
              icon={link.icon}
              tooltipHandler={tooltipHandler}
              newTab={link.newTab}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
