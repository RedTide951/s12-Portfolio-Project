import React from "react";
import "./hero.css";
import { useAppContext } from "../contexts/AppContext";

const Hero = () => {
  const { text } = useAppContext();

  const openHireMeModal = () => {
    document.getElementById("hire_me_modal").showModal();
  };

  return (
    <section id="hero" className="hero-container mt-8">
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
            src="/pics/heropic.jpg"
            alt=""
          />
          <div className="md:flex md:flex-row md:gap-12 md:py-4">
            <div className="left-div md:flex-1 md:flex md:flex-col md:justify-center md:items-center">
              <p className="description text-neutral text-md py-4 md:text-base lg:text-lg ">
                {text.heroText.line1}
                <div className="py-1" />
                {text.heroText.line2}
                <div className="py-1" />
                {text.heroText.line3}
              </p>
            </div>
            <div className="right-div md:flex-1 md:flex md:justify-center md:items-center xl:hidden">
              <img
                className="rounded-lg shadow-2xl hidden md:flex"
                src="/pics/heropic.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="button-container flex gap-2 md:gap-4 lg:py-4">
            <button
              className="btn btn-md px-2 md:px-4 lg:px-8 lg:text-lg btn-primary buttons "
              onClick={openHireMeModal}
            >
              {text.hireMe}
            </button>
            <a
              className="btn btn-md px-2 md:px-4 lg:px-6 lg:text-lg btn-outline buttons secondary"
              href="https://github.com/RedTide951"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
              Github
            </a>
            <a
              className="btn btn-md px-2 md:px-4 lg:px-6 lg:text-lg btn-outline buttons secondary"
              href="https://www.linkedin.com/in/oguzhanbutuner/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </a>
          </div>
        </div>
        <div className="right-div xl:flex-1 xl:flex xl:justify-center xl:items-center">
          <img
            className="rounded-lg shadow-2xl hidden xl:flex"
            src="/pics/heropic.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
