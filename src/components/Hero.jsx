import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name ="home" className=" bg-[#0a192f] h-screen w-full">

        {/* conatiner */}
        <div  className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Amaan Hussain</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a React Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a React Developer but also a problem solver, specelization in
                building exceptionally well web-application and in solving problmes 
                based on basic Maths and Data Strucutres and Algorithms.
            </p>
            <div className="">
                <button className='text-white group border-2 flex items-center px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600
                '>View work 
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span></button>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
