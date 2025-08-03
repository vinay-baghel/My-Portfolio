import React from 'react'
import { Link } from 'react-router-dom'
import ready from '../assets/ready.mp4.gif'
import Projectss from './Projectss'
import Education from './Education'

const Projects = () => {
    
    return (

        <div className=" flex items-center mt-96 md:mt-20 flex-col  w-full min-h-screen relative px-2" id='project'   
          >
  <h1 className="text-3xl sm:text-3xl font-bold underline underline-offset-8 text-white mb-12">
        <span className="text-yellow-500">&lt;/</span>Projects<span className="text-yellow-500">&gt;</span>
      </h1>
   <Projectss/>

   <div className='flex  flex-col justify-center items-center' id='education'>
      <h1 className="text-3xl sm:text-3xl font-bold underline underline-offset-8 text-white mb-12">
        <span className="text-yellow-500">&lt;/</span>Education<span className="text-yellow-500">&gt;</span>
      </h1>
    <Education/>
   </div>
    
           <Link to="/contact"> <button className=' rounded font-bold bg-white text-black text-xs hover:bg-sky-500 hover:text-white b  mb-5  px-4 py-3'>Get in Touch</button></Link>
        </div>

    )
}

export default Projects