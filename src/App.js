import React from 'react';
import './App.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';


function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
