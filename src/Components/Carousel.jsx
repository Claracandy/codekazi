import React, { useState, useEffect } from 'react';
import './Carousel.css'; 

const Carousel = () => {
  
  const images = [
   ' /image/image 1.jpg',
   '/image/image 2.jpg',
   '/image/image 3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className="carousel-controls">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>
          Prev
        </button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
