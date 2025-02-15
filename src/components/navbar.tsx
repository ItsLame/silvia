const NavbarButton = ({ children } : {children?: React.ReactNode}) => {
  return (
    <button className="link">
      {children}
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>silvia</h1>
      <div className="links">
        <NavbarButton>projects</NavbarButton>
        <NavbarButton>contact</NavbarButton>
        <NavbarButton>resume</NavbarButton>
      </div>
    </nav>
  );
};

export default Navbar;
