"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { IconExternalLink } from "@tabler/icons-react";

const NavbarLink = ({ children, className = "", link = "", newTab } : {children?: ReactNode, className?: string, link?: string, newTab?: true}) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === link;

  return (
    <Link className={`menu-link ${className} ${isCurrentPage ? "active" : ""}`}
      href={link} target={newTab ? "_blank" : "_self"}>
      {children} {newTab && <IconExternalLink className="w-4 h-4" />}
    </Link>
  );
};

const Navbar = () => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpened(!isBurgerOpened);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>{"silvia's"}</h1>
        <button className={`burger-menu ${isBurgerOpened ? "opened" : ""}`} onClick={handleBurgerClick}>menu</button>
      </div>
      <ul className={`menu-links ${isBurgerOpened ? "opened" : ""}`}>
        <li><NavbarLink link="/">hello</NavbarLink></li>
        <li><NavbarLink className="projects-nav-link" link="/projects">projects</NavbarLink></li>
        {/*<li><NavbarButton link="/blogs">blogs</NavbarButton></li>*/}
        <li><NavbarLink link="/contact">contact</NavbarLink></li>
        {/* <li><NavbarLink newTab link="/silvia-resume.pdf">resume</NavbarLink></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
