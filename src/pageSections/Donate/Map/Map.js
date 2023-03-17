import React from 'react';
import { MapContainer, Marker, Pane, Polyline, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import mapIcon from "../../../assets/mapIcon.png"
import { divIcon, Icon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import "./Map.css";
import DonorMapJSON from "../../../json/DonorMap.json";

const Map = () => {
  const markers = DonorMapJSON;
  const polyLineDataFromJSON = [];

  DonorMapJSON.map(data => {
    polyLineDataFromJSON.push(data.coordinates)
  })

  const customIcon = new Icon({
    iconUrl: mapIcon,
    iconSize: [30, 40]
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom_marker_cluster",
      iconSize: point(33, 33, true)
    })
  }

  return (
    <>
      
      <MapContainer center={[50.066085, -5.715014]} zoom={6} minZoom={7} className="donate_page_map_container">

        <TileLayer
          // attribution='https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
        // iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker) => (
            <Marker position={marker.coordinates} >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
          <Polyline positions={polyLineDataFromJSON} />
        </MarkerClusterGroup>
      </MapContainer>
    </>
  )
}

export default Map