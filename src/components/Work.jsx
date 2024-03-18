import React from "react";
import wheather from "../assests/wheather.jpg";
import tailwind from "../assests/tailwind.png";
// import '../index.css';

const Work = () => {
  return (
    <div name="work" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto flex sm:px-12 flex-col justify-center  bg-[#0a192f]">
        <div className="  my-8 pb-8 mx-auto md:mt-48 ">
          <p className="text-4xl font-bold inline  border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 md:h-screen  lg:grid-cols-4 gap-3 p-4">
          <div
            style={{
              backgroundImage: `url(${wheather})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
            className="content-div shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-100">
              <span className="text-2xl font-bold text-gray-700 tracking-wider">
                JavaScript App
              </span>
              <div className="">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${wheather})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
            className="content-div shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto "
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-100 ">
              <span className="text-2xl font-bold text-gray-700 tracking-wider">
                JavaScript App
              </span>
              <div className="">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>



          

         

        </div>
      </div>
    </div>
  );
};

export default Work;
