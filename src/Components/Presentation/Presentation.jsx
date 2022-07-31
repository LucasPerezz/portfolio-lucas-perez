import React from "react";
import "./Presentation.css";
import PRESENTATION_IMAGE from "../../assets/presentationImg.png";

const Presentation = () => {
  return (
    <div
      className="w-4/5 max-w-4xl flex flex-col justify-center gap-10 mx-auto min-h-screen"
      id="presentation"
    >
      <div className="w-full flex flex-col gap-2 mx-auto justify-center items-center mt-8">
        <p className="text-center text-lg sm:text-xl lg:text-2xl font-bold nameAnimate">
          Hola, soy <span className="text-emerald-400">Lucas Perez</span>
        </p>
        <p className="text-center text-gray-600 text-sm lg:text-lg">
          FrontEnd Developer
        </p>
      </div>
      <div className="mt-8">
        <img
          src={PRESENTATION_IMAGE}
          alt="portfolio"
          className="w-full max-w-3xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Presentation;
