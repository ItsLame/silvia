"use client";

import Link from "next/link";
import { useState } from "react";

const NavbarButton = ({ children, link = "/", newTab = false } : {children?: React.ReactNode, link?: string, newTab?: boolean}) => {
  const isCurrentPage = false;

  console.log(isCurrentPage);

  return (
    <Link className="link"
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
        <h1>silvia</h1>
        <button className="burger-menu" onClick={handleBurgerClick}>menu</button>
      </div>
      <div className={`links ${isBurgerOpened ? "active" : ""}`}>
        <NavbarButton link="/">hello</NavbarButton>
        <NavbarButton link="/projects">projects</NavbarButton>
        <NavbarButton>contact</NavbarButton>
        <NavbarButton newTab>resume</NavbarButton>
      </div>
    </nav>
  );
};

export default Navbar;
