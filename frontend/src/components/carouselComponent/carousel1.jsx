import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} width="100%" height="300" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
