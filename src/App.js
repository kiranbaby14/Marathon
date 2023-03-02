import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Donate from './containers/Donate/Donate';
import Tracker from './containers/Tracker/Tracker';

export const ThemeContext = createContext(null);

function App() {

  const [active, setActive] = useState("");

  const toggle = () => {
    console.log("akdjb");
    setActive(active === "" ? "active" : "");
  }

  return (
    <ThemeContext.Provider value={{ active, toggle }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>

      </BrowserRouter>

    </ThemeContext.Provider>
  );
}

export default App;
