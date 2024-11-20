import React from 'react';
import { motion } from 'framer-motion';
import TypewriterExample from './TypewriterExample';

const Main = () => {
  return (
    <div className='container' id='inicio'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} // Cambié a 1 para la opacidad
        transition={{ duration: 1.5 }}
      >
        <div className='divBg d-flex justify-content-center align-items-center vh-100'>
          
            {/* <div className='col-6 d-flex justify-content-center align-items-center'>
              <img src={img} alt='' className='imgMain' />
            </div> */}
            <div className='d-flex flex-column justify-content-center align-items-center '>
              <TypewriterExample/>
              <h1 className='nameTitle text-white'>Soy Matías Bordenave!</h1>
              <h2 className='text-white'>Programador Full Stack</h2>

              {/* Typewriter effect for "Hola Mundo!" */}
            </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
