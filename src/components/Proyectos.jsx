import React, { useState, useEffect } from "react";
import projects from "../data/proyectos";
import ImageCarousel from './ImageCarousel'

const Proyectos = () => {
  return (
    <div>
      <div className="projects-separator-wrapper">
        <div className="projects-separator m-auto"></div> {/* Separador */}
      </div>

      <section id="proyectos" className="projects-section text-white ">
        <h2>Mis Proyectos</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <ImageCarousel images={project.image} name={project.name} />
              <div className="project-card-content">
                <h3>{project.name}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                <p><strong>{project.languages.join(", ")}</strong></p>

                {project.deployed && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Ver Proyecto
                  </a>
                )}
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
