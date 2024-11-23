import giftApp from '../assets/giftApp.png'

import mrLomo1 from '../assets/mr-lomo/mrLomo1.png'
import mrLomo2 from '../assets/mr-lomo/mrLomo2.png'
import mrLomo3 from '../assets/mr-lomo/mrLomo3.png'
import mrLomo4 from '../assets/mr-lomo/mrLomo4.png'
import mrLomo5 from '../assets/mr-lomo/mrLomo5.png'
import mrLomo6 from '../assets/mr-lomo/mrLomo6.png'


const proyectos = [
    {
      id: 1,
      name: "Sangucheria Mr-Lomo",
      description: "Desarrollado como un proyecto de la facultad, esta aplicación fue construida con <strong> React, Node.js y MySQL </strong> para un restaurante de comidas rápidas. Permite gestionar productos, ventas, historial de ventas, productos más vendidos y administrar la caja. Además, se trabajó directamente con el cliente aplicando metodologías ágiles como <strong>SCRUM</strong>.",
      languages: ["HTML", "CSS", "React", "NodeJS", "MySQL"],
      url: "https://mr-lomo-simple.netlify.app/",
      github: "https://github.com/MatuqE/mrLomo-Simple",
      image: [mrLomo1, mrLomo2, mrLomo3, mrLomo4, mrLomo5, mrLomo6],
      deployed: true
    },
    {
      id: 2,
      name: "Web Dentista",
      description: "Descripción breve del proyecto 2.",
      languages: ["React", "Node.js"],
      url: "https://proyecto2.com",
      github: "https://github.com/usuario/proyecto2",
      image: giftApp,
      deployed: false
    },
    {
      id: 3,
      name: "Gift App",
      description: "Desarrollé una aplicación web con React que permite buscar gifs usando la API de Giphy. Fue mi primera práctica usando fetch para traer datos dinámicos y la primera aplicación que desplegué, aprendiendo a publicarla y hacerla accesible para usuarios..",
      languages: ["HTML", "CSS", "React"],
      url: "https://gifs-expert-matuqe.netlify.app/",
      github: "https://github.com/MatuqE/giftApp",
      image: giftApp, 
      deployed: true
    },
    {
      id: 4,
      name: "Mi Proyecto 2",
      description: "Descripción breve del proyecto 2.",
      languages: ["React", "Node.js"],
      url: "https://proyecto2.com",
      github: "https://github.com/usuario/proyecto2"
    },
    // Agrega más proyectos aquí
  ];
  
  export default proyectos;
  