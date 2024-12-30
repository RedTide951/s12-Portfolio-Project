import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./footer.css";
import WeatherWidget from "./WeatherWidget";

export const Footer = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div className="footer-container bg-base-200">
      <h2 className="footer-heading text-2xl md:text-6xl">
        {text.footerHeaderLine1}
        <br />
        {text.footerHeaderLine2}
      </h2>
      <div className="contacts-container flex-col hidden md:flex md:flex-row">
        <a className="email hover:text-primary">oguzhanraifbutuner@gmail.com</a>
        <div className="links-container align-center flex flex-row gap-4">
          <a className="linkcustom hover:text-primary">{text.personalBlog}</a>
          <a className="linkcustom hover:text-primary">Github</a>
          <a className="linkcustom hover:text-primary">Linkedin</a>
        </div>
      </div>
      <div className="mobile-div flex-col md:flex-row md:hidden">
        <a className="email hover:text-primary">oguzhanraifbutuner@gmail.com</a>
        <div className="links-container align-center flex flex-row gap-4 py-4">
          <a className="linkcustom hover:text-primary">{text.personalBlog}</a>
          <a className="linkcustom hover:text-primary">Github</a>
          <a className="linkcustom hover:text-primary">Linkedin</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
