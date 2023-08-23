import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const navbarStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust the alpha (opacity) value as needed
  };

  return (
    <>
      <nav className="navbar" style={navbarStyle}>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/education"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/experience"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
      </nav>
    </>
  );
}
 
export default Navbar;
