import { slides } from '../../data/imgSlideData';
import { ChevronRight, ChevronLeft, Play, Pause } from 'lucide-react';

import React, { useState, useEffect } from 'react';

const Carousel = () => {

  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); 

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Automatic sliding effect
  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 1000); 
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, isPlaying]);

  // Toggle automatic sliding
  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative ">
      <div className="overflow-hidden rounded-lg">
        <div className="w-full flex">
          {slides.map((slide, index) => (
             <div
             key={index}
             className={`w-full h-52 ${(index === currentIndex? 'block': 'hidden')}`}
           >
             <img src={slide.imageUrl} alt={slide.imageAlt} className="w-full h-full object-cover" />
           </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-[90%] flex justify-between">
        <button
          onClick={prevSlide}
          className="btn btn-circle btn-secondary text-secondary-content btn-sm focus:outline-none"
        >
         <ChevronLeft/>
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle btn-secondary text-secondary-content btn-sm focus:outline-none"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Button toggle */}
        <button
          onClick={togglePlaying}
          className="absolute bottom-4 right-8 focus:outline-none bg-secondary bg-opacity-50 p-2 rounded-full"
        >
          {isPlaying ? <Pause size={16} fill='white' strokeWidth={0}/> : <Play size={16} fill='white' strokeWidth={0}/>}
        </button>
    </div>
  );
};

export default Carousel;
