// react
import React, { useContext } from 'react';
// components
import './App.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import ScrollTop from './components/scrollTop/ScrollTop'
import Projects from './components/projects/Projects';
import Resources from './components/resources/Resources';
// SEO
import { Helmet } from "react-helmet";
// custom cursor
import { motion } from 'framer-motion';
import { CursorContext } from './utils/CursorContext';

function App() {
  // get cursor context data
  const { cursorVariants, cursorBackground } = useContext(CursorContext);

  return (
    <div className="app">
      {/* SEO */}
      <Helmet>
        <title>Cosmin Panescu</title>
        <meta
          name='description'
          content="I am a FrontEnd Developer based in Romania, who lately has also focused on Digital Marketing. So, I don't just develop websites for you, I also bring them to the top of searches."
        />
      </Helmet>

      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resources />
        <Contact />
        <Footer />
      </main>

      <ScrollTop />

      {/* Custom cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBackground}
        className="cursor"
      />
    </div>
  );
}

export default App;
