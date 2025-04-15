import { React, useState } from 'react';

export const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section className='about' id='about'>
      <h1 className='title'>About Me</h1>
      <div className='about-block'>
        <img src='https://imgur.com/F0nOWhf.jpg' alt='Sabrina Ira'></img>
        <div className='about-text'>
          <div className='tabs'>
            <button
              className={activeTab === 'bio' ? 'active' : ''}
              onClick={() => setActiveTab('bio')}
            >
              Bio
            </button>
            <button
              className={activeTab === 'skills' ? 'active' : ''}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={activeTab === 'education' ? 'active' : ''}
              onClick={() => setActiveTab('education')}
            >
              Education & Professional Development
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
            {activeTab === 'skills' && (
              <div className='skills'>
                <ul>
                  <li>
                    <h4>Programming Languages</h4>
                    <p>JavaScript, TypeScript, HTML, CSS, Sass</p>
                  </li>
                  <li>
                    <h4>Frameworks & Libraries</h4>
                    <p>
                      React, Node.js, Express,PostgreSQL, MongoDB, GraphQL,
                      Apollo, Docker, Webpack, Vite, Material-UI, React Router,
                      Mongoose{' '}
                    </p>
                  </li>
                  <li>
                    <h4>Tools</h4>
                    <p>Git, Github, VSCode, AWS, Asana, Google Sheets</p>
                  </li>
                </ul>
              </div>
            )}
            {activeTab === 'education' && (
              <div className='education'>
                <ul>
                  <li>
                    <b>Queensborough Community College</b>
                    <p>
                      <em>
                        Software Engineering Micro-Credential Career Track in
                        Web Development, 2025
                      </em>
                    </p>
                  </li>
                  <li>
                    <b>Codesmith</b>
                    <p>
                      <em>Advanced Software Engineering Residency, 2025</em>
                    </p>
                  </li>
                  <li>
                    <b>Silliman University</b>
                    <p>
                      <em>Bachelor's in Fine Arts Major in Painting, 2019</em>
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
