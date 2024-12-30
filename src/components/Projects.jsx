import React, { useContext, useEffect, useState } from "react";
import "./projects.css";
import { LanguageContext } from "../contexts/LanguageContext";
import fetchSelectedRepos from "../api/githubAPI";

export const Projects = () => {
  const { text } = useContext(LanguageContext);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchSelectedRepos();
      setProjectData(data);
    };
    loadProjects();
  }, []);

  return (
    <div className="wrapper">
      <h2 className="heading">{text.projects}</h2>
      <div className="projects-container flex gap-8 py-4 flex-col md:flex-row">
        {projectData.map((project, index) => (
          <div
            className="card card-compact bg-base-100 w-96 shadow-xl"
            key={index}
          >
            <figure>
              <img
                className=""
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="project-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">{project.name}</h2>
              <p className="text-base">{project.description}</p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">Cypress</div>
                <div className="badge badge-outline">Formik</div>
              </div>
              <div className="links-container flex justify-between">
                <a className="link hover:text-primary" href={project.gitUrl}>
                  Github
                </a>
                <a className="link hover:text-primary" href={project.homepage}>
                  View site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
