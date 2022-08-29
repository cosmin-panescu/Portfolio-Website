import React from 'react';
import './App.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import ScrollTop from './components/scrollTop/ScrollTop'
import CustomCursor from './components/customCursor/CustomCursor';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>

      <ScrollTop />
    </div>
  );
}

export default App;
