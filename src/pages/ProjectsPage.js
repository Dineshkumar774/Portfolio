import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'PortFolio Website',
      description: `Personal Portfolio website built using React,  CSS, and Parcel. It showcases my projects, skills, and contact information.`,
      "GitHub Link": 'https://github.com/mohanreddynandaluru/portfolio',
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="main-grid">
          {/* Projects Column */}
          <div className="projects-column">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    {project["Live Link"] && (
                      <a href={project["Live Link"]} className="demo-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                    {project["GitHub Link"] && (
                      <a href={project["GitHub Link"]} className="demo-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 