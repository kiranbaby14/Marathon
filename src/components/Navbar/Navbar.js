import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import "./Navbar.css";

const Navbar = () => {
    const { active, toggle, closeNavBar } = useContext(ThemeContext);
    useEffect(() => {
        const nav = document.getElementsByClassName("nav")[0];
        nav.addEventListener("mousewheel",  (event) => {
            event.preventDefault();
        });

        closeNavBar();
    }, [])

    return (
        <div className={`nav ${active}`}>
            <div className="toggle-close" onClick={toggle}></div>
            <ul>
                <li><Link to="/" onClick={toggle}>Home</Link></li>
                <li><Link to="/about" onClick={toggle}>About</Link></li>
                <li><Link to="/donate" onClick={toggle}>Become A Patron</Link></li>
                <li><Link to="/tracker" onClick={toggle}>Live Tracker</Link></li>
            </ul>
        </div>
    )
}

export default Navbar