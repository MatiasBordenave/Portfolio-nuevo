import React from 'react';
import projects from '../data/proyectos';

const Proyectos = () => {
  return (
    <div>
      <div className='projects-separator-wrapper'>

        <div className="projects-separator m-auto"></div> {/* Separador */}
      </div>

      <section id="proyectos" className="projects-section text-white ">
        <h2>Mis Proyectos</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-card-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>{project.languages.join(", ")}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Ver Proyecto
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Ver en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Proyectos;
