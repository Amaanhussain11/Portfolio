import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f]  text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="grid grid-cols-2 max-w-[1000px] w-full  gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="grid sm:grid-cols-2 max-w-[1000px] w-full  gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold `">
                <p>Hi, I'm Amaan nice to meet you. Please take a look around</p>
            </div>
            <div className="">
                <p>I'm Passionate about building excellent web application and love solving basic math 
                    and DSA problems. I would love to be the part of your team to create and deploy amazing 
                    software components, that will help the society in many ways.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
