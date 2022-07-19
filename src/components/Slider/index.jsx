import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Slider = ({ img }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const changeIndex = setInterval(() => {
      setActiveIndex((current) => {
        const result = current === img.length - 1 ? 0 : current + 1;
        return result;
      });
    }, 4000);
    return () => clearInterval();
  }, []);

  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  const nextImgIndex = activeIndex === img.length ? 0 : activeIndex + 1;

  return (
    <div className="slider">
      <div
        className="slider__image-container slider__image-container_prev"
        key={prevImgIndex}
      >
        {img[prevImgIndex]}
      </div>
      <div className="slider__image-container" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div
        className="slider__image-container slider__image-container_next"
        key={nextImgIndex}
      >
        {img[nextImgIndex]}
      </div>
    </div>
  );
};

export default Slider;
