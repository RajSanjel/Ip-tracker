import "../css/ipinfo.css";
import Map from "../components/Map";
import "../css/map.css";
function Ipinfo({ ip, postalCode, timezone, isp, lng, lat, city }) {
  const info = {
    ip: ` ${ip}`,
    location: {
      city: `${city}`,
      lat: `${lat}`,
      lng: `${lng}`,
      postalCode: `${postalCode}`,
      timezone: `${timezone}`,
    },
    isp: `${isp}`,
  };

  return (
    <main>
      <div className="info-container">
        <p className="ip-address">
          <span className="info-heading">IP address</span> {info.ip}
        </p>
        <p className="location">
          <span className="info-heading">Location</span>{" "}
          {info.location.city + ", " + info.location.postalCode}
        </p>
        <p className="timezone">
          <span className="info-heading">Timezone</span>
          {"UTC " + info.location.timezone}
        </p>
        <p className="isp">
          <span className="info-heading">ISP</span>
          {info.isp}
        </p>
      </div>
      <div className="map">
        <Map lat={info.location.lat} lng={info.location.lng} />
      </div>
    </main>
  );
}

export default Ipinfo;
