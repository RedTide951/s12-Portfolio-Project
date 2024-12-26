import React, { Component } from "react";
import "./navbar.css";

export class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="left-divison"></div>
        <div className="right-divison">
          <button className="btn btn-outline nav-link">Skills</button>
          <button className="btn btn-outline btn-ghost nav-link">
            Projects
          </button>
          <button className="btn btn-outline btn-primary nav-button">
            Hire me
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
