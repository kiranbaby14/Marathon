import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className='footer-content'>
                <h3>Marathon</h3>
                <p>Lorem ipsum dolar sit, amet consecutor adipadn aend j jaebd hbbbj cdabd jabd</p>
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