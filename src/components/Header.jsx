import React from 'react';

export const Header = () => {
  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='header' id='header'>
      <h1 className='title'>Navigation</h1>
      <div className='nav-container'>
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
      </div>
    </section>
  );
};
