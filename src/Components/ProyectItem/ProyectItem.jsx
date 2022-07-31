import React from "react";
import { Link } from "react-router-dom";

const ProyectItem = ({ proyect }) => {
  return (
    <div className="w-4/5 mx-auto sm:w-full shadow-lg hover:transition-all hover:bg-slate-100 p-10 rounded-3xl">
      <Link to={`/${proyect.name}`}>
        <div className="w-full">
          <img src={proyect.image} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-center italic mt-6 text-lg lg:text-xl font-semibold">
            {proyect.name}
          </p>
          <div className="flex gap-5 mx-auto flex-wrap sm:w-3/4 justify-center">
            {proyect.languages.map((language) => {
              return (
                <p className="px-2 sm:py-1 sm:px-3 border-2 text-xs sm:text-sm rounded-md border-gray-200 shadow-sm">
                  {language}
                </p>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProyectItem;
