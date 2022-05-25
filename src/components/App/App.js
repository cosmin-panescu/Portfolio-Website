import React from 'react';
import './App.scss';
import Navbar from "../Navbar/Navbar"
import Header from '../Header/Header';
import About from "../About/About"
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function App() {
  return (
    <>
      <div className="app" id='app' data-scroll-container>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
