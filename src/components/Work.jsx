import React from "react";
import order from "../assests/order.png";
import ceso from "../assests/ceso.png";
import vowhelm from "../assests/VoWHELM.png";
import WorkCard from "./Workcard";

const Work = () => {
  return (
    <div name="work" className="w-full bg-[#0a192f] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WorkCard
            image={order}
            title="Canteen Order App"
            demoLink="https://canteen-order-app.vercel.app/"
            codeLink="https://github.com/Amaanhussain11/Canteen-Order-App"
          />
          <WorkCard
            image={ceso}
            title="Agewell Project"
            demoLink="/"
            codeLink="/"
          />
          <WorkCard
            image={vowhelm}
            title="VoWHELM Project"
            demoLink="/"
            codeLink="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
