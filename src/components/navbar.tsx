"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavbarButton = ({ children, link = "", newTab = false } : {children?: React.ReactNode, link?: string, newTab?: boolean}) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === link;

  return (
    <Link className={`link ${isCurrentPage ? "active" : ""}`}
      href={link} target={newTab ? "_blank" : "_self"}
    >
      {children}
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
        <button className="burger-menu" onClick={handleBurgerClick}>menu</button>
      </div>
      <div className={`links ${isBurgerOpened ? "opened" : ""}`}>
        <NavbarButton link="/">hello</NavbarButton>
        <NavbarButton link="/projects">projects</NavbarButton>
        <NavbarButton link="/contact">contact</NavbarButton>
        <NavbarButton link="https://1drv.ms/b/s!AhwQNlQ3dXFki9I_beUieojh-1Tk6w?e=OQ50iI" newTab>resume</NavbarButton>
      </div>
    </nav>
  );
};

export default Navbar;
