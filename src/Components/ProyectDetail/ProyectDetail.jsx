import React from "react";

const ProyectDetail = ({ detail }) => {
  return (
    <div className="w-full sm:w-4/5 lg:w-3/4 mx-auto min-h-screen flex flex-col lg:grid sm:grid-cols-2 lg:place-items-center mt-28">
      <div className="w-4/5 lg:w-full mx-auto">
        <img src={detail.image} alt="" className="w-full shadow-xl" />
      </div>
      <div className="flex flex-col justify-center items-center gap-16 w-4/5 mx-auto">
        <div className="mb-8 mt-8">
          <h2 className="text-center text-xl sm:text-2xl lg:text-4xl font-semibold italic text-slate-800">
            {detail.name}
          </h2>
        </div>
        <div className="flex gap-5 mx-auto flex-wrap sm:w-3/4 justify-center">
          {detail.languages.map((language) => {
            return (
              <p className="px-2 sm:px-3 border-2 text-xs sm:text-lg rounded-md border-gray-200 shadow-sm">
                {language}
              </p>
            );
          })}
        </div>
        <div className="flex justify-center gap-12">
          <button className="border-2 px-6 sm:py-1 rounded-lg border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-sm sm:text-lg lg:text-xl shadow">
            <a href={detail.github}>Github</a>
          </button>
          <button className="border-2 px-6 sm:py-1 rounded-lg border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-sm sm:text-lg lg:text-xl shadow">
            <a href={detail.demo}>Demo</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProyectDetail;
