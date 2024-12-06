import Slider from "react-slick";
import React, { Component } from "react";

function PauseOnHover() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  function LeftArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-prev"
        style={{ ...style, display: "", background: "" }}
        onClick={onClick}
      />
    );
  }

  function RightArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-next"
        style={{ ...style, display: "", background: "" }}
        onClick={onClick}
      />
    );
  }

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
    <div className="ml-60 mr-60 ">
      <Slider {...settings} className="slick.slide overflow">
        {offers.map((item, index) => {
          return (
            <div className="w-full bg-gray-200 h-[400px] rounded-lg hover:bg-blue-100">
              <div key={index} className="border">
                <img
                  src={item.icon}
                  className="w-32 h-32 object-contain block mt-10 m-auto"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold text-xl mt-10">{item.name}</p>
              </div>
              <div>
                <p className="text-md mt-10">{item.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PauseOnHover;
