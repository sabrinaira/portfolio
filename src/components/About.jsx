import { React, useState } from 'react';
import { info, bio, skills, education } from '../data/about.json';

export const About = () => {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <section className='about' id='about'>
      <h1 className='title'>About Me</h1>
      <div className='about-block'>
        <img
          src='https://i.imgur.com/XhpXnLG.jpeg'
          alt='Profile Picture of Sabrina'
          className='profile-pic'></img>
        <div className='about-text'>
          <div className='tabs'>
            <button
              className={activeTab === 'info' ? 'active' : ''}
              onClick={() => setActiveTab('info')}>
              Info
            </button>
            <button
              className={activeTab === 'bio' ? 'active' : ''}
              onClick={() => setActiveTab('bio')}>
              About
            </button>
            <button
              className={activeTab === 'skills' ? 'active' : ''}
              onClick={() => setActiveTab('skills')}>
              Skills
            </button>
            <button
              className={activeTab === 'education' ? 'active' : ''}
              onClick={() => setActiveTab('education')}>
              Education & Professional Development
            </button>
          </div>
          <div className='tab-content'>
            {activeTab === 'info' && (
              <div className='info'>
                {info.map((info, index) => (
                  <div>
                    <p className="info-p">{info.info}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'bio' && (
              <div className='bio'>
                {bio.map((bio, index) => (
                  <div>
                    <p className="bio-p">{bio.bio1}</p>
                    <p className="bio-p">{bio.bio2}</p>
                    <p className="bio-p">{bio.bio3}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'skills' && (
              <div className='skills'>
                <ul>
                  {skills.map((skills, index) => (
                    <li>
                      <h4>{skills.category}</h4>
                      <p className='skills-list'>
                        {skills.list.map((skill, index) => (
                          <span key={index}>{skill}</span>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'education' && (
              <div className='education'>
                <ul>
                  {education.map((education, index) => (
                    <li>
                      <p className='school'>
                        <b>{education.school}</b>
                      </p>
                      <p className='field'>
                        <em>{education.field}</em>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
