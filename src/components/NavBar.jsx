import React, { useContext } from "react";
import "./navbar.css";
import { LanguageContext } from "../contexts/LanguageContext";
import WeatherWidget from "./WeatherWidget";

export const NavBar = () => {
  const { text } = useContext(LanguageContext);

  return (
    <div className="nav-bar hidden md:block">
      <div className="left-divison"></div>
      <div className="right-divison">
        <button className="btn btn-outline nav-link">{text.skills}</button>
        <button className="btn btn-outline btn-ghost nav-link">
          {text.projects}
        </button>
        <button className="btn btn-outline btn-primary nav-button">
          {text.hireMe}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
