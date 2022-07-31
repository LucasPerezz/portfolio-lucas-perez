import React from "react";
import ME from "../../assets/aboutMe.png";

const AboutMe = () => {
  return (
    <div className="w-3/4 max-w-6xl mx-auto min-h-screen py-24 hover:scale-110 hover:duration-1000" id="aboutMe">
      <h2 className="text-center text-emerald-400 font-bold text-lg sm:text-xl lg:text-2xl mt-24">
        SOBRE MI
      </h2>
      <div className="w-full flex flex-col sm:grid sm:grid-cols-2 sm:place-items-center sm:gap-7 mt-16">
        <img src={ME} alt="" />
        <div class="flex justify-center items-center">
          <p>
            Apasionado por la programacion. Resiliente, competitivo y constante.
            Mi objetivo es poner en practica todos los conocimientos adquiridos
            durante mi formacion academica y poder formar parte de un equipo de
            trabajo que me permita desarrollarme personal y profesionalmente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
