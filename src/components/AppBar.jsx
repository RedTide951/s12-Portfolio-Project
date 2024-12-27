import React, { useEffect, useContext } from "react";
import { themeChange } from "theme-change";
import { LanguageContext } from "../contexts/LanguageContext";
import "./appbar.css";

const AppBar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const { text, switchLanguage } = useContext(LanguageContext);

  return (
    <div className="app-bar">
      <div className="left-divison"></div>
      <div className="right-divison">
        <input
          type="checkbox"
          data-toggle-theme="light,dark"
          data-act-class="ACTIVECLASS"
          className="toggle theme-controller theme-button bg-primary"
        />
        <p className="lg:text-sm md:text-sm">DARK MODE</p>
        <div>|</div>
        <p className="lg:text-sm md:text-sm">
          <span className="text-primary ">{text.languageSwitchLabel1}</span>
          {text.languageSwitchLabel2}
        </p>
      </div>
    </div>
  );
};

export default AppBar;
