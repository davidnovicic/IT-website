import React, { useEffect, useRef, useState } from "react";
import MySlider from "./MySlider";
import Slider from "./Slider";
import ServerRoom2 from "./serverroom1.avif";

function WhatWeDo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    { url: "images/strangeobject.avif", title: "Strangeobject" },
    { url: "images/office.avif", title: "Office" },
    { url: "images/security.avif", title: "Security" },
    { url: "images/serverroom123.avif", title: "Serverroom123" },
  ];

  const containerStyles = {
    width: "1200px",
    height: "1200px",
    margin: "0 auto",
  };

  const offers = [
    {
      name: "Desktop and Laptop Service",
      icon: "images/itservice.png",
      description:
        "Desktop and laptop service of any kind, any problem that you have with your workstation we can solve",
    },
    {
      name: "IT Support",
      icon: "images/support.png",
      description:
        "Support 24/7 via TeamViewer. Leave your daily basis IT troubles to us",
    },
    {
      name: "Cloud Service",
      icon: "images/cloud.png",
      description:
        "Protect, improve and maintain your business with Cloud technologies",
    },
    {
      name: "Backup Solutions",
      icon: "images/backup.png",
      description:
        "Data of your business is the most valuable thing. Protect your DATA with modern back solutions and never worry again about DATA loss.",
    },
    {
      name: "Security",
      icon: "images/security.png",
      description:
        "Modern IT security solutions to protect your environment from every possible cyber attack",
    },
    {
      name: "Network Management",
      icon: "images/networking.png",
      description: "I need faster wifi and mor streamlined systems",
    },
    {
      name: "IT Guidance",
      icon: "images/guidance.png",
      description: "I need IT strategy to support our business goals.",
    },
  ];

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
    <div>
      <div className="h-[700px] relative">
        <img
          src={ServerRoom2}
          className="img1 absolute w-full h-full mix-blend-overlay object-cover"
        />
        <div className="p-24">
          <p className="text-6xl mt-32 text-white">
            Business IT and Security Services
          </p>
          <p className="text-white text-xl mt-20 text-center w-[950px] ml-[240px]">
            Today, businesses need agility, mobility, and efficiency like never
            before. It time for a different kind of IT service provider—one that
            will meet your business where it is now and take you anywhere you
            want to go.
          </p>
          <button className="bg-red-500 h-10 w-60 text-white text-xl mt-28 rounded-md mb-20">
            Explore Options
          </button>
        </div>
      </div>

      <div>
        <div className="mt-[50px] p-20">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
