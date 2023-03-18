import { useLoadScript } from '@react-google-maps/api';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import FAQ from '../../pageSections/Donate/FAQ/FAQ';
import Info from '../../pageSections/Donate/Info/Info';
import Map from '../../pageSections/Donate/Map/Map';
import ScrollDownButton from '../../pageSections/Donate/ScrollDownButton/ScrollDownButton';
import SearchDonors from '../../pageSections/Donate/SearchDonors/SearchDonors';
import "./Donate.css";

const Donate = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='donate'>
        <ScrollDownButton />
        <SearchDonors />
        <Map />
      </div>
      <Info />
      <FAQ />
      <Footer />
    </>
  )
}

export default Donate