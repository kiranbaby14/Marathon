import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import "./Header.css";

const Header = () => {

    window.addEventListener("scroll", () => {
        var header = document.querySelector("header");
        var toggle = document.querySelector(".toggle-active"); // (../Navbar/Navbar)

        header.classList.toggle("sticky", window.scrollY > 0)
        toggle.classList.toggle("sticky", window.scrollY > 0);
    })

    const {toggle} = useContext(ThemeContext);
    
    return (
        <header>
            <h2 className="logo"><a href='#'>Marathon</a></h2>
            <div className="toggle" onClick={toggle}></div>
        </header>
    )
}

export default Header