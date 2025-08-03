import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import dev from "../assets/dev.svg";

const Home = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-centermt px-6 lg:px-20 py-10 gap-10 min-h-screen bg-black" id="home">
      
      {/* Left Section */}
      <div className="text-center lg:text-left w-full lg:w-1/2" >
        <h2
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-duration="1500"
        >
          Hey, I'm a <span className="text-sky-500">Frontend</span>
        </h2>
        <h2
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2"
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-duration="1500"
        >
          Developer.
        </h2>

        <div
          className="mt-6 w-full  space-y-1"
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-duration="2000"
        >
          <p className="text-white  lg:text-left text-sm sm:text-base">
            Hi, I'm Vinay a freelance web designer from India.
          </p>
          <p className="text-white lg:text-left text-sm sm:text-base">
            I help brands turn their ideas
          </p>
          <p className="text-white lg:text-left text-sm sm:text-base">
            into high quality products.
          </p>
        </div>

        {/* Animated Text */}
        <div className="mt-4 text-sky-500 text-lg sm:text-xl md:text-2xl font-semibold">
          <TypeAnimation
            sequence={[
              "A Web Developer.",
              2000,
              "A React Developer.",
              2000,
              "A Frontend Enthusiast.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Download Button */}
        <a
          href="https://drive.google.com/file/d/16MP5CWACSzysR4-Gzp5wOcfqVc-T523T/view?usp=drivesdk"
          download
          className="inline-block mt-6 px-6 py-3 text-xs sm:text-sm bg-white text-black font-semibold rounded hover:bg-sky-500 hover:text-white transition"
        >
          Download CV
        </a>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={dev}
          alt="Developer"
          className="w-60 sm:w-72 md:w-96 lg:w-[600px] h-auto object-contain"
          data-aos="fade-down"
          data-aos-offset="150"
          data-aos-duration="1500"
        />
      </div>
    </div>
  );
};

export default Home;
