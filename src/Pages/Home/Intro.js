import React from "react";

function Intro() {
  return (
    <div className="bg-gray-200 mt-10 flex grid-cols-2 h-screen items-center justify-center mb-40">
      <div className="flex items-center p-80 bg-gray-600">
        <div className="">
          <h1 className="text-3xl font-semibold text-gray-200">
            Innovative and modern IT solutions
            <b className="text-5xl text-green-500"> as necessity </b> for
            business growth and success
          </h1>
        </div>
        <div className="">
          <dotlottie-player
            src="https://lottie.host/34afe69f-6301-4630-9828-c30b490babec/6aoLMXNfAC.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Intro;
