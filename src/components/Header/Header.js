import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import "./Header.css";

const Header = () => {
    const {active, toggle} = useContext(ThemeContext);

    window.addEventListener("scroll", () => {
        var header = document.querySelector("header");
        var toggleClose = document.querySelector(".toggle-close"); // (../Navbar/Navbar)

        header.classList.toggle("sticky", window.scrollY > 0)
        toggleClose.classList.toggle("sticky", window.scrollY > 0);
    })
    
    return (
        <header>
            {/* <h2 className="logo"><a href='#'>Marathon</a></h2> */}
            <div className="toggle" onClick={toggle}></div>
        </header>
    )
}

export default Header