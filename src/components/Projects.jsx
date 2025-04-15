import React from 'react';

export const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='title'>Projects</h2>
      <div className='project-grid'>
        <div className='project-card'>
          <h3>GuardQL</h3>
          <h5>2025 - Present</h5>
          {/* <img src='' alt=''></img> */}
          <p>
            A debugging and performance monitoring tool that logs GraphQL API
            errors, tracks slow query execution times, and provides a central
            dashboard with search and filtering functionality for multiple
            projects.
          </p>
          <div>
          <a href='https://github.com/oslabs-beta/GuardQL' target='_blank'>View Project</a></div>
        </div>
        <div className='project-card'>
          <h3>ViewQueue</h3>
          <h5>2025</h5>
          {/* <img src='' alt=''></img> */}
          <p>
            A media tracking app that lets you search, organize, and manage your
            watchlist for movies, shows, and anime. With an intuitive interface
            and seamless navigation, this app will make it easy to keep track of
            what you’ve watched and what’s next on your list.
          </p>
          <div>
          <a href='https://github.com/geodude-dudettes/ViewQueue.git' target='_blank'>
            View Project
          </a></div>
        </div>
        <div className='project-card'>
          <h3>Swifting Eras</h3>
          <h5>2024 - 2025</h5>
          {/* <img src='' alt=''></img> */}
          <p>
            An interactive Taylor Swift album archive app, containing albums,
            songs and lyrics. Built with React and React Router, the app delivers
            smooth client-side navigation, while a Node.js/Express backend
            connects to MongoDB to efficiently manage and serve song data.
          </p>
          <div>
          <a href='https://github.com/sabrinaira/swifting-eras.git' target='_blank'>
            View Project
          </a></div>
        </div>
        {/* <div className='project-card'>
          <h3>Project</h3>
          <img src='' alt=''></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            optio, perferendis minima sint doloremque reiciendis vel dolore
            veritatis deserunt hic aliquam, totam, iure amet! Qui sed eveniet
            quos quam consectetur!
          </p>
          <a href=''>View Project</a>
        </div>
        <div className='project-card'>
          <h3>Project</h3>
          <img src='' alt=''></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            laborum ipsam iure fugiat cumque. Molestias commodi iste rem! Quasi
            laboriosam architecto temporibus eum vel enim eius commodi tenetur
            quos modi.
          </p>
          <a href=''>View Project</a>
        </div>
        <div className='project-card'>
          <h3>Project</h3>
          <img src='' alt=''></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            aspernatur reiciendis neque ratione vel aliquam rem optio harum eius
            eaque error debitis necessitatibus cupiditate veritatis officiis
            excepturi, laudantium pariatur tempora!
          </p>
          <a href=''>View Project</a>
        </div> */}
      </div>
    </section>
  );
};
