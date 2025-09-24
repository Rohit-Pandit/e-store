import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <span className="click"><strong>Click</strong></span>
        <span className="mart"><strong>Mart</strong></span>
      </div>

      <div className="copyrights">
        <div className="links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
      </div>

        <div className="copy">
          © {new Date().getFullYear()} ClickMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
