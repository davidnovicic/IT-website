import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = ({ slides }) => {
  const timerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "50%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "80px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "80px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    clearTime(timerRef);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex !== slides.length - 1;
    const newIndex = isLastSlide ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const clearTime = () => {
    clearTimeout(timerRef.current);
  };

  useEffect(() => {
    console.log("bla");
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 3000);

    return () => clearTimeout(timerRef.current);
  });

  return (
    <div style={sliderStyles} className="mt-[700px]">
      <div style={leftArrowStyle} onClick={goToPrevious} className="">
        <div className="">
          <i className="ri-arrow-left-line text-6xl bg-white text-red-400 rounded-md"></i>
        </div>
      </div>
      <div style={rightArrowStyle} onClick={goToNext} className="">
        <i class="ri-arrow-right-line text-6xl bg-white text-red-400 rounded-md"></i>
      </div>
      <div style={slideStyles}> </div>
      <div className="flex justify-center mt-10 space-x-10">
        {slides.map((slides, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <i className="ri-circle-line cursor-pointer"></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySlider;
