import React from 'react'
import './globalmovement.css'
import { BiRightArrowAlt } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const GlobalMovement = () => {
  const slides = [
    { image: './community-slide-01.png', caption: 'Community meet-up in Tokyo' },
    { image: './community-slide-02.png', caption: 'Notion ambassador event in New York' },
    { image: './community-slide-03.png', caption: 'Sharing Notion setups in San Francisco' },
    { image: './community-slide-04.png', caption: 'Coffee pop-up in London' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className='global-movement'>
      <div className='global-movement-title'> Join a global movement. </div>
      <div className='global-movement-title'> Unleash your creativity. </div>
      <div className='global-movement-desc'> Our vibrant community produces content, teaches courses, and leads events all over the world. </div>
      <button className='learn-more'>
          <div className='learn-more-content'>
            Learn More
            <div className='learn-more-arrow'>
              <BiRightArrowAlt /> 
            </div>
          </div>
      </button>
      <div> <img src='avatars.png' alt='avatars'/> </div>
      <div className='global-movement-grid'>
        <div className='stats'>
          <div className='stats-number'>1M+</div>
          <div className='stats-desc'>community members</div>
        </div>
        <div className='stats'>
          <div className='stats-number'>150+</div>
          <div className='stats-desc'>community groups</div>
        </div>
        <div className='stats'>
          <div className='stats-number'>50+</div>
          <div className='stats-desc'>countries represented</div>
        </div>
        <div className='network-language'>
          <div className='network-language-title'>An always-on support network</div>
          <div className='network-language-desc'>Swap setups and share tips in over 149 online communities.</div>
          <div className='network-language-image'> <img src='community-icons-V2.png' alt='community-icons'/> </div>
        </div>
        <div className='network-language'>
          <div className='network-language-title'>Choose your language</div>
          <div className='network-language-desc'>Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!</div>
          <div className='network-language-image'> <img src='welcome-to-notion.png' alt='welcome-to-notion'/> </div>
        </div>
        <div className="slider-container">
          <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
                <div className="caption">{slide.caption}</div>
              </div>
            ))}
          </div>
          <FaChevronLeft className="arrow left" onClick={prevSlide} />
          <FaChevronRight className="arrow right" onClick={nextSlide} />
        </div>
      </div>
    </div>
  )
}

export default GlobalMovement
