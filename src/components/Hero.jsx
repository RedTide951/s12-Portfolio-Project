import React, { useContext } from "react";
import "./hero.css";
import { LanguageContext } from "../contexts/LanguageContext";

const Hero = () => {
  const { text } = useContext(LanguageContext);

  return (
    <div id="hero" className="hero-container mt-8">
      <div className="flex sm:flex-col md:flex-row md:justify-between md:gap-6 lg:flex lg:gap-12 lg:flex-1">
        <div className="left-div flex-1">
          <h1
            id="hero-header"
            className="title text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {text.mainHeaderOne}
            <br className="" /> {text.mainHeaderTwo}
          </h1>
          <img
            className="rounded-lg shadow-lg md:hidden"
            src="https://media.istockphoto.com/id/1017296544/tr/foto%C4%9Fraf/test-yaz%C4%B1l%C4%B1m%C4%B1.jpg?s=1024x1024&w=is&k=20&c=ON-Ok5DbUXXI9fU7jsVbyf57ymg3newXsiexNIZ0cyY="
            alt=""
          />
          <div className="md:flex md:flex-row md:gap-12 md:py-4">
            <div className="left-div md:flex-1 md:flex md:flex-col md:justify-center md:items-center">
              <p className="description text-neutral text-md py-4 md:text-base lg:text-lg ">
                {text.heroText}
              </p>
            </div>
            <div className="right-div md:flex-1 md:flex md:justify-center md:items-center xl:hidden">
              <img
                className="rounded-lg shadow-2xl hidden md:flex"
                src="https://media.istockphoto.com/id/1017296544/tr/foto%C4%9Fraf/test-yaz%C4%B1l%C4%B1m%C4%B1.jpg?s=1024x1024&w=is&k=20&c=ON-Ok5DbUXXI9fU7jsVbyf57ymg3newXsiexNIZ0cyY="
                alt=""
              />
            </div>
          </div>
          <div className="button-container flex gap-2 md:gap-4 lg:py-4">
            <button className="btn btn-md px-2 md:px-4 lg:px-8 lg:text-lg btn-primary buttons ">
              {text.hireMe}
            </button>
            <button className="btn btn-md px-2 md:px-4 lg:px-6 lg:text-lg btn-outline buttons secondary">
              <i className="fa-brands fa-github"></i>
              Github
            </button>
            <button className="btn btn-md px-2 md:px-4 lg:px-6 lg:text-lg btn-outline buttons secondary">
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </button>
          </div>
        </div>
        <div className="right-div xl:flex-1 xl:flex xl:justify-center xl:items-center">
          <img
            className="rounded-lg shadow-2xl hidden xl:flex"
            src="https://media.istockphoto.com/id/1017296544/tr/foto%C4%9Fraf/test-yaz%C4%B1l%C4%B1m%C4%B1.jpg?s=1024x1024&w=is&k=20&c=ON-Ok5DbUXXI9fU7jsVbyf57ymg3newXsiexNIZ0cyY="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
