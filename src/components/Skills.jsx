import React from "react";
import SkillsSection from "./SkillsSection";
import About from "./About";

const Skills = () => {
  return (
    <div
      className="  flex h-[100vh] w-full  mt-96 md:mt-20 flex-col justify-center items-center"
      id="skill"
    >
      
   
 <h1 className="text-3xl sm:text-3xl font-bold underline-offset-8 underline  text-white ">
        <span className="text-yellow-500">&lt;/</span>Skills<span className="text-yellow-500">&gt;</span>
      </h1>
    
      <div className="   w-full sm:w-[100%] md:w-[100%]flex-col  mt-10 md:flex items-center  justify-center  text-white  ">
        <SkillsSection />
      </div>
      <div></div>
    </div>
  );
};

export default Skills;
