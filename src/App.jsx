import React from 'react';
import { Nav } from './components/Header';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <h1 class='text-3xl font-bold underline'>Hello World</h1>
      <Nav />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
