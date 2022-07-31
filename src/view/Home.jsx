import React from "react";
import Presentation from "../Components/Presentation/Presentation";
import Proyects from "../Components/Proyects/Proyects";
import Skills from "../Components/Skills/Skills";
import AboutMe from "../Components/AboutMe/AboutMe";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Presentation />
      <AboutMe />
      <Skills />
      <Proyects />
    </>
  );
};

export default Home;
