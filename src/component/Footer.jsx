import React from "react";
import "../css/style.css";

function Footer() {
  return (
    <div className="bg-dark fixed-bottom footerClass">
      <a className="text-capitalize text-white custom-link" href="https://www.google.com/">
        Site made with React
      </a>
    </div>
  );
}

export default Footer;
