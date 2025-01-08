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
        <div className="bg-base-200 flex flex-col justify-center px-14 py-10 gap-6">
          <div className="skills-row flex-col md:flex-row">
            <div className="flex-1 bg-base-300 p-4 rounded-lg max-h-96 overflow-y-auto">
              <p>
                <h3 className="text-primary subheading">JavaScript</h3>{" "}
              </p>
              <p>{text.skillDescriptions.js}</p>
              <br />
              <p>
                <h3 className="text-primary subheading">React.JS</h3>{" "}
              </p>
              <p>{text.skillDescriptions.react}</p>
              <br />
              <p>
                <h3 className="text-primary subheading">Java</h3>{" "}
              </p>
              <p>{text.skillDescriptions.java}</p>
            </div>
            <div className="flex-1 bg-base-200 p-4 rounded-lg">
              <p>
                <h3 className="text-primary subheading">{text.coreSkills}</h3>{" "}
              </p>
              <ul className="list-disc list-inside ml-4">
                {text.skillsList.core.map((proficiency, index) => (
                  <li key={index} className="text-lg">
                    {proficiency}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-base-200 p-4 rounded-lg">
              <p>
                <h3 className="text-primary subheading">
                  {text.proficiencies}
                </h3>{" "}
              </p>
              <ul className="list-disc list-inside ml-4 ">
                {text.skillsList.proficiencies.map((proficiency, index) => (
                  <li key={index} className="text-lg">
                    {proficiency}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-base-200 p-4 rounded-lg">
              <p>
                <h3 className="text-primary subheading">{text.additional}</h3>{" "}
              </p>
              <ul className="list-disc list-inside ml-4">
                {text.skillsList.additional.map((proficiency, index) => (
                  <li key={index} className="text-lg">
                    {proficiency}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
