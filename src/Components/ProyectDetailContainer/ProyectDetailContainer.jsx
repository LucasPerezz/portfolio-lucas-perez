import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useData } from "../context/Data";
import ProyectDetail from "../ProyectDetail/ProyectDetail";
import ARROW from "../../assets/arrowLeft.png";

const ProyectDetailContainer = () => {
  const { name } = useParams();
  const { proyectsData } = useContext(useData);

  const proyect = proyectsData.filter((item) => item.name === name);
  console.log(proyect);

  return (
    <div>
      <Link to={"/"}>
        <div className="w-max h-max absolute top-5 left-5 lg:top-10 lg:left-10">
          <img
            src={ARROW}
            alt="arrow left"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
          />
        </div>
      </Link>

      {proyect.map((item) => {
        return <ProyectDetail detail={item} />;
      })}
    </div>
  );
};

export default ProyectDetailContainer;
