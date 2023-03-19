import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Partners from '../../components/Partners/Partners';
import Contestants from "../../pageSections/About/Contestants/Contestants"
import GamePlan from '../../pageSections/About/GamePlan/GamePlan';
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
      <Partners/>
      <Footer />
    </>
  );
}

export default About