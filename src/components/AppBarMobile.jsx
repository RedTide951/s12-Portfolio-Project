import React, { useContext } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { LanguageContext } from "../contexts/LanguageContext";

const AppBarMobile = () => {
  const { text, switchLanguage } = useContext(LanguageContext);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl">
        <div className="left-div flex-1">
          <a className="btn btn-ghost text-xl px-2">
            <span className="name text-primary">Oğuzhan Bütüner</span>
          </a>
        </div>
        <div className="right-div flex-none">
          <div className="ic-btns flex justify-center">
            <div className="language">
              <button
                className="btn btn-ghost btn-sm "
                onClick={switchLanguage}
              >
                <p className="text-md">{text.abv.toUpperCase()}</p>
              </button>
            </div>
            <div>|</div>
            <div className="darkmode md:block pl-2">
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBarMobile;
