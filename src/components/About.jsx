import React from 'react';

export const About = () => {
  return (
    <section className='about' id='about'>
      <h1>About Me</h1>
      <div className='about-block'>
        <img src='https://imgur.com/F0nOWhf.jpg' alt='Sabrina Ira'></img>
        <div>
          <p>
            I’m a software engineer based in NYC, with an artistic soul and a
            love for clean code. Whether I’m sketching ideas or building
            full-stack apps with JavaScript, React, and Express, I’m all about
            turning creativity into code and bringing ideas to life on the web.
          </p>
          <p>
            When I’m not coding, you’ll probably find me watching movies,
            crafting friendship bracelets, playing cozy video games, or creating
            new art!
          </p>
        </div>
        <div>
          <h4>Education & Professional Development</h4>
          <ul>
            <li>
              Silliman University, Bachelor's in Fine Arts Major in Painting,
              2019
            </li>
            <li>Codesmith, Advanced Software Engineering Residency, 2025 </li>
            <li>Queensborough Community College, 2025</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
