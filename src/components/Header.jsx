import React from "react";
import "../css/header.css";
import { useState } from "react";
import Ipinfo from "../components/Ipinfo";
function Header() {
  const [ip, setIp] = useState("192.212.174.101");
  const [city, setCity] = useState("Brooklyn");
  const [lng, setLng] = useState("-73.949997");
  const [lat, setLat] = useState("40.650002");
  const [postalCode, setPostalCode] = useState("NY 10001");
  const [timezone, setTimezone] = useState("-05:00");
  const [isp, setIsp] = useState("SpaceX Starlink");

  function ValidateIPaddress(ipaddress) {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ipaddress
      ) &&
      ipaddress !== "127.0.0.1"
    ) {
      return true;
    }
  }

  const getInfos = async (ip) => {
    let res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_rimOT7ORte5XnE1dMGXWN1rL4W8xg&ipAddress=${ip}`
    );
    if (res.status === 200) {
      res = await res.json();
      return res;
    } else {
      alert("Something is wrong please contact web admin");
      return false;
    }
  };

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
            onClick={async (e) => {
              e.preventDefault();
              let isIpValid = ValidateIPaddress(ip);
              if (isIpValid) {
                let res = await getInfos(ip);
                setIp(res.ip);
                setPostalCode(res.location.postalCode);
                setTimezone(res.location.timezone);
                setIsp(res.isp);
                setLng(res.location.lng);
                setLat(res.location.lat);
                setCity(res.location.city);
              } else {
                alert("invalid ip address");
              }
            }}
          />
        </form>
      </header>
      <Ipinfo
        Newip={ValidateIPaddress(ip) ? `${ip}` : "192.212.174.101"}
        lat={lat}
        lng={lng}
        city={city}
        timezone={timezone}
        isp={isp}
        postalCode={postalCode}
      />
    </>
  );
}

export default Header;
