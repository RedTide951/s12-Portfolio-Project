import React, { Component } from "react";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <h2 className="footer-heading">
          Let's work together on
          <br />
          your next product.
        </h2>
        <div className="contacts-container">
          <a className="email">oguzhanraifbutuner@gmail.com</a>
          <div className="links-container">
            <a className="link">Github</a>
            <a className="link">View site</a>
            <a className="link">Linkedin</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
