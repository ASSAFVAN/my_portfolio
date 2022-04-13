import React from 'react';
import {Link} from "react-scroll";
import {HiOutlineChevronDown} from "react-icons/hi";
import "./index.css";

function Home() {
  return (
    <section className='flex flex-col justify-center items-center relative h-screen text-xl tracking-tighter bg-gray-900 section-1 md:text-4xl'>
      <div id="stars" className='self-start'></div>
      <div id="stars2" className='self-start'></div>
      <div id="stars3" className='self-start'></div>

      <div className='w-fit flex flex-col justify-center items-center text-center'>
        <h1 className="py-2 w-fit ">
        &lt;p&gt;Hello, I'm <span className='font-semibold text-teal-500'>Assaf Vanunu.</span>
        </h1>
        <h1 className="py-2">I'm a full stack web developer.&lt;/p&gt;</h1>
      </div>

      <br/>
      <div className='view-work'>
        <p className='text-teal-200'>View my work</p>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer flex flex-col justify-center items-center text-center chevron-container">
          <HiOutlineChevronDown className='p-2 text-4xl text-teal-500 chevron md:text-6xl'/>
          <HiOutlineChevronDown className='p-2 text-4xl text-teal-500 chevron md:text-6xl'/>
          <HiOutlineChevronDown className='p-2 text-4xl text-teal-500 chevron md:text-6xl'/>
        </Link>
      </div>
    </section>
  )
}

export default Home