import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Donate from './pages/Donate/Donate';
import Tracker from './pages/Tracker/Tracker';
import ScrollToTop from './jsScripts/ScrollToTop';

export const ThemeContext = createContext(null);

function App() {

  const [active, setActive] = useState("");

  const toggle = () => {
    setActive(active === "" ? "active" : "");
  }

  const closeNavBar = () => {
    setActive("")
  }

  return (
    <ThemeContext.Provider value={{ active, toggle, closeNavBar }}>
      <BrowserRouter>
        <ScrollToTop/>
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
