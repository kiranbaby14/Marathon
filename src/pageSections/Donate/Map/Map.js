import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Pane, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';
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
  const polyLineCoordsFromJSON = [];

  DonorMapJSON.map(data => {
    polyLineCoordsFromJSON.push(data.coordinates)
  })

  const [centerCoords, setcenterCoords] = useState(polyLineCoordsFromJSON[100]);

  // useEffect(() => {
  //   const seacrh_val = document.querySelector("#search_donor_number");
  //   const seacrh_btn = document.querySelector("#search_donor_btn");
  //   seacrh_btn.addEventListener("click", () => {
  //     setcenterCoords(polyLineCoordsFromJSON[seacrh_val.value]);
  //     console.log(DonorMapJSON[seacrh_val.value].popup);
  //   })
  // }, [])


  // const customIcon = new Icon({
  //   iconUrl: mapIcon,
  //   iconSize: [30, 40]
  // })

  // const createCustomClusterIcon = (cluster) => {
  //   return new divIcon({
  //     html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
  //     className: "custom_marker_cluster",
  //     iconSize: point(33, 33, true)
  //   })
  // }

  return (
    <>
      <MapContainer center={polyLineCoordsFromJSON[834]} zoom={5} minZoom={4} className="donate_page_map_container">

        <TileLayer
          // attribution='https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
        // iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker, key) => (
            <Marker position={marker.coordinates} key={key}>
            
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}

          <Polyline positions={polyLineCoordsFromJSON} />
        </MarkerClusterGroup>
      </MapContainer>
    </>
  )
}

export default Map