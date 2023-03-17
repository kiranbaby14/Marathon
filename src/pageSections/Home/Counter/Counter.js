import React, { useEffect } from 'react'
import "./Counter.css"

const Counter = () => {

  const counter = () => {
    let dayBox = document.getElementById("day-box");
    let hrBox = document.getElementById("hr-box");
    let minBox = document.getElementById("min-box");
    let secBox = document.getElementById("sec-box");

    let endDate = new Date(2023, 7, 7, 10, 30);
    let endTime = endDate.getTime();

    const countdown = () => {
      let todayDate = new Date();
      let todayTime = todayDate.getTime();
      let remainingTime = endTime - todayTime;

      let oneMin = 60 * 1000;
      let oneHr = 60 * oneMin;
      let oneDay = 24 * oneHr;

      let addZeroes = num => num < 10 ? `0${num}` : num;

      if (endTime < todayTime) {
        clearInterval(i);
        document.querySelector(".countdown").innerHTML = `<h1>Live</h1>`;
      } else {
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);


        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);

      }
    }
    let i = setInterval(countdown, 1000);
    countdown();
  }


  useEffect(() => {
    counter();
  }, [])

  return (
      <section id='counter'>
        <h3 id='counter_heading'>Count Down</h3>
        <div className='countdown'>
          <div className='box'>
            <span className='counter_number' id="day-box">00</span>
            <span className='counter_text'>Days</span>
          </div>
          <div className='box'>
            <span className='counter_number' id="hr-box">00</span>
            <span className='counter_text'>Hours</span>
          </div>
          <div className='box'>
            <span className='counter_number' id="min-box">00</span>
            <span className='counter_text'>Minutes</span>
          </div>
          <div className='box'>
            <span className='counter_number' id="sec-box">00</span>
            <span className='counter_text'>Seconds</span>
          </div>
        </div>
      </section>
  )
}

export default Counter