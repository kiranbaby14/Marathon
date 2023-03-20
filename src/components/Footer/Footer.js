import React from 'react';
import Tiktok from "../../assets/tiktok.png"
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className='footer-content'>
                <h3>University Ultra Run</h3>
                <p>Be A Part Of History</p>
                <ul className='footer-socials'>
                    <li ><a target="_blank" href="https://www.tiktok.com/@universityultrarun?_t=8amEsPxw6yb&_r=1"><img src={Tiktok} alt="tiktok_img"/></a></li>
                    <li ><a target="_blank" href="https://instagram.com/universityultrarun?igshid=YmMyMTA2M2Y="><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt='instagram' /></a></li>
                </ul>
            </div>
            <div className='footer-bottom'>
                <p>copyright &copy; 2023 techteam</p>
            </div>
        </footer>
    )
}

export default Footer;