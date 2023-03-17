import { useLoadScript } from '@react-google-maps/api';
import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Map from '../../pageSections/Donate/Map/Map';
import SearchDonors from '../../pageSections/Donate/SearchDonors/SearchDonors';
import Tracker from '../Tracker/Tracker';
import "./Donate.css";

const Donate = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_DONATE_PAGE_GOOGLE_MAPS_API_KEY,
    libraries: [],
  });

  if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <Header />
        <Navbar />
        <div className='donate'>
          <SearchDonors />
          <Map />
          {/* // <Tracker /> */}
        </div>

      </>
    )
  }

}

export default Donate