import React from "react";
import arrowImg from "../images/icon-arrow.svg";
import "../css/header.css";

function Header() {
  return (
    <header>
      <h2>IP Address Tracker </h2>
      <div className="ip_input">
        <input type="text" />
        <img src={arrowImg} alt="error" />
      </div>
    </header>
  );
}

export default Header;
