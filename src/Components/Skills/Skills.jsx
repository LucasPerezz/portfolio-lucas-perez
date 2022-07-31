import React, { useContext } from "react";
import { useData } from "../context/Data.js";
import "./Skills.css";

const Skills = () => {
  const { languageData } = useContext(useData);

  return (
    <>
      <h2
        className="text-center text-emerald-400 font-bold text-lg sm:text-xl lg:text-2xl mt-24"
        id="skills"
      >
        SKILLS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-3/4 place-items-center mx-auto gap-12 min-h-screen mt-24">
        {languageData.map((language) => {
          return (
            <div className="w-max h-max p-2 hover:shadow-md rounded-xl">
              <img
                src={language.image}
                alt=""
                className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
