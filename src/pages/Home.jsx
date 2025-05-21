import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export const Header = () => {
  return (
    <section className='header' id='header'>
      <nav>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
        {/* <a href='#'>Blog</a> */}
      </nav>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer>
      <a href='#'>Return to Top</a>
      <small>&copy; 2025 Sabrina Ira. All Rights Reserved.</small>
    </footer>
  );
};

export const Home = () => {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
