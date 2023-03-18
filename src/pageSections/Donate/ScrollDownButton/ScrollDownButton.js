import React, { useEffect } from 'react';
import DownArrow from "../../../assets/downArrow.png";
import "./ScrollDownButton.css";

const ScrollDownButton = () => {

    useEffect(()=> {
        const arrowBtn = document.getElementById("donate-arrow-btn");

        arrowBtn.addEventListener("click", ()=>{
            console.log("lop");
            window.scrollTo({
                top: 150,
                behavior: "smooth"
            })
        })
    })

  return (
    <img src={DownArrow} alt='down arrow' className='donate_down_arrow' id="donate-arrow-btn"/>
  )
}

export default ScrollDownButton