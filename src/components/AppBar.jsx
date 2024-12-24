// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./appbar.css";

export class AppBar extends Component {
  render() {
    return (
      <div className="app-bar">
        <div className="left-divison"></div>
        <div className="right-divison">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller theme-button"
          />
          <p>DARK MODE</p>
          <div>|</div>
          <p>
            <span className="accenture">TÜRKÇE</span>'YE GEÇ
          </p>
        </div>
      </div>
    );
  }
}

export default AppBar;
