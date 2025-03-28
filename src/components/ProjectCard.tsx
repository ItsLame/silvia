import { IconBrandYoutube, IconCode, IconExternalLink, IconPlayerPlay } from "@tabler/icons-react";
import { ReactNode } from "react";

const LinkButton = ({ children, link, external } : {children?: ReactNode, link?: string, external?: true}) => {
  return (
    <a href={link} target={external ? "_blank" : "_self"}>
      <div className="flex justify-center py-2 px-4 min-w-[72px] bg-orange-600 bg-opacity-30 rounded-full">
        {children} {external && <IconExternalLink className="w-4 h-4" />}
      </div>
    </a>
  );
};

const ProjectCard = ({ title, description, repoLink, demoLink, videoLink }: {title: string, description?: string | null, repoLink?: string | null, demoLink?: string | null, videoLink?: string | null}) => {
  return (
    <div className="project-card bg-orange-300 bg-opacity-30 py-4 px-8 rounded-2xl md:w-[calc(50%-16px)] lg:w-[calc(33.33%-16px)] h-fit">
      <h3 className="mb-0 text-orange-600">{title}</h3>
      <p>{description}</p>
      <div className="project-card-button-group flex gap-2 mt-4">
        {videoLink &&
        <LinkButton link={videoLink}>
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
  );
};

export default ProjectCard;
