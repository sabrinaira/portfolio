import React from 'react';

export const Header = () => {
  // const location = useLocation();

  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
