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

import dentista1 from '../assets/webDentista/dentista1.png'
import dentista2 from '../assets/webDentista/dentista2.png'
import dentista3 from '../assets/webDentista/dentista3.png'
import dentista4 from '../assets/webDentista/dentista4.png'

import hospital1 from '../assets/web-Hospital/hospital1.png'
import hospital2 from '../assets/web-Hospital/hospital2.png'
import hospital3 from '../assets/web-Hospital/hospital3.png'
import hospital4 from '../assets/web-Hospital/hospital4.png'
import hospital5 from '../assets/web-Hospital/hospital5.png'


const proyectos = [
    {
      id: 1,
      name: "Sangucheria",
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
      description: "Esta web la desarrollé como proyecto de mi facultad en grupo, para la gestión de clínicas dentales. Incluye login, registro y funcionalidades <strong>CRUD</strong> para dentistas, pacientes, turnos e historiales. Utilicé <strong>React</strong> para el frontend, <strong>NodeJS</strong> para el backend y <strong>MySql</strong> como base de datos.",
      languages: ["HTML", "CSS", "React", "NodeJS", "MySQL"],
      url: "https://web-dentista-simple.vercel.app/",
      github: "https://github.com/MatuqE/WebDentistaSimple",
      image: [ dentista1, dentista2, dentista3, dentista4 ],
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
      name: "Web Hospital San Pablo",
      description: "Esta web fue creada para mis prácticas en la UTN, destinada al Hospital de San Pablo. Permite a los usuarios informarse sobre noticias médicas, horarios de atención por orden de llegada, y horarios de los CAPS de la red hospitalaria.",
      languages: ["HTML", "CSS", "React", "NodeJS", "MySQL"],
      url: "",
      github: "https://github.com/MatuqE/Web-Hospital-SP",
      image: [ hospital1, hospital2, hospital3, hospital4, hospital5 ],       
      deployed: false
    },
    {
      id: 5,
      name: "La Yaya App",
      description: "Esta App fue realizada con <strong>C#</strong> para gestionar productos y menús personalizables para adultos y niños, calcula el presupuesto total y las ganancias estimadas, y permite generar reportes en imagen o impresión. También incluye validaciones para evitar datos no válidos.",
      languages: ["C#"],
      url: "",
      github: "https://github.com/MatuqE/La-Yaya-Eventos-App",
      image: [ layaya1, layaya2, layaya3, layaya4, layaya5 ], 
      deployed: false
    },
  ];
  
  export default proyectos;
  