import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const Footer = () => {
  return (
    <footer>
      <a className='footer-button' href='#'>
        Return to Top
      </a>

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
