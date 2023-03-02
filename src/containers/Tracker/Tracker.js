import React from 'react';
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import "./Tracker.css";

const Tracker = () => {
const {isLoaded} = useLoadScript({
  googleMapsApiKey: process.env.REACT_GOOGLE_MAPS_API_KEY,
})

  return (
    <div>Tracker</div>
  )
}

export default Tracker