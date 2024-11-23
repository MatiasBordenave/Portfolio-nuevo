import React from 'react'

import { FaLinkedin, FaGithub, FaFacebookSquare  } from 'react-icons/fa'; // Importa los iconos

const Footer = () => {
  return (
    <div className='footer'>
    <div className=''>
      {/* Nombre a la izquierda */}
      <div className='footer_copyR'>
        <p>Matias Bordenave</p>
      </div>

      {/* Copyright en el centro */}
      <div className='footer_copyR center'>
        <p>© Copyright 2023. Made by Matias Bordenave.</p>
      </div>

      {/* Redes sociales a la derecha */}
      <div className='col-12 bg-darkk justify-content-end d-flex footer_media'>
                  <a className='bg-darkk' href="https://www.linkedin.com/in/matias-bordenave-221986251/" target='_blank'><FaLinkedin className="social-icons-fclk-footer social-icon-footer" /></a>
                  <a className='bg-darkk' href="https://github.com/MatuqE" target='_blank'><FaGithub className="social-icon-git-footer social-icon-footer" /></a>
                  <a className='bg-darkk' href="https://github.com/MatuqE" target='_blank'><FaFacebookSquare className="social-icons-fclk-footer social-icon-footer"/></a>
      </div>
    </div>
  </div>

  )
}

export default Footer