import React, { Component } from "react";
import "./hero.css";

export class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="name-container">
          <span className="line bg-primary"></span>
          <span className="name text-primary">Almila Su</span>
        </div>
        <div className="div-wrapper">
          <div className="left-div">
            <h1 className="title">
              Creative thinker
              <br /> Minimalism lover
            </h1>
            <p className="description text-neutral">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              unde accusamus quis voluptatum dolor a, dicta pariatur commodi
              suscipit ipsam odio? Ipsum, eveniet mollitia aliquam blanditiis
              fuga nostrum est numquam.
            </p>
            <div className="button-container">
              <button className="btn btn-primary buttons">Hire me</button>
              <button className="btn btn-outline buttons secondary">
                <i className="fa-brands fa-github"></i>Github
              </button>
              <button className="btn btn-outline buttons secondary">
                <i className="fa-brands fa-linkedin"></i>LinkedIn
              </button>
            </div>
          </div>
          <div className="right-div">
            <img
              className="max-w-sm rounded-lg shadow-2xl"
              src="https://st2.depositphotos.com/1054848/6896/i/950/depositphotos_68967019-stock-photo-young-woman-in-front-of.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
