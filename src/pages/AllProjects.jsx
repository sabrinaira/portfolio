import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import projectsData from '../data/projects.json';
import styles from '../styles/AllProjects.module.scss';

export const AllProjects = () => {
  return (
    <main className={styles.allProjectsPage}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Experience / Projects</h2>
      </div>

      <section className={styles.allProjectsContainer} id='projects'>
        <div className={styles.projectGrid}>
          {projectsData.map((project, index) => (
            <div className={styles.projectCard} key={index}>
              <div className={styles.cardHeader}>
                <h3>{project.title}</h3>
              </div>
              <h4>{project.timeline}</h4>
              <p>{project.description}</p>
              <div className={styles.tools}>
                {project.tools.map((tool, index) => (
                  <span className={styles.tool} key={index}>
                    {tool}
                  </span>
                ))}
              </div>
              <div className={styles.cardButtons}>
                {project.hasOwnProperty('demo') && project.demo && (
                  <div className={styles.projectButton}>
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Live Preview
                    </a>
                  </div>
                )}
                <div className={styles.projectButton}>
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
      </section>

      <div className={styles.returnHome}>
        <Link to='/' className='view-all-button'>
          Return Home
        </Link>
      </div>
      <Footer />
    </main>
  );
};
