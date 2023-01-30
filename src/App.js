import { useState } from 'react';
import './App.css';
import video from "./assets/running.mp4"

function App() {

  const [active, setActive] = useState("");

  const toggle = () => {
    active === "" ? setActive("active") : setActive("");
  }

  return (
    <>
        <section className="showcase">
          <header>
            <h2 className="logo">Marathon</h2>
            <div className={`toggle ${active}`} onClick={toggle}></div>
          </header>
          <video src={video} muted loop autoPlay></video>
          <div className="overlay"></div>
          <div className="text">
            <h2>Are u ready </h2>
            <h3>To run your lungs out</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.</p>
            <a href="#">Donate</a>
          </div>
          <ul className="social">
            <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt='facebook' /></a></li>
            <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt='twitter' /></a></li>
            <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt='instagram' /></a></li>
          </ul>

          <div className={`menu ${active}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Live Tracker</a></li>
          </ul>
        </div>
        </section>

    </>
  );
}

export default App;
