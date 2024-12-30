import React, { useContext } from "react";
import "./hero.css";
import { LanguageContext } from "../contexts/LanguageContext";

const Hero = () => {
  const { text } = useContext(LanguageContext);

  return (
    <div className="hero-container">
      <div className="name-container flex items-center">
        <span className="line bg-primary hidden md:block"></span>
        <span className="text-primary font-semibold hidden md:block md:text-xl">
          Oğuzhan Bütüner
        </span>
      </div>
      <div className="flex sm:flex-col md:flex-row md:justify-between md:gap-6">
        <div className="left-div">
          <h1 className="title text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {text.mainHeaderOne}
            <br /> {text.mainHeaderTwo}
          </h1>
          <img
            className="rounded-lg shadow-lg lg:hidden"
            src="https://st2.depositphotos.com/1054848/6896/i/950/depositphotos_68967019-stock-photo-young-woman-in-front-of.jpg"
            alt=""
          />
          <p className="description text-neutral text-md md:text-base">
            {text.heroText}
          </p>
          <div className="button-container flex sm:gap-2 md:gap-4">
            <button className="btn sm:btn-md md:btn-lg btn-primary buttons">
              {text.hireMe}
            </button>
            <button className="btn sm:btn-md md:btn-lg px-4 btn-outline buttons secondary">
              <i className="fa-brands fa-github"></i>
              Github
            </button>
            <button className="btn sm:btn-md md:btn-lg btn-outline buttons secondary">
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </button>
          </div>
        </div>
        <div className="right-div">
          <img
            className="rounded-lg shadow-2xl md:hidden"
            src="https://st2.depositphotos.com/1054848/6896/i/950/depositphotos_68967019-stock-photo-young-woman-in-front-of.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
