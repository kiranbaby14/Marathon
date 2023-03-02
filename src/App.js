import { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';

export const ThemeContext = createContext(null);

function App() {

  const [active, setActive] = useState("");

  const toggle = () => {
    setActive(active === "" ? "active" : "");
  }

  return (
    <ThemeContext.Provider value={{ active, toggle }}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
