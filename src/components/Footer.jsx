import React from 'react'

import { FaLinkedin, FaGithub, FaFacebookSquare  } from 'react-icons/fa'; // Importa los iconos

const Footer = () => {
  return (
    <div className='footer'>
    <div className='container'>

        <div className=' bg-darkk row divFooter'>
          <div className='footer_copyR bg-darkk col-lg-4 '>
              <p className='d-flex bg-darkk' >Matias Bordenave</p>
          </div>
          <div className='col-lg-4 justify-content-center bg-darkk d-flex'>
              <p className='copyRightP  bg-darkk'>© Copyright 2023. Made by Matias Bordenave.</p>
          </div>
          <div className='footer_media bg-darkk col-lg-4'>
              <div className=''>
                <div className='col-12 justify-content-end bg-darkk  d-flex'>
                  <h3 className='bg-darkk' >social</h3>
                </div>
                
                <div className='col-12 bg-darkk justify-content-end d-flex'>
                  <a className='bg-darkk' href="https://www.linkedin.com/in/matias-bordenave-221986251/" target='_blank'><FaLinkedin className="social-icons-fclk-footer social-icon-footer" /></a>
                  <a className='bg-darkk' href="https://github.com/MatuqE" target='_blank'><FaGithub className="social-icon-git-footer social-icon-footer" /></a>
                  <a className='bg-darkk' href="https://github.com/MatuqE" target='_blank'><FaFacebookSquare className="social-icons-fclk-footer social-icon-footer"/></a>
                </div>
              </div>
            </div>
        </div>
        
    </div>
      </div>

  )
}

export default Footer