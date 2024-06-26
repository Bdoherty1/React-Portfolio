import React from 'react'
import heroimg from '../assets/imgs/heroimg.jpg';
import { Link } from 'react-scroll';


function Hero() {
  return (
    <div className='grid items-center grid-cols-1 pt-10 md:grid-cols-2'>
      <div className='py-10 mb-10'>
        <p className='py-2 text-4xl font-bold text-white sm:text-7xl'>My Name Is Brian Doherty</p>
        <p className='text-4xl font-bold text-blue-500 sm:text-7x'>I'm Full Stack Developer</p>
        <p className='text-white text-[16px]'>I have experence building and desgining software. Currently i like to work on web aplicaion using technologies like React, Tailwind, Next JS, GraphQL</p>
        
        <div className='flex gap-4 mt-4'>
          <Link 
          to='portfolio'
          smooth 
          druation={500} 
          className='text-white text-[12px] px-3 pb-2 py-2
             rounded-md bg-gradient-to-b from-cyan-200 to-blue-500 hover:scale-105'
             >PORTFOLIO
             </Link>
          <Link 
          to='contact'
          smooth
          duration={500}
          className='text-white text-[12px] px-3 pb-2 py-2
             rounded-md bg-gradient-to-b from-cyan-200 to-blue-500 hover:scale-105'>CONTACT ME</Link>
        </div>
      </div>

      <div className='flex justify-center '>
        <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-bl from-slate-500 to-gray-100'>
        <img
            src={heroimg}
            alt="my profile"
            className="h-full w-[250px] object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  )
}


export default Hero