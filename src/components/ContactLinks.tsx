import { ReactNode } from "react";
import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

const ContactLink = ({ children, link = "" } : {children?: ReactNode, link?: string}) => {
  return (
    <Link className="contact-link" href={link} target="_blank">
      {children}
    </Link>
  );
};

const ContactLinks = () => {
  return (
    <ul className="contact-links">
      <li><ContactLink link="mailto:ms.silviatan@outlook.com"><IconMail />ms.silviatan@outlook.com</ContactLink></li>
      <li><ContactLink link="https://www.linkedin.com/in/just-silvia/"><IconBrandLinkedin />just-silvia</ContactLink></li>
      <li><ContactLink link="https://github.com/ItsLame"><IconBrandGithub />itslame</ContactLink></li>
    </ul>
  );
};

export default ContactLinks;
