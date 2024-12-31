import React, { useEffect, useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import ThemeToggleButton from "./ThemeToggleButton";

const AppBar = () => {
  const { text, switchLanguage } = useContext(LanguageContext);

  return (
    <div className="app-bar md:bg- flex flex-row justify-between py-4">
      <div className="left-divison content-center">
        <span className="name text-primary md:text-lg md:hidden">
          Oğuzhan Bütüner
        </span>
      </div>
      <div className="right-divison flex flex-row justify-end items-center gap-2 md:gap-4">
        <div className="hamburger md:hidden"></div>
        <div className="darkmode hidden md:flex justify-center items-center gap-2">
          <ThemeToggleButton />
        </div>
        <div className="">|</div>
        <div className="language hidden md:block">
          <button className="btn btn-ghost btn-xs " onClick={switchLanguage}>
            <p className="lg:text-sm md:text-sm">
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
  );
};

export default AppBar;
