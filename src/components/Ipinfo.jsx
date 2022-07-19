import "../css/ipinfo.css";
import Map from "../components/Map";
import "../css/map.css";
function Ipinfo() {
  const info = {
    ip: "0.0.0.0",
    location: {
      country: "US",
      region: "California",
      city: "Mountain View",
      lat: 37.38605,
      lng: -122.08385,
      postalCode: "94035",
      timezone: "-07:00",
      geonameId: 5375480,
    },
    domains: [
      "21vek-api-445.21vek-dev.by",
      "m.21vek-445.21vek-dev.by",
      "www.21vek-448.21vek-dev.by",
      "www.sxwrzwq.com",
      "www.taishanbaihe.vip",
    ],
    as: {
      asn: 15169,
      name: "GOOGLE",
      route: "8.8.8.0/24",
      domain: "https://about.google/intl/en/",
      type: "Content",
    },
    isp: "Google LLC",
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
