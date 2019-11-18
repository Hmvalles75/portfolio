import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

const menu = props => {
  let menuClasses = ["menu-close"];
  if (props.show) {
    menuClasses = ["menu-open"];
  }

  return (
    <nav className={menuClasses}>
      <div className="menu-branding">
        <div className="portrait"></div>
      </div>
      <ul className="menu-nav">
        <li className="nav-item current">
          <Link to="/" onClick={props.menuClickHandler} className="nav-link">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            onClick={props.menuClickHandler}
            className="nav-link"
          >
            ABOUT ME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/projects"
            onClick={props.menuClickHandler}
            className="nav-link"
          >
            PROJECTS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            onClick={props.menuClickHandler}
            className="nav-link"
          >
            CONTACT ME
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default menu;
