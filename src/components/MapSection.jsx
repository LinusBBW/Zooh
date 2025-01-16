import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './MapSection.css';

// Fix for missing marker icons
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Center position for Zoo Zürich
const center = [47.3853, 8.5737];

export default function MapSection() {
  return (
    <div className="map-section">
      <h2>Map</h2>
      <MapContainer center={center} zoom={16} scrollWheelZoom={false} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            <div style={{ textAlign: 'center' }}>
              <b>Zoo Zürich</b>
              <br />
              <img
                src={`${process.env.PUBLIC_URL}/assets/zooh.png`}
                alt="Zoo Zürich"
                style={{ width: '50%', height: 'auto', borderRadius: '8px', marginTop: '5px' }}
              />
              <p>Experience the wonders of wildlife.</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      <div className="map-description">
        <h3>Welcome to Zoo Zürich</h3>
        <p>
          Zoo Zürich is one of the leading zoos in Europe, offering a unique opportunity to discover
          and connect with wildlife from around the world. Located in the heart of Switzerland, the
          zoo spans over 27 hectares and features more than 380 species of animals. It is renowned
          for its innovative enclosures that replicate the natural habitats of its residents,
          providing an enriching experience for both animals and visitors alike.
        </p>

        <h3>Highlights of Zoo Zürich</h3>
        <ul>
          <li>
            <b>The Masoala Rainforest:</b> Step into a lush tropical rainforest filled with exotic
            plants, birds, and animals. This immersive exhibit offers a rare glimpse into the
            biodiversity of Madagascar.
          </li>
          <li>
            <b>The Kaeng Krachan Elephant Park:</b> Watch majestic elephants roam freely in a vast
            enclosure that mimics their natural environment.
          </li>
          <li>
            <b>The Lewa Savanna:</b> Experience the African savanna with giraffes, zebras, and
            rhinos in a sprawling outdoor habitat.
          </li>
        </ul>

        <h3>Plan Your Visit</h3>
        <p>
          Zoo Zürich is open year-round, offering something special for every season. Whether you’re
          exploring the indoor rainforest on a cold winter day or enjoying the outdoor enclosures
          under the summer sun, there’s always something to see and do. Be sure to check out the
          daily feeding schedules and special events to make the most of your visit.
        </p>

        <h3>Conservation and Education</h3>
        <p>
          Zoo Zürich is committed to wildlife conservation and education. By visiting the zoo, you
          are contributing to vital conservation projects around the world. Learn about endangered
          species, participate in interactive exhibits, and discover what you can do to help
          preserve the planet's biodiversity.
        </p>

        <h3>Visit Us Today!</h3>
        <p>
          Whether you’re visiting with family, friends, or as part of a school trip, Zoo Zürich is
          an unforgettable experience for all ages. Book your tickets online or at the entrance, and
          get ready for an adventure you won’t forget.
        </p>
      </div>
    </div>
  );
}
