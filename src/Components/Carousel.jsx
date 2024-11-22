import React, { useState } from 'react';
import './Carousel.css'; 

const carouselItems = [
  { id: 1, src: '/image/image 2.jpg' },
  { id: 2, src: '' },
  { id: 3, src: '' },
  { id: 4, src: '' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevSlide}>❮</button>
      <div className="carousel">
        <img src={carouselItems[currentIndex].src} alt={`carousel-item-${currentIndex}`} />
      </div>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;
