import React from 'react';

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
