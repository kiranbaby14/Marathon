import React, { useState } from 'react';
import video from "../../assets/running.mp4";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {

    return (
        <>
            <section className="showcase">
                <Header />
                <video src={video} muted loop autoPlay></video>
                <div className="overlay"></div>
                <div className="text">
                    <h2>Are u ready </h2>
                    <h3>To run your lungs out</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <a href="#">Donate</a>
                </div>
                <ul className="social">
                    <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt='facebook' /></a></li>
                    <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt='twitter' /></a></li>
                    <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt='instagram' /></a></li>
                </ul>

                <Navbar />
            </section>
        </>
    );
}

export default Home