import React from "react";
import { useAppContext } from "../contexts/AppContext";
import "./skills.css";

// this is a line

export const Skills = () => {
  const { text } = useAppContext();
  return (
    <section id="skills" className="skills-container py-2 md:py-8">
      <h2 className="heading">{text.skills}</h2>
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input">{text.mockupWebsiteUrl}</div>
        </div>
        <div className="bg-base-200 flex justify-center px-10 py-16">
          <div className="skills-row flex-col md:flex-row">
            <div className="flex-1">
              <h3 className="subheading text-primary">JavaScript</h3>
              <p>{text.skillDescriptions.js}</p>
            </div>
            <div className="flex-1">
              <h3 className="subheading text-primary">React</h3>
              <p>{text.skillDescriptions.react}</p>
            </div>
            <div className="flex-1">
              <h3 className="subheading text-primary">Java</h3>
              <p>{text.skillDescriptions.java}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
