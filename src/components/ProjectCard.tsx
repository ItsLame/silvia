import { IconBrandYoutube, IconCode, IconExternalLink, IconPlayerPlay } from "@tabler/icons-react";
import { ReactNode } from "react";

const LinkButton = ({ children, link, external } : {children?: ReactNode, link?: string, external?: true}) => {
  return (
    <a href={link} target={external ? "_blank" : "_self"} className="py-2 px-4 min-w-[72px] bg-orange-500 bg-opacity-30 rounded-full hover:text-orange-600">
      <div className="flex justify-center">
        {children} {external && <IconExternalLink className="w-4 h-4" />}
      </div>
    </a>
  );
};

const ProjectCard = ({ title, description, repoLink, demoLink, videoLink }: {title: string, description?: string | null, repoLink?: string | null, demoLink?: string | null, videoLink?: string | null}) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p>{description}</p>
        <div className="project-card-links">
          {videoLink &&
            <LinkButton link={videoLink} external>
              <IconBrandYoutube />
            </LinkButton>
          }
          {demoLink &&
            <LinkButton link={demoLink} external>
              <IconPlayerPlay />
            </LinkButton>
          }
          {repoLink &&
            <LinkButton link={repoLink} external>
              <IconCode />
            </LinkButton>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
