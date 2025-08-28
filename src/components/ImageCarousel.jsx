import React, { useState, useEffect, useRef } from 'react';


const ImageCarousel = ({ images, name }) => {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar si el ratón está sobre la imagen
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Cambiar imagen automáticamente cada 3 segundos, solo si no está en hover
  // Start/stop carousel only when visible to avoid unnecessary work (forced reflow)
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0]?.isIntersecting ?? false);
      },
      { root: null, threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHovered || !isVisible) return; // pause on hover or when offscreen

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        Array.isArray(images)
          ? (prevIndex + 1) % images.length
          : prevIndex
      );
    }, window.innerWidth < 768 ? 4000 : 3000);

    return () => clearInterval(interval);
  }, [images, isHovered, isVisible]);

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
      ref={containerRef}
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
        fetchpriority="low"
        sizes="(max-width: 768px) 100vw, 600px"
      />
    </div>
  );
};


export default ImageCarousel