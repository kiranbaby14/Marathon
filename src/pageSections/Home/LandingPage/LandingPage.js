import React from 'react';
import "./LandingPage.css";
import video from "../../../assets/running.mp4";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <section className="home_landing_page">
            <video aria-hidden="true" muted autoPlay loop playsInline className='home_video'>
                <source src={video} type="video/mp4"></source>
            </video>
            <div className="home_video_overlay"></div>
            <div className="text">
                <h2>University Ultra Run</h2>
                <p>A 1050 mile ultra marathon with sport's oldest rivalry at its core.
                </p>

                <p>
                University Ultra Run pits Britain’s oldest institutions: Oxford, Cambridge and St Andrews, against one another in the most extreme running race in British history.
                </p>
                <Link to="/donate">Become a Patron</Link>
            </div>
            {/* <ul className="social">
                    <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt='facebook' /></a></li>
                    <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt='twitter' /></a></li>
                    <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt='instagram' /></a></li>
                </ul> */}
        </section>

    )
}

export default LandingPage