import React from 'react';
import business from '../assets/business.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import whatsapp from '../assets/whatsapp.png';
import email from '../assets/email.png';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-600 mt-auto">
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1">

          {/* Logo Section */}
          <div className="flex items-center justify-center ">
            <img src={business} alt="Portfolio logo" className="w-8 h-8" />
           
          </div>

              {/* Copyright */}
      <div className=" text-gray-400 text-center py-4 text-sm">
        © {new Date().getFullYear()} Vinay. All rights reserved.
      </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 justify-center lg:justify-end">
           <a href="https://www.linkedin.com/in/vinay-baghel-b2859436a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className='h-7 w-7' src={linkedin} alt="" /></a>
           <a href="https://github.com/vinay-baghel"><img className='h-7 w-7' src={github} alt="" /></a>
           <a href="https://wa.me/7582001178"><img className='h-7 w-7' src={whatsapp} alt="" /></a>
              <a href="mailto:vinay.baghel0210@gmail.com"><img className='h-7 w-7' src={email} alt="" /></a>
          </div>

        </div>
      </div>

  
    </footer>
  );
};

export default Footer;
