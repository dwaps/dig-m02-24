import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import address from "../../db/address";

const LocationSection = () => {
  const mapRef = useRef(null);

  const position = {
    latitude: 43.6041005,
    longitude: 3.9191898,
  };

  return (
    <section id="localisation">
      <div className="container" style={{ textAlign: "center" }}>
        <h1>Localisation</h1>
        <p>Nos adresses : </p>

        <MapContainer
          center={[position.latitude, position.longitude]}
          zoom={13}
          ref={mapRef}
          style={{
            height: "500px",
            width: "100%",
            margin: "0 auto",
            maxWidth: "1000px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            zIndex: "1",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {address.map((item) => {
            return (
              <Marker key={item.id} position={[item.longitude, item.latitude]}>
                <Popup>
                  <h6>{item.address}</h6>
                  <p>{item.city}</p>
                  <p>{item.country}</p>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
};

export default LocationSection;
