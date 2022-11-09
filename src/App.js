import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import ProductList from './Components/ProductList/ProductList';
import Skills from './Components/Skills/Skills';
import Toggle from './Components/Toggle/Toggle';
import React, {useContext} from 'react';
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Skills/>
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;  
