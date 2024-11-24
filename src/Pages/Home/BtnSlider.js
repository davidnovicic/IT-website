import React from "react";
import rightArrow from "./icons/rightArrow.png";
import leftArrow from "./icons/leftArrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btw-slide prev"}
      onClick={moveSlide}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
