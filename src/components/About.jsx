import { React, useState } from 'react';
import { bio, skills, education } from '../data/about.json';

export const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section className='about' id='about'>
      <h1 className='title'>About Me</h1>
      <div className='about-container'>
        <div className='about-block'>
          <img
            src='https://i.ibb.co/7dvq4zf1/sabrina-profile-photo-small.jpg'
            alt='Profile Picture of Sabrina'
            className='profile-pic'
          ></img>
          <div className='about-text'>
            <div className='tabs'>
              <button
                className={activeTab === 'bio' ? 'active' : ''}
                onClick={() => setActiveTab('bio')}
              >
                About
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
                Education
              </button>
            </div>
            <div className='tab-content'>
              {activeTab === 'bio' && (
                <div className='bio'>
                  {bio.map((bio, index) => (
                    <div>
                      <p className='bio-p' key={index}>{bio}</p>
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
                        <p className='year'>
                          <em>{education.year}</em>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
