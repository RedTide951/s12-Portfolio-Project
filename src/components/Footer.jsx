import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./footer.css";
import WeatherWidget from "./WeatherWidget";

export const Footer = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div className="footer-container bg-base-200">
      <h2 className="footer-heading">
        {text.footerHeaderLine1}
        <br />
        {text.footerHeaderLine2}
      </h2>
      <div className="contacts-container hidden">
        <a className="email hover:text-primary">oguzhanraifbutuner@gmail.com</a>
        <div className="links-container align-center">
          <a className="linkcustom hover:text-primary">{text.personalBlog}</a>
          <a className="linkcustom hover:text-primary">Github</a>
          <a className="linkcustom hover:text-primary">Linkedin</a>
          <WeatherWidget />
        </div>
      </div>
    </div>
  );
};

export default Footer;
