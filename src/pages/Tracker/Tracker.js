import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import "./Tracker.css"
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

const Tracker = () => {
  return (
    <>
      <Header />
      <Navbar />
      <GoogleMap
        zoom={13}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="tracker_map_container"
      >
        {/* 4 Markers for the 4 players. Call the tracking api here and update the geo locations */}
        <Marker position={{ lat: 44, lng: -80 }} />
        <Marker position={{ lat: 44, lng: -80 }} />
        <Marker position={{ lat: 44, lng: -80 }} />
        <Marker position={{ lat: 44, lng: -80 }} />
      </GoogleMap>
    </>
  )
}

export default Tracker