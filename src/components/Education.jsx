import React from 'react';
 // Center timeline logo (can be reused or different)

const Education = () => {
  return (
    <div className='w-full bg-black flex flex-col md:flex-row justify-center items-start gap-4 p-4 min-h-screen relative'>

     
      <div className="flex flex-col items-center w-full md:w-96 mt-10" 
        data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="2000">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicfEl7hal2Twpn_0d7PcJMy1fLFTaFgonZjx8HAoHDoOBY9zYmL8qsdaXXCvh5YL45DQ&usqp=CAU" alt="MITS Logo" className="w-24 h-24 mb-4 rounded-full border-2 border-white object-cover" />
        <div className="text-white flex flex-col items-center border-2 h-auto md:h-96 w-full shadow-2xl cursor-pointer hover:bg-white hover:text-black p-6 rounded-xl transition-all duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Master of Computer Applications – MCA</h2>
          <p className="text-sm mb-1">MITS College, Gwalior</p>
          <p className="text-sm mb-2">Aug 2025 – Present</p>
          <p className=" text-sm text-justify ">
            I am currently pursuing my Master's degree (MCA) at MITS College, Gwalior, affiliated with RGPV. My focus is on strengthening my skills in software development, web technologies, and computer science fundamentals. I am actively learning technologies like MERN stack, API integration. This journey is helping me grow professionally and technically.
          </p>
        </div>
    
      </div>

  
      <div className='hidden md:flex flex-col items-center'>
      
        <div className='bg-gradient-to-r from-blue-500 rounded-full w-2 h-[150vh]'></div>
      </div>

    
      <div className="flex flex-col items-center w-full md:w-96 mt-10 md:mt-[600px]"
        data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="2000">
        <img src="https://jiwaji.edu/wp-content/uploads/2021/12/logo-2.png.webp" alt="Jiwaji Logo" className="w-24 h-24 mb-4 rounded-full border-2 border-white object-cover" />
        <div className="text-white flex flex-col items-center border-2 h-auto md:h-96 w-full shadow-2xl cursor-pointer hover:bg-white hover:text-black p-6 rounded-xl transition-all duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Bachelor of Computer Applications – BCA</h2>
          <p className="text-sm mb-1">Adarsh Science College, Gwalior (Jiwaji University)</p>
          <p className="text-sm mb-2">March 2022 – June 2025</p>
          <p className="text-sm mb-2">Grade: 7.52 CGPA</p>
          <p className=" text-sm text-justify">
            I have completed my Bachelor's degree in Computer Applications from Adarsh Science College, Gwalior, affiliated with Jiwaji University. During my BCA, I developed a strong foundation in programming, database management, and computer science concepts. This phase sparked my passion for full-stack development and software engineering.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Education;
