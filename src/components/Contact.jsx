
import React from "react";
import back from '../assets/back.png'
import { Link } from "react-router-dom";
import Footer from '../pages/Footer'
import business from '../assets/business.png'
const Contact = () => {
  
  return (
    <>
    
    
  
    <section id="contact" className=" flex flex-col w-full bg-color6 min-h-screen px-2 relative "
       data-aos="fade-down"
            data-aos-offset="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
    >
      <Link to='/'>
        <div className='absolute left-5 top-7'>
              
         <img className='w-12 h-12'src={business} alt="" />
        
              </div>
      </Link>
           
     <Link to="/" className="absolute right-5 top-7 flex gap-2 px-2 py-2 bg-blue-950 rounded">
      <button className=" "><img className="w-5 h-5" src={back}  alt="" />
 
     </button>
  <p className=  "text-sky-500 bg-font font-semibold">Return</p>
     </Link> 

        
      <h2 className="text-XS font-semibold text-gray-400  mt-40">CONTACT ME</h2>
          <h2 className="  mb-8 mt-5 text-5xl text-blue-950 sm:text-4xl  bg-font md:text-4xl bg-font font-semibold lg:text-4xl " 
       >Have a question or want to work together? Fill out the form below 👇</h2>
      
      {/* <p className="text-slate-400 mb-8">Have a question or want to work together? Fill out the form below </p> */}
<div className="w-[98%] bg-white mb-5 rounded-xl mx-auto">
   <form 
        action="https://formsubmit.co/vinay.baghel0210@gmail.com" 
        method="POST" 
        className="max-w-xl mx-auto flex flex-col gap-10  p-10 "
      >
       
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
 <h2 className="text-3xl text-blue-950 sm:text-4xl  bg-font md:text-4xl bg-font font-semibold lg:text-4xl">Send Me <br />Message </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name*"
          required
          className="  outline-none  hover:border-blue-500 border-b-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address*"
          required
          className="  outline-none hover:border-blue-500   border-b-2 "
        />
        <textarea
          name="message"
          rows="3"
          placeholder="Your Message here*"
          required
          className="  outline-none hover:border-blue-500  border-b-2 "
        ></textarea>
        <button
          type="submit"
          className="bg-blue-950 px-0.5 w-36 py-3 rounded-xl text-white"
        >
          Send Message
        </button>
      </form>
</div>
   
       
    </section>
    <Footer/>
      </>
  );
};

export default Contact;