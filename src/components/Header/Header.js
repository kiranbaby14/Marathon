import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import "./Header.css";

const Header = () => {

    window.addEventListener("scroll", () => {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0)
    })

    const {toggle} = useContext(ThemeContext);
    
    return (
        <header>
            <h2 className="logo">Marathon</h2>
            <div className="toggle" onClick={toggle}></div>
        </header>
    )
}

export default Header