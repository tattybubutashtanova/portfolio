import React from 'react';
import './Projects.css'; // Styles for the project cards

const ProjectCard = ({ title, description, link }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="grid">
        
        <ProjectCard title="Project 1" description="Description of project 2" link="#" />
        <ProjectCard title="Project 2" description="Description of project 2" link="#" />
        <ProjectCard title="Project 3" description="Description of project 3" link="#" />
        <ProjectCard title="Project 4" description="Description of project 4" link="#" />
      </div>
    </section>
  );
};

export default Projects;