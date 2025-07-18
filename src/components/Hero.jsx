import React from 'react';

export const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='hero-title-container'>
        <h1 className='hero-title'>Hi! My name is Sabrina.</h1>
      </div>
      <div className='hero-window'>
        <h2 className='title'>Welcome</h2>
        <div className='hero-text'>
          <p>
            I’m a software developer based in NYC with a creative background and
            a passion for technology. I enjoy solving technical challenges and
            building user-friendly applications with tools like JavaScript,
            React, and Node.js/Express.
          </p>
          <p>
            I thrive in collaborative environments and enjoy supporting my
            teammates to achieve shared goals. My focus is on making technology
            more accessible, efficient, and intuitive for everyone. I’m always eager to learn new tools, explore new technologies, and contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};
