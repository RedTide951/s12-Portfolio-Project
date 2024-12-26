import React, { Component } from "react";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container bg-base-200">
        <h2 className="footer-heading">
          Let's work together on
          <br />
          your next product.
        </h2>
        <div className="contacts-container">
          <a className="email hover:text-primary">
            oguzhanraifbutuner@gmail.com
          </a>
          <div className="links-container">
            <a className="linkcustom hover:text-primary">Github</a>
            <a className="linkcustom hover:text-primary">View site</a>
            <a className="linkcustom hover:text-primary">Linkedin</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
