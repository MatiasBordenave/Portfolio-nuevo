import React from 'react';
import { motion } from 'framer-motion';
import TypewriterExample from './TypewriterExample';

const Main = () => {
  return (
    <div className='container' id='inicio'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        <div className='divBg d-flex justify-content-center align-items-center vh-100'>
          
 
            <div className='d-flex flex-column justify-content-center align-items-center '>
              <TypewriterExample/>
              <h1 className='nameTitle text-white'>Soy Matías Bordenave!</h1>
              <h2 className='text-white'>Programador Full Stack</h2>


            </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
