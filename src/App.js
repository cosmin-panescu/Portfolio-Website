import React, { useEffect, useState } from 'react';
import './App.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import ScrollTop from './components/scrollTop/ScrollTop'
import CustomCursor from './components/customCursor/CustomCursor';
import Projects from './components/projects/Projects';
import Resources from './components/resources/Resources';
import { Helmet } from "react-helmet";

function App() {
  const [pageLoad, setPageLoad] = useState(false);

  // page load transition
  useEffect(() => {
    setTimeout(() => {
      setPageLoad(true);
    }, 1000)
  }, []);

  return (
    <div className="app">
      {/* SEO */}
      <Helmet>
        <title>Cosmin Panescu</title>
        <meta
          name='description'
          content="I am a FrontEnd Developer based in Romania. I like to build things for the web and I build projects to learn how code works."
        />
      </Helmet>

      {/* Custom Cursor */}
      <CustomCursor />
      {/* NavBar */}
      <Header />
      {/* Website Content */}
      <main className={pageLoad ? 'main transition' : 'main'}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resources />
        <Contact />
        <Footer />
      </main>

      {/* Scroll to top button */}
      <ScrollTop />
    </div>
  );
}

export default App;
