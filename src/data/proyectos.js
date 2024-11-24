import giftApp from '../assets/giftApp.png'

import mrLomo1 from '../assets/mr-lomo/mrLomo1.png'
import mrLomo2 from '../assets/mr-lomo/mrLomo2.png'
import mrLomo3 from '../assets/mr-lomo/mrLomo3.png'
import mrLomo4 from '../assets/mr-lomo/mrLomo4.png'
import mrLomo5 from '../assets/mr-lomo/mrLomo5.png'
import mrLomo6 from '../assets/mr-lomo/mrLomo6.png'

import layaya1 from '../assets/laYayaApp/layaya1.png'
import layaya2 from '../assets/laYayaApp/layaya2.png'
import layaya3 from '../assets/laYayaApp/layaya3.png'
import layaya4 from '../assets/laYayaApp/layaya4.png'
import layaya5 from '../assets/laYayaApp/layaya5.png'

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
      deployed: true
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
      name: "La Yaya App",
      description: "Esta App fue realizada con <strong>C#</strong> para gestionar productos y menús personalizables para adultos y niños, calcula el presupuesto total y las ganancias estimadas, y permite generar reportes en imagen o impresión. También incluye validaciones para evitar datos no válidos.",
      languages: ["C#"],
      url: "",
      github: "https://github.com/MatuqE/La-Yaya-Eventos-App",
      image: [ layaya1, layaya2, layaya3, layaya4, layaya5 ], 
      deployed: false
    },
    // Agrega más proyectos aquí
  ];
  
  export default proyectos;
  