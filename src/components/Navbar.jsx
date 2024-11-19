import React from 'react';

const Navbar = () => {
    return (
        <div  className="navbar-fixed">
            <div className='bg-dark divNav d-flex justify-content-end'>
                <div className='d-flex'>
                    <ul className='d-flex m-auto'>
                        <li className='mx-3'>
                            <a href="#inicio" className='text-white'>Inicio</a>
                        </li>
                        <li className='mx-3'>
                            <a href="#about" className='text-white'>Sobre Mí</a>
                        </li>
                        <li className='mx-3'>
                            <a href="#proyectos" className='text-white'>Proyectos</a>
                        </li>
                        <li className='mx-3'>
                            <a href="#contact" className='text-white'>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

