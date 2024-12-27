import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import "./appbar.css";

const AppBar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

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
          <span className="text-primary ">TÜRKÇE</span>'YE GEÇ
        </p>
      </div>
    </div>
  );
};

export default AppBar;
