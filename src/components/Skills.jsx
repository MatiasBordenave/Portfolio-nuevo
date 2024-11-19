import React from 'react';
import cSharp from "../assets/csharp.svg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/node.png";
import mysql from "../assets/mysql.svg";
import sqlserver from "../assets/sql-server.svg";
import git from "../assets/github-dark.svg";
import bootstrap from "../assets/bootstrap.svg";
import css from "../assets/css.svg";
import html5 from "../assets/html5.svg";

const Skills = () => {
  const skills = [
    { src: html5, alt: 'HTML5' },
    { src: css, alt: 'CSS' },
    { src: javascript, alt: 'JavaScript' },
    { src: bootstrap, alt: 'Bootstrap' },
    { src: react, alt: 'React' },
    { src: nodejs, alt: 'NodeJS' },
    { src: python, alt: 'Python' },
    { src: cSharp, alt: 'C#' },
    { src: mysql, alt: 'MySQL' },
    { src: sqlserver, alt: 'SQL Server' },
    { src: git, alt: 'GitHub' }
  ];

  return (
    <section className='skills-section'>
      <div className='skills-separator-wrapper'>
        <div className='skills-separator'></div>
      </div>

      <div className='skills-container-wrapper'>
        <h3 className='skills-title'>Mis Habilidades</h3>
        <div className='skills-container'>
          {skills.map((skill, index) => (
            <div key={index} className='skill-item'>
              <img src={skill.src} alt={skill.alt} className='iconSkills' />
              <span className='skill-name'>{skill.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
