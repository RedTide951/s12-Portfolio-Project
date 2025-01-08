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
        <div className="bg-base-200 flex flex-col justify-center px-10 py-16 gap-8">
          <div className="skills-row flex-col md:flex-row">
            <div className="flex-1 bg-base-300 p-4 rounded-lg">
              <p>
                <h3 className="text-primary subheading">
                  {text.proficiencies}
                </h3>{" "}
              </p>
              <ul className="list-disc list-inside ml-4">
                {text.skillsList.core.map((proficiency, index) => (
                  <li key={index}>{proficiency}</li>
                ))}
              </ul>
            </div>
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
