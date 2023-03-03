import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import "./Tracker.css";

const Map = () => {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map_container"
      >
      {/* 4 Markers for the 4 players. Call the tracking api here and update the geo locations */}
        <Marker position={{lat: 44, lng: -80}}/>
        <Marker position={{lat: 44, lng: -80}}/>
        <Marker position={{lat: 44, lng: -80}}/>
        <Marker position={{lat: 44, lng: -80}}/>

    </GoogleMap>
  )
}

const Tracker = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_GOOGLE_MAPS_API_KEY,
  });

  // if the api key is loaded to the scripts tag
  if (!isLoaded) {
    return <div>Loading....</div>;
  }
  // else
  return (
    <Map />
  )
}

export default Tracker