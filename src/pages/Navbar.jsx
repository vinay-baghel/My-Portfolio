import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../assets/close.png";
import menu from "../assets/menu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className={`w-full fixed top-0 z-50 ${isOpen ? "bg-color6" : "bg-transparent"} transition-colors duration-300`}>
      <nav className="flex justify-between items-center px-6 sm:px-10 md:px-40 lg:px-60 mt-3 py-4 h-16">
        <div className="flex items-center">
          <h2 className="text-blue-400 text-xl bg-font font-bold">
            &lt; &gt;<span className="text-gray-400">Vinay</span> &lt;/&gt;
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold items-center text-sky-700">
       <div className="flex gap-4">
  <a href="#home" className="flex flex-col items-center group">
    <span className="text-gray-400 capitalize">About</span>
    <div className="bg-red-500 h-1 w-16 mt-1 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
  </a>

  <a href="#skill" className="flex flex-col items-center group">
    <span className="text-gray-400 capitalize">Skill</span>
    <div className="bg-red-500 h-1 w-16 mt-1 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
  </a>

  <a href="#project" className="flex flex-col items-center group">
    <span className="text-gray-400 capitalize">Project</span>
    <div className="bg-red-500 h-1 w-16 mt-1 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
  </a>

   <a href="#education" className="flex flex-col items-center group">
    <span className="text-gray-400 capitalize">Education</span>
    <div className="bg-red-500 h-1 w-16 mt-1 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
  </a>
</div>

          <li>
            <Link to="/contact">
              <button className="text-black bg-yellow-600 rounded px-4 py-2 hover:bg-yellow-700 transition duration-300">
                Contact
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            <img className="w-6 h-6" src={isOpen ? close : menu} alt="menu-toggle" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col gap-5 p-6 bg-font text-sky-500 font-semibold">
          {["about", "skill", "project"].map((item) => (
            <a href={`#${item}`} key={item}>
              <li className="hover:text-gray-300 transition duration-300 capitalize">{item}</li>
            </a>
          ))}
          <li>
            <Link to="/contact">
              <button className="bg-yellow-600 text-black px-4 py-2 rounded hover:bg-yellow-700 transition duration-300">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
