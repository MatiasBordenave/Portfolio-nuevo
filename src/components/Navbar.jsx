import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Detectar tamaño inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-fixed">
      <div className="bg-dark divNav d-flex justify-content-end align-items-center">
        {/* Botón de menú hamburguesa (visible solo en móviles) */}
        {isMobile && (
          <button
            className="hamburger-menu bg-dark align-items-center justify-content-center d-flex"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        )}

        {/* Links de navegación */}
        <div className={`nav-links ${isMobile && isOpen ? "open" : ""}`}>
          <ul className={`${isMobile ? "mobile-nav" : "d-flex"} m-auto`}>
            <li className="mx-3">
              <a href="#inicio" className="text-white" onClick={handleLinkClick}>
                Inicio
              </a>
            </li>
            <li className="mx-3">
              <a href="#about" className="text-white" onClick={handleLinkClick}>
                Sobre Mí
              </a>
            </li>
            <li className="mx-3">
              <a
                href="#proyectos"
                className="text-white"
                onClick={handleLinkClick}
              >
                Proyectos
              </a>
            </li>
            <li className="mx-3">
              <a
                href="#contact"
                className="text-white"
                onClick={handleLinkClick}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
