import React, { useContext, useEffect, useState, require } from "react";
import "./projects.css";
import { LanguageContext } from "../contexts/LanguageContext";
// import fetchSelectedRepos from "../api/githubAPI";

export const Projects = () => {
  const { text } = useContext(LanguageContext);

  // Dont use github API for now
  /* const [projectData, setProjectData] = useState([]); */
  /* useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchSelectedRepos();
      setProjectData(data);
    };
    loadProjects();
  }, []);
 */

  return (
    <div className="wrapper">
      <h2 className="heading">{text.projects}</h2>
      <div className="projects-container py-4 pb-8 flex gap-6 flex-col sm:flex-row sm:overflow-x-auto sm:flex-nowrap sm:-mx-8 sm:px-6 sm:gap-6 sm:mb-8 lg:grid lg:grid-cols-3 lg:gap-12  lx:pb-12 ">
        {text.projectsData.map((project, index) => {
          console.log("bura", project.imageUrl);
          console.log("imgname", project.imageName);
          return (
            <div
              className="card card-compact card-effects bg-base-100 shadow-lg max-w-fit sm:max-w-72 sm:flex-shrink-0 lg:max-w-fit"
              key={index}
            >
              <figure>
                <img
                  className=""
                  src={`${project.imageUrl}`}
                  alt={project.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">{project.name}</h2>
                <p className="text-base">{project.description}</p>
                <div className="flex gap-2">
                  {project.keywords.map((keyword, keywordIndex) => (
                    <div className="badge badge-outline" key={keywordIndex}>
                      {keyword}
                    </div>
                  ))}
                </div>
                <div className="card-actions flex gap-2 justify-end content-center">
                  <a
                    className="btn btn-sm hover:text-primary"
                    target="_blank"
                    href={project.gitUrl}
                  >
                    Github
                  </a>
                  <a
                    className="btn btn-sm hover:text-primary"
                    target="_blank"
                    href={project.homepage}
                  >
                    View site
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
