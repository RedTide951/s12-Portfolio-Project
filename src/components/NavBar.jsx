import React from "react";
import "./navbar.css";
import { useAppContext } from "../contexts/AppContext";
import ThemeToggleButton from "./ThemeToggleButton";

export const NavBar = () => {
  const { text, switchLanguage } = useAppContext();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className="nav-bar hidden flex-row justify-between content-center md:flex md:py-2 px-4 sm:px-8 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-base-100 shadow-xl"
    >
      <div className="left-divison font-semibold flex gap-6">
        <div>
          <span className="text-primary md:text-xl xl:text-3xl ">
            Oğuzhan Bütüner
          </span>
          <div className="name-container flex items-center justify-end">
            <span className="line bg-primary block"></span>
            <span className="text-primary font-semibold block lg:text-sm mr-4">
              {text.title}
            </span>
          </div>
        </div>
        <div className="right-divison flex flex-row justify-end items-center gap-2">
          <div className="language hidden lg:block">
            <button className="btn btn-ghost btn-xs " onClick={switchLanguage}>
              <p>
                <span className={text.abv !== "tr" ? "text-primary" : ""}>
                  {text.languageSwitchLabel1.toUpperCase()}
                </span>
                <span className={text.abv === "tr" ? "text-primary" : ""}>
                  {text.languageSwitchLabel2.toUpperCase()}
                </span>
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="right-divison flex flex-row justify-end items-center gap-2">
        <div className="language compact block lg:hidden">
          <button className="btn btn-contained " onClick={switchLanguage}>
            <span className="text-primary">
              {text.abv !== "en" ? "EN" : "TR"}
            </span>
          </button>
        </div>
        <div className="darkmode flex px-2">
          <ThemeToggleButton />
        </div>
        <button
          className="btn btn-ghost lg:px-6  border-0 lg:text-lg shadow-none"
          onClick={() => scrollToSection("root")}
        >
          {text.home}
        </button>
        <button
          className="btn btn-ghost lg:px-6  border-0 lg:text-lg shadow-none"
          onClick={() => scrollToSection("skills")}
        >
          {text.skills}
        </button>
        <button
          className="btn btn-ghost lg:px-6  border-0 lg:text-lg shadow-none"
          onClick={() => scrollToSection("projects")}
        >
          {text.projects}
        </button>
        <button className="btn btn-primary lg:px-6 lg:text-lg shadow-none">
          {text.hireMe}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
