import React from "react";

const WorkCard = ({ image, title, demoLink, codeLink }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
      }}
      className="content-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto transition-all duration-300 hover:scale-105"
    >
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 w-full h-full flex flex-col justify-center items-center rounded-md p-4">
        <span className="text-2xl font-bold text-gray-800 tracking-wider text-center mb-4">
          {title}
        </span>
        <div className="flex gap-4">
          <a href={demoLink} target="_blank" rel="noreferrer">
            <button className="px-4 py-2 rounded-lg bg-pink-600 text-white font-semibold shadow-md hover:bg-pink-700">
              Demo
            </button>
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer">
            <button className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold shadow-md hover:bg-gray-900">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
