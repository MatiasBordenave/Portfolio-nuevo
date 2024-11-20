
import yo from '../assets/yo.jpg'
import React, { useEffect, useRef } from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importa los iconos

const About = () => {

  const aboutRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = aboutRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (aboutTop < windowHeight) {
        aboutRef.current.classList.add('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={aboutRef} className="about-section text-white" id="about">
      {/* Separador arriba */}
      <div className="about-separator-wrapper">
        <div className="about-separator"></div>
      </div>
      
      <div className="about-container">
        <div className="about-profile">
          <img src={yo} alt="Matías Bordenave" className="about-image" />
        </div>
        <div className="about-content m-auto">
          <h2 className="about-title">Sobre Mí</h2>
          <p className="about-intro">
            Soy Matías Bordenave, desarrollador web apasionado por crear soluciones innovadoras. Me gusta trabajar tanto en el frontend como en el backend, buscando siempre crear aplicaciones funcionales y fáciles de usar.
          </p>
          <p className="about-education">
            Estudié  <strong> Tecnicatura univercitaria en Programacion </strong> en <strong>La Universidad Tecnológica Nacional - Facultad Regional Tucumán </strong> y tengo experiencia trabajando con tecnologías como HTML, CSS, JavaScript, React, Node.js, C#, Python y bases de datos como MySQL y SQL Server.
          </p>
          <p className="about-experience">
            He trabajado en la creación de proyectos web tanto personales como en equipo, mejorando mis habilidades en cada paso.
          </p>
          <p className="about-goals">
            Mi objetivo es seguir aprendiendo y mejorando mis habilidades para contribuir a proyectos de tecnología que impacten positivamente.
          </p>
          <div className="about-links d-flex align-items-center">
          <a href="https://www.linkedin.com/in/matias-federico-bordenave-221986251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/MatuqE" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="social-icon-git" />
          </a>
          <a href="https://drive.google.com/file/d/1poU5sp2l1Ngz0mtt6V9S915KRjaOviS7/view" target='_blank' download className="download-button" aria-label="Ver CV">
            Ver CV
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
