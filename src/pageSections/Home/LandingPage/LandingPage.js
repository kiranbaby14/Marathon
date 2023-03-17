import React from 'react';
import "./LandingPage.css";
import video from "../../../assets/running.mp4";

const LandingPage = () => {
    return (
        <section className="home_landing_page">
            <video aria-hidden="true" muted autoPlay loop playsInline className='home_video'>
                <source src={video} type="video/mp4"></source>
            </video>
            <div className="home_video_overlay"></div>
            <div className="text">
                <h2>University Ultra Run </h2>
                <h3>Oxford vs Cambridge vs St Andrews</h3>
                <p>A 1000 mile ultra marathon with sports oldest rivalry at its core
                    University Ultra Run UK pits Oxford and Cambrdige against one another, with a new challenger joining the party…St Andrews!!
                </p>
                <a href="#">Become a Patron</a>
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