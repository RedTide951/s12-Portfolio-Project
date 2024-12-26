import React, { Component } from "react";
import "./projects.css";

export class Projects extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2 className="heading">Projects</h2>
        <div className="projects-container">
          <div className="card bg-base-100 w-96 shadow-xl ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body card-custom-body">
              <h2 className="card-title text-primary">
                Teknolojik Yemekler
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                natus dicta est.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">Cypress</div>
                <div className="badge badge-outline">Formik</div>
              </div>
              <div className="links-container">
                <a className="link hover:text-primary">Github</a>
                <a className="link hover:text-primary">View site</a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">
                Teknolojik Yemekler
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                natus dicta est.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">Cypress</div>
                <div className="badge badge-outline">Formik</div>
              </div>
              <div className="links-container">
                <a className="link hover:text-primary">Github</a>
                <a className="link hover:text-primary">View site</a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">
                Teknolojik Yemekler
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                natus dicta est.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">Cypress</div>
                <div className="badge badge-outline">Formik</div>
              </div>
              <div className="links-container">
                <a className="link hover:text-primary">Github</a>
                <a className="link hover:text-primary">View site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
