import React, { useContext } from "react";
import { useAppContext } from "../contexts/AppContext";
import "./footer.css";

export const Footer = () => {
  const { language } = useAppContext();
  return (
    <footer className="footer-container bg-base-200 md:mt-2 p-4 sm:p-8 lg:p-16 xl:px-24 2xl:px-32">
      <h2 className="footer-heading text-2xl md:text-4xl">
        {language.footerHeaderLine1}
        <br />
        {language.footerHeaderLine2}
      </h2>
      <div className="contacts-container flex-col hidden md:flex md:flex-row">
        <a className="email hover:text-primary">oguzhanraifbutuner@gmail.com</a>
        <div className="links-container align-center flex flex-row gap-4">
          <a className="linkcustom hover:text-primary">
            {language.personalBlog}
          </a>
          <a className="linkcustom hover:text-primary">Github</a>
          <a className="linkcustom hover:text-primary">Linkedin</a>
        </div>
      </div>
      <div className="mobile-div flex-col md:flex-row md:hidden">
        <a className="email hover:text-primary">oguzhanraifbutuner@gmail.com</a>
        <div className="links-container align-center flex flex-row gap-4 py-4">
          <a className="linkcustom hover:text-primary">
            {language.personalBlog}
          </a>
          <a className="linkcustom hover:text-primary">Github</a>
          <a className="linkcustom hover:text-primary">Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
