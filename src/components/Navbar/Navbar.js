import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import "./Navbar.css";

const Navbar = () => {
    const {active, toggle} = useContext(ThemeContext);

    // window.addEventListener("scroll", () => {
    //     var toggle = document.querySelector(".toggle-active");
    //     toggle.classList.toggle("sticky", window.scrollY > 0);
    // })

    return (
        <div className={`nav ${active}`}>
            <div className="toggle-active" onClick={toggle}></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Donate</a></li>
                <li><a href="#">Live Tracker</a></li>
            </ul>
        </div>
    )
}

export default Navbar