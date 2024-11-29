import React from "react";
import ServerRoom1 from "./serverroom1.avif";
import ServerRoom2 from "./serverroom2.avif";
import ServerRoom3 from "./serverroom3.png";
import CompanyName from "./companyname.png";
import Techgirl from "./techgirl.avif";

function Intro() {
  return (
    <div>
      <div className="h-[700px] relative">
        <img
          src={ServerRoom2}
          className="img1 w-full h-full object-cover mix-blend-overlay absolute"
        />
        <div className="p-24">
          <h1 className="text-white text-2xl mt-20">MANAGED SERVICES</h1>
          <h2 className="text-white text-6xl mt-10"> IT That Simply Works</h2>
          <p className="text-white text-base mt-10">
            Keep your technology secure and running smoothly without missing a
            beat or missing out
            <p>on all the benefits that managed service can provide</p>
          </p>
        </div>
        <div className="space-x-20">
          <button className="bg-red-500 text-white text-md rounded-lg w-40 h-10">
            Request a meeting
          </button>
          <a className="text-white"> Speak with us about managed IT services</a>
        </div>
        <div className="flex justify-center mt-28">
          <img src={CompanyName} className="absolute w-[150px]" />
        </div>
      </div>
      <div className="mt-40 ml-80 flex justify-between items-center">
        <div className="w-[500px] text-left ml-10">
          <h1 className="text-4xl">
            {" "}
            Address issues before they become problems
          </h1>
          <h2 className="mt-10 text-md">
            Through Remote Monitoring and Maintenance managed services, CMIT
            Solutions keeps watch over the health of your devices 24/7 to
            proactively keep them up and running. Plus, automated security and
            performance patch updates improve speed and performance while
            helping to prevent cyber attacks that exploit unpatched
            vulnerabilities.
          </h2>
          <h3 className="mt-10"> Get started with RMM now </h3>
        </div>
        <div className="mr-80">
          <dotlottie-player
            src="https://lottie.host/e0da6032-0b89-4288-933d-73ef175aa0ae/kimYA75GWD.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
      <div className="flex mt-10 justify-between items-center ml-60">
        <div className="w-[400px] ml-40">
          <dotlottie-player
            src="https://lottie.host/a7cb3b91-4713-4e16-8f3e-8d12711be044/ImayZjGmQ9.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="w-[500px] text-left mr-80">
          <h1 className="text-4xl">
            {" "}
            Address issues before they become problems{" "}
          </h1>
          <h2 className="mt-10">
            {" "}
            Through Remote Monitoring and Maintenance managed services, CMIT
            Solutions keeps watch over the health of your devices 24/7 to
            proactively keep them up and running. Plus, automated security and
            performance patch updates improve speed and performance while
            helping to prevent cyber attacks that exploit unpatched
            vulnerabilities.{" "}
          </h2>
        </div>
      </div>

      <div className="h-[700px] relative mt-40">
        <img
          src={Techgirl}
          className="img1 w-full h-full object-cover mix-blend-overlay absolute"
        />
        <div className="p-40">
          <h1 className="text-white text-2xl mt-10 "> MANAGED SERVICES </h1>
          <h2 className="text-white text-6xl mt-10"> Always-on Technology </h2>
          <button className="bg-red-500 text-white text-md rounded-lg w-60 h-10 mt-20">
            Request a meeting
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
