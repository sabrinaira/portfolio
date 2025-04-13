import { React, useState } from 'react';

export const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section className='about' id='about'>
      <h1 className='title'>About Me</h1>
      <div className='about-block'>
        <img src='https://imgur.com/F0nOWhf.jpg' alt='Sabrina Ira'></img>
        <div className='about-text'>
          <div className='tab'>
            <button
              className={activeTab === 'bio' ? 'active' : ''}
              onClick={() => setActiveTab('bio')}
            >
              Bio
            </button>
            <button
              className={activeTab === 'education' ? 'active' : ''}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button
              className={activeTab === 'skills' ? 'active' : ''}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
          </div>
          <div className='tab-content'>
            {activeTab === 'bio' && (
              <div className='bio'>
                <p>
                  I’m a software engineer based in NYC, with an artistic soul
                  and a love for clean code. Whether I’m sketching ideas or
                  building full-stack apps with JavaScript, React, and Express,
                  I’m all about turning creativity into code and bringing ideas
                  to life on the web.
                </p>
                <p>
                  When I’m not coding, you’ll probably find me watching movies,
                  crafting friendship bracelets, playing cozy video games, or
                  creating new art!
                </p>
              </div>
            )}
            {activeTab === 'education' && (
              <div className='education'>
                <h4>Education & Professional Development</h4>
                <ul>
                  <li>
                    Silliman University, Bachelor's in Fine Arts Major in
                    Painting, 2019
                  </li>
                  <li>
                    Codesmith, Advanced Software Engineering Residency, 2025
                  </li>
                  <li>Queensborough Community College, 2025</li>
                </ul>
              </div>
            )}
            {activeTab === 'skills' && (
              <div className='skills'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corporis ratione cupiditate, recusandae porro esse ut ad voluptatibus numquam odio, inventore voluptas, soluta dolores est repellat repellendus vitae expedita autem?
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
