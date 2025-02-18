import { ReactNode } from "react";
import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export const ContactButton = ({ children, link = "" } : {children?: ReactNode, link?: string}) => {
  return (
    <Link className="contact-link" href={link} target="_blank">
      {children}
    </Link>
  );
};

export const ContactLinks = () => {
  return (
    <ul className="contact-links">
      <li><ContactButton link="mailto:ms.silviatan@gmail.com"><IconMail />ms.silviatan@gmail.com</ContactButton></li>
      <li><ContactButton link="https://www.linkedin.com/in/just-silvia/"><IconBrandLinkedin />just-silvia</ContactButton></li>
      <li><ContactButton link="https://github.com/ItsLame"><IconBrandGithub />itslame</ContactButton></li>
    </ul>
  );
};
