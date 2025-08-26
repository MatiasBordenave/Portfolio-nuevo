import React, { Suspense } from "react";
import ImageCarousel from "./ImageCarousel";

const ProyectosMobile = ({ projects }) => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        {projects.map((project, index) => (
          <article key={index} className="project-card-mobile">
            <Suspense fallback={<div className="skeleton" />}> 
              <ImageCarousel images={project.image} name={project.name} />
              <div className="project-card-content">
                <header className="project-header">
                  <h3 className="project-title">{project.name}</h3>
                  {project.deployed && <span className="badge live">Live</span>}
                </header>
                <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                <ul className="tag-list">
                  {project.languages.map((lang) => (
                    <li key={lang} className="tag-item">{lang}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  {project.deployed && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Ver Proyecto
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    Ver en GitHub
                  </a>
                </div>
              </div>
            </Suspense>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProyectosMobile;
