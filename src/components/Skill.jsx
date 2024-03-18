import React from "react";
import html from "../assests/html.png";
import css from "../assests/css.png";
import js from "../assests/javascript.png";
import react from "../assests/react.png";   
import Github from "../assests/github.png";
import tailwind from "../assests/tailwind.png";

const Skill = () => {
  return (
    <div name="skills" className=" bg-[#0a192f] text-gray-300 flex flex-col items-center justify-around w-full h-screen">
        
      {/* conatiner */}
      <div className=" mx-w-[800px] mx-auto p-4 flex flex-col w-full  justify-around ">
        <div className="mx-auto">
          <p className="text-4xl inline border-b-4 border-pink-600 font-bold  ">
            Experience
          </p>
          <p className="py-4">
            // These are the technologies I have worked with
          </p>
        </div>
      </div>
      <div className="mx-auto w-[85%] grid grid-cols-2 text-center sm:grid-cols-3 gap-4">
        <div className="my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={html} alt="HTML logo"></img>
          <p className="my-4">HTML</p>
        </div>
        <div className=" my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={css} alt="HTML logo"></img>
          <p className="my-4">CSS</p>
        </div>
        <div className=" my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={js} alt="HTML logo"></img>
          <p className="my-4">JavaScript</p>
        </div>
        <div className=" my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={react} alt="HTML logo"></img>
          <p className="my-4">React</p>
        </div>
        <div className=" my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Github} alt="HTML logo"></img>
          <p className="my-4">Github</p>
        </div>
        <div className=" my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={tailwind} alt="HTML logo"></img>
          <p className="my-4">Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
