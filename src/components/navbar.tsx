"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { IconExternalLink } from "@tabler/icons-react";

const NavbarButton = ({ children, className = "", link = "", newTab = false } : {children?: ReactNode, className?: string, link?: string, newTab?: boolean}) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === link;

  return (
    <Link className={`menu-link ${className} ${isCurrentPage ? "active" : ""}`}
      href={link} target={newTab ? "_blank" : "_self"}>
      {children}
    </Link>
  );
};

export const DarkModeToggle = () => {
  return (
    <button className="rounded-full bg-red-800">
      <div className="px-4 py-2 rounded-full -translate-y-1 bg-red-200 text-red-600 font-semibold active:translate-y-0 transition-all active:shadow-inner active:shadow-red-800">
        toggle
      </div>
    </button>
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
        <li><NavbarButton link="/">hello</NavbarButton></li>
        <li><NavbarButton link="/projects">projects</NavbarButton></li>
        <li><NavbarButton link="/contact">contact</NavbarButton></li>
        <li><NavbarButton className="external-link" newTab
          link="https://1drv.ms/b/s!AhwQNlQ3dXFki9I_beUieojh-1Tk6w?e=OQ50iI">
            resume <IconExternalLink />
        </NavbarButton></li>
        {/*<li><DarkModeToggle /></li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;
