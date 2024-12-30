import React, { useContext } from "react";
import "./hero.css";
import { LanguageContext } from "../contexts/LanguageContext";

const Hero = () => {
  const { text } = useContext(LanguageContext);

  return (
    <div className="hero-container">
      <div className="name-container">
        <span className="line bg-primary hidden md:block"></span>
        <span className="name text-primary hidden md:block md:text-lg">
          Oğuzhan Bütüner
        </span>
      </div>
      <div className="div-wrapper flex-col md:flex-row">
        <div className="left-div">
          <h1 className="title text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {text.mainHeaderOne}
            <br /> {text.mainHeaderTwo}
          </h1>
          <img
            className="rounded-lg shadow-2xl md:hidden"
            src="https://st2.depositphotos.com/1054848/6896/i/950/depositphotos_68967019-stock-photo-young-woman-in-front-of.jpg"
            alt=""
          />
          <p className="description text-neutral md:text-base">
            {text.heroText}
          </p>
          <div className="button-container">
            <button className="btn btn-md btn-primary buttons">
              {text.hireMe}
            </button>
            <button className="btn btn-md btn-outline buttons secondary">
              <i className="fa-brands fa-github"></i>Github
            </button>
            <button className="btn btn-md btn-outline buttons secondary">
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </button>
          </div>
        </div>
        <div className="right-div">
          <img
            className="rounded-lg shadow-2xl hidden md:block"
            src="https://st2.depositphotos.com/1054848/6896/i/950/depositphotos_68967019-stock-photo-young-woman-in-front-of.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
