import React, { useState, useEffect } from 'react';


const ImageCarousel = ({ images, name }) => {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar si el ratón está sobre la imagen

  // Cambiar imagen automáticamente cada 3 segundos, solo si no está en hover
  useEffect(() => {
    if (isHovered) return; // Si está en hover, no se ejecuta el intervalo

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        Array.isArray(images)
          ? (prevIndex + 1) % images.length
          : prevIndex // Si no es un array, no cambia
      );
    }, 3000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, [images, isHovered]);

  // Cambiar manualmente
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      Array.isArray(images)
        ? (prevIndex - 1 + images.length) % images.length
        : prevIndex
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Array.isArray(images)
        ? (prevIndex + 1) % images.length
        : prevIndex
    );
  };

  // Mostrar imagen actual
  const currentImage = Array.isArray(images) ? images[currentIndex] : images;

  return (
    <div
      className="image-carousel"
      onMouseEnter={() => setIsHovered(true)} // Cuando el ratón entra en la imagen
      onMouseLeave={() => setIsHovered(false)} // Cuando el ratón sale de la imagen
    >
      <img
        src={currentImage}
        alt={`${name} - ${currentIndex + 1}`}
        className="carousel-image"
        loading="lazy"
        decoding="async"
        width="1600"
        height="900"
      />
    </div>
  );
};


export default ImageCarousel