import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const navbarStyle = {
    backgroundColor: "#111", // Adjust the alpha (opacity) value as needed
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center pt-4">
        <nav className="navbar w-50  d-flex justify-content-around px-0 position-fixed mt-5" style={navbarStyle}>
          <div className={click ? "nav-menu active gap-2" : "nav-menu gap-2"}>
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
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
