import React from 'react';
import "./App.css";
import Header from './components/header/Header.js'
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Skills from './components/skills/Skills.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import Projects from './components/project/Projects.js';
import ScrollTop from './components/scrollToTop/ScrollTop';


const App = () => {
  return (
    <>
        <Header />
        <main className="main">
          <Home />
          <ScrollTop />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
    </>
  )
}

export default App