import React, { useState } from "react";
import Slider from "react-slick";

function WhatWeDo() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
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

  return (
    <div className="h-screen pt-80">
      <div className="w-3/4 m-auto">
        <Slider {...settings}>
          {offers.map((item, index) => {
            return (
              <div className=" bg-gray-300 h-[430px] rounded-lg">
                <div key={index} className="">
                  <img
                    src={item.icon}
                    className="w-32 h-32 object-contain block mt-10 m-auto"
                    alt=""
                  />
                </div>
                <div>
                  <p className="fond-semibold text-xl mt-10">{item.name}</p>
                </div>
                <div>
                  <p className="text-md mt-10">{item.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export default WhatWeDo;
