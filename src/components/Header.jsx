import React from 'react';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  const handleScroll = (event, id) => {
    event.preventDefault();

    // This will scroll if we're on the home page ("/")
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, navigate home first or do nothing
      window.location.href = '/#/';
    }
  };

  return (
    <section className='header' id='header'>
      <nav>
        <a href='#about' onClick={(e) => handleScroll(e, 'about')}>
          About
        </a>
        <a href='#projects' onClick={(e) => handleScroll(e, 'projects')}>
          Projects
        </a>
        <a href='#contact' onClick={(e) => handleScroll(e, 'contact')}>
          Contact
        </a>
      </nav>
    </section>
  );
};
