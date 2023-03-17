import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ScrollToTop from '../../jsScripts/ScrollToTop';
import Contestants from "../../pageSections/About/Contestants/Contestants"
import GamePlan from '../../pageSections/About/GamePlan/GamePlan';
import Info from '../../pageSections/About/Info/Info';
import LandingPage from '../../pageSections/About/LandingPage/LandingPage';
import Strategy from '../../pageSections/About/Strategy/Strategy';
import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <LandingPage />
      <GamePlan />
      <Strategy />
      <Contestants />
      <Info/>
      <Footer />
    </>
  );
}

export default About