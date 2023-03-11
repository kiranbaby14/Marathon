import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className='footer-content'>
                <h3>University Ultra Run UK</h3>
                <p>Be A Part Of History!!</p>
                <ul className='footer-socials'>
                    <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt='facebook' /></a></li>
                    <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt='twitter' /></a></li>
                    <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt='instagram' /></a></li>
                </ul>
            </div>
            <div className='footer-bottom'>
                <p>copyright &copy; 2023 techteam</p>
            </div>
        </footer>
    )
}

export default Footer;