import React, { useState, useEffect } from "react";
import projects from "../data/proyectos";
import ProyectosMobile from "./ProyectosMobile";
import ProyectosDesktop from "./ProyectosDesktop";

const Proyectos = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Detectar tamaño inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="projects-separator-wrapper">
        <div className="projects-separator m-auto"></div>
      </div>

      <section id="proyectos" className="projects-section text-white">
        <h2>Mis Proyectos</h2>
        {isMobile ? (
          <ProyectosMobile projects={projects} />
        ) : (
          <ProyectosDesktop projects={projects} />
        )}
      </section>
    </div>
  );
};

export default Proyectos;
