import { React, useState } from 'react';
import educationData from '../data/education.json';
import skillsData from '../data/skills.json';
import bioData from '../data/bio.json';

export const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section className='about' id='about'>
      <h1 className='title'>About Me</h1>
      <div className='about-block'>
        <img
          src='https://imgur.com/sPyCk54.jpg'
          alt='Sabrina Ira'
          className='profile-pic'
        ></img>
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
                {bioData.map((bio, index) => (
                  <div>
                    <p>{bio.p1}</p>
                    <p>{bio.p2}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'skills' && (
              <div className='skills'>
                <ul>
                  {skillsData.map((skills, index) => (
                    <li>
                      <h4>{skills.category}</h4>
                      <p>{skills.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'education' && (
              <div className='education'>
                <ul>
                  {educationData.map((education, index) => (
                    <li>
                      <p className="school">
                        <b>{education.school}</b>
                      </p>
                      <p className="field">
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
