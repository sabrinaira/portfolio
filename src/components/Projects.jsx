import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/top-projects.json';

export const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='title'>Experience / Projects</h2>
      <div className='project-grid'>
        {projectsData.map((project, index) => (
          <div className='project-card' key={index}>
            <div className='card-header'>
              <h3>{project.title}</h3>
            </div>
            <h4>{project.timeline}</h4>
            <p>{project.description}</p>
            <div className='tools'>
              {project.tools.map((tool, index) => (
                <span className='tool' key={index}>
                  {tool}
                </span>
              ))}
            </div>
            <div className='card-buttons'>
              {project.hasOwnProperty('demo') && project.demo && (
                <div className='project-button'>
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Preview
                  </a>
                </div>
              )}
              <div className='project-button'>
                <a
                  href={project.repo_link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='view-all'>
        <Link to='/allprojects' className='view-all-button'>
          View All Projects
        </Link>
      </div>
    </section>
  );
};
