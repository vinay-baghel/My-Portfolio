import React, { useState } from 'react'
import { useEffect } from 'react'
 import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './pages/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projectss from './components/Projectss'
import Education from './components/Education'




 const App = () => {
  const [btn, setbtn] = useState(false)
const toggle = () => setbtn(!btn);
  
    useEffect(() => {
  AOS.init({
    duration: 800, // animation duration
    once: false, 
    offset:120,  // false => animation chale har baar jab visible ho
  });
}, []);
   return (
     <div   className='bg-black'>
  
    <Routes>
      <Route path='/' element={<Navbar/>}></Route>
       
    </Routes>
  
     <Routes>
<Route path='/' element={ <Home/>}></Route>
     </Routes>
 
      <Routes>
          <Route path='/' element={<Skills/>}></Route>
     </Routes>

{/* <div className='h-0.5 w-[70%] bg-gradient-to-tr from-[#ff6a00] via-[#ee0979] to-[#4a00e0]  mx-auto'></div> */}
      <Routes></Routes>
     <Routes>
          <Route path='/' element={<Projects/>}></Route>
     </Routes>
     {/* {/* <div className='h-0.5 w-[90%] bg-gray-500 mx-auto'></div> */}
    
     
      <Routes>
          <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
      <Routes>
          <Route path='/projects' element={<Projectss/>}></Route>
     </Routes>
       <Routes>
          <Route path='/education' element={<Education/>}></Route>
     </Routes>
         <Routes>
          <Route path='/' element={<Footer/>}></Route>
     </Routes>
     
     </div>
   )
 }
 
 export default App