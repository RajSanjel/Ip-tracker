import React from "react";
import "../css/header.css";
import { useState } from "react";
import Ipinfo from "../components/Ipinfo";
function Header() {
  const [ip, setIp] = useState("");

  return (
    <>
      <header>
        <h2>IP Address Tracker </h2>
        <form className="ip_input">
          <input
            type="text"
            placeholder="Search for any IP addresses or domain"
            value={ip}
            onChange={(e) => {
              setIp(e.target.value);
            }}
          />
          <button
            type="submit"
            value={ip}
            onClick={(e) => {
              e.preventDefault();
              console.log(e.target.value);
            }}
          />
        </form>
      </header>
      <Ipinfo ip={ip} />
    </>
  );
}

export default Header;
