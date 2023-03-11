import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import "./Navbar.css";

const Navbar = () => {
    const { active, toggle } = useContext(ThemeContext);
    useEffect(() => {
        const nav = document.getElementsByClassName("nav")[0];
        nav.addEventListener("mousewheel",  (event) => {
            event.preventDefault();
        });
    }, [])


    // window.addEventListener("scroll", () => {
    //     var toggle = document.querySelector(".toggle-close");
    //     toggle.classList.toggle("sticky", window.scrollY > 0);
    // })

    return (
        <div className={`nav ${active}`}>
            <div className="toggle-close" onClick={toggle}></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/donate">Become A Patron</Link></li>
                <li><Link to="/tracker">Live Tracker</Link></li>
            </ul>
        </div>
    )
}

export default Navbar