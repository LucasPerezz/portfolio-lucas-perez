import React, { useContext } from "react";
import { useData } from "../context/Data.js";
import ProyectItem from "../ProyectItem/ProyectItem";
import "./Proyects.css";

const Proyects = () => {
  const { proyectsData } = useContext(useData);

  return (
    <div className="w-full min-h-screen max-h-max" id="recentProyects">
      <h2 className="text-center text-emerald-400 font-bold text-lg sm:text-xl lg:text-2xl mt-24">
        PROYECTOS RECIENTES
      </h2>
      <div className="w-full sm:w-3/4 mx-auto mt-20 flex flex-col sm:grid sm:grid-cols-1 sm:place-items-center lg:grid-cols-2 lg:place-items-center gap-5 mb-32">
        {proyectsData.map((proyect) => {
          return <ProyectItem proyect={proyect} key={proyect.id} />;
        })}
      </div>
    </div>
  );
};

export default Proyects;
