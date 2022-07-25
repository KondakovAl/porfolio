import React from 'react';
import { useState, useEffect, memo } from 'react';

//*Slides//
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.jpg';
import slide5 from '../../assets/images/slide5.jpg';
import slide6 from '../../assets/images/slide6.jpg';
import slide7 from '../../assets/images/slide7.jpg';

const dataImages = {
  images: [
    <img key={slide1} src={slide1} />,
    <img key={slide2} src={slide2} />,
    <img key={slide3} src={slide3} />,
    <img key={slide4} src={slide4} />,
    <img key={slide5} src={slide5} />,
    <img key={slide6} src={slide6} />,
    <img key={slide7} src={slide7} />,
  ],
};

const Slider = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((current) => {
        const result =
          current === dataImages.images.length - 1 ? 0 : current + 1;
        return result;
      });
    }, 4000);
    return () => clearInterval();
  }, []);

  const prevImgIndex = activeIndex
    ? activeIndex - 1
    : dataImages.images.length - 1;
  const nextImgIndex =
    activeIndex === dataImages.images.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className='slider'>
      <div
        className='slider__image-container slider__image-container_prev'
        key={prevImgIndex}
      >
        {dataImages.images[prevImgIndex]}
      </div>
      <div className='slider__image-container' key={activeIndex}>
        {dataImages.images[activeIndex]}
      </div>
      <div
        className='slider__image-container slider__image-container_next'
        key={nextImgIndex}
      >
        {dataImages.images[nextImgIndex]}
      </div>
    </div>
  );
});

export default Slider;
