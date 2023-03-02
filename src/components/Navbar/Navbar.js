import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../App';
import "./Navbar.css";

const Navbar = () => {
    const { active, toggle } = useContext(ThemeContext);
    useEffect(() => {
        const nav = document.getElementsByClassName("nav")[0];
        console.log(nav);
        nav.addEventListener("mousewheel", function (event) {
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
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Donate</a></li>
                <li><a href="#">Live Tracker</a></li>
            </ul>
        </div>
    )
}

export default Navbar