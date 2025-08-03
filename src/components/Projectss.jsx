import React from "react";
import workvibe from "../assets/workvibe.png";
import passwordM from "../assets/passwordM.png";
import portfolio from "../assets/portfolio.png";

const Projectss = () => {
  return (
    <section className="py-16 min-h-screen w-full flex flex-col items-center px-4 sm:px-6 lg:px-10 text-center bg-black"
      data-aos="fade-down"
          data-aos-offset="150"
          data-aos-duration="2000" >
    

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-screen-xl"
      >
        {/* Card 1 */}
        <div className="text-white flex flex-col items-center border h-auto shadow-2xl hover:bg-yellow-500 hover:text-black p-6 rounded-xl transition-all duration-300">
          <img className="object-contain w-full max-h-40" src={workvibe} alt="Workvibe" />
          <p className="my-4 bg-font">
            Responsive personal Consultancy Website built with React and Tailwind CSS.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www-workvibeconsultancycom.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white bg-white text-black hover:bg-black px-4 py-2 hover:underline"
            >
              Live Preview
            </a>
            <a
              href="#"
              className="text-white bg-black px-4 py-2 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="text-white flex flex-col items-center border h-auto shadow-2xl hover:bg-yellow-500 hover:text-black p-6 rounded-xl transition-all duration-300">
          <img className="object-contain w-full max-h-40" src={passwordM} alt="Password Manager" />
          <p className="my-4 bg-font">
            A Responsive Password Manager to store personal passwords. Built with the MERN stack.
          </p>
          <div className="flex gap-6">
            <a
              href="https://password-manager-client-3cqs.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white bg-white text-black hover:bg-black px-4 py-2 hover:underline"
            >
              Live Preview
            </a>
            <a
              href="https://github.com/vinay-baghel/Password-Manager.git"
              className="text-white bg-black px-4 py-2 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="text-white flex flex-col items-center border h-auto shadow-2xl hover:bg-yellow-500 hover:text-black p-6 rounded-xl transition-all duration-300">
          <img className="object-contain w-full max-h-40" src={portfolio} alt="Portfolio" />
          <p className="my-4 bg-font">
            A Personal Portfolio that is fully responsive. Built with React and Tailwind CSS.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white bg-white text-black hover:bg-black px-4 py-2 hover:underline"
            >
              Live Preview
            </a>
            <a
              href="#"
              className="text-white bg-black px-4 py-2 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projectss;
