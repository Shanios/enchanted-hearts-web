import img1 from '../assets/2nd-anniversary1.jpeg';
import img2 from '../assets/2nd-anniversary2.jpeg';
import img3 from '../assets/2nd-anniversary3.jpeg';
import img4 from '../assets/2nd-anniversary4.jpeg';
import img5 from '../assets/2nd-anniversary5.jpeg';

import React, { useState, useEffect } from 'react';

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - replace with your actual photos
const photos = [img1, img2, img3, img4,img5];


  const captions = [
    "Our first adventure together",
    "That magical sunset",
    "When you made me laugh so hard",
    "Our perfect day",
    "The moment I knew you were the one"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="photo-slider-container">
      <h2 className="slider-title">Our Beautiful Memories</h2>
      <div className="slider-wrapper">
        <div className="slider-content">
          <div className="photo-frame">
            <img 
              src={photos[currentSlide]} 
              alt={captions[currentSlide]}
              className="slider-image slider-image-animated"
              key={currentSlide}
            />
            <div className="photo-overlay">
              <p className="photo-caption">{captions[currentSlide]}</p>
            </div>
          </div>
        </div>
        
        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
