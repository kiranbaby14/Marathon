import { createContext, useState } from 'react';
import './App.css';
import Counter from './containers/Counter/Counter';
import Home from './containers/Home/Home';
import Footer from './containers/Footer/Footer';

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
      <Counter/>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
