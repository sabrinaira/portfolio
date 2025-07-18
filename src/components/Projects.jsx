import React, { useState } from 'react';
import topProjects from '../data/top-projects.json';
import allProjects from '..//data/projects.json';

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // if (showAll)
  //   window.scrollTo({
  //     top: document.getElementById('projects').offsetTop,
  //     behavior: 'smooth',
  //   });

  const projectsToDisplay = showAll ? allProjects : topProjects;

  return (
    <section className='projects' id='projects'>
      <h2 className='title'>Projects</h2>
      <div className='projects-container'>
        <div className='project-grid'>
          {projectsToDisplay.map((project, index) => (
            <div className='project-card'>
              <div className='project-title'>
                <h3>{project.title}</h3>
              </div>
              <div className='project' key={index}>
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
            </div>
          ))}
        </div>
      </div>
        <div className='view-all' onClick={() => setShowAll(!showAll)}>
          <button
            className='view-all-button'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'View Top Projects' : 'View All Projects'}
          </button>
        </div>
    </section>
  );
};
