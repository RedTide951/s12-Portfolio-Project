import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { useAppContext } from "../contexts/AppContext";

const AppBarMobile = () => {
  const { text, switchLanguage } = useAppContext();

  return (
    <nav className="md:hidden">
      <div className="navbar sm:px-8 bg-base-100 shadow-xl">
        <div className="left-div flex-1">
          <a className="btn btn-ghost text-xl px-2 ">
            <span className="name text-primary">Oğuzhan Bütüner</span>
          </a>
        </div>
        <div className="right-div flex-none">
          <div className="ic-btns flex justify-center">
            <div className="language">
              <button className="btn btn-ghost btn-sm" onClick={switchLanguage}>
                <p className="text-md">{text.abv.toUpperCase()}</p>
              </button>
            </div>
            <div>|</div>
            <div className="darkmode md:block px-2">
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBarMobile;
