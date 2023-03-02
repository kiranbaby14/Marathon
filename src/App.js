import { createContext, useState } from 'react';
import './App.css';
import Home from './containers/Home/Home';

export const ThemeContext = createContext(null);

function App() {

  const [active, setActive] = useState("");

  const toggle = () => {
    console.log("akdjb");
    setActive(active === "" ? "active" : "");
  }

  return (
    <ThemeContext.Provider value={{ active, toggle }}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
