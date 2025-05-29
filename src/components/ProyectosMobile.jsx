import React, { Suspense } from "react";
import ImageCarousel from "./ImageCarousel";

const ProyectosMobile = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card-mobile">
          <ImageCarousel images={project.image} name={project.name} />
          <div className="project-card-content">
            <h3>{project.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
            <p>
              <strong>{project.languages.join(", ")}.</strong>
            </p>
            {project.deployed && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="aProyecto">
                Ver Proyecto
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="aProyecto">
              Ver en GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProyectosMobile;
