import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import markerImg from "../images/icon-location.svg";

export default function Map({ lat, lng }) {
  const position = [Number(lat), Number(lng)];
  const myIcon = L.icon({
    iconUrl: `${markerImg}`,
    iconSize: [32],
  });
  return (
    <>
      <MapContainer center={position} zoom={13} zoomControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={myIcon}></Marker>
      </MapContainer>
    </>
  );
}
