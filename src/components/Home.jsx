import React from 'react'
import '../css/home.css'
import { CiLinkedin } from 'react-icons/ci'
import wave from '../assets/wave.png'
import AnimateOnScroll from '../assets/AnimateOnScroll.tsx'
import { FiGithub, FiLinkedin} from "react-icons/fi";



const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#f9f9f9] select-none'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col-reverse md:flex-row justify-center items-center h-full gap-2 md:gap-12'>
          <AnimateOnScroll className='text-primary font-[700] max-w-[500px] align-top'>
            
            <p className='text-4xl  text-primary font-[700] font-[Poppins] tracking-normal text-center md:text-6xl py-2 md:text-left'>Hey there! I'm Alexander <img src={wave}  className=' pb-1 size-[1em] inline hover:animate-waving-hand animate-waving-hand-once' alt="wave"></img></p>
            <p className='text-center font-[500] md:text-left text-xl'> I'm looking for a software engineering position - and this website I made will convince you to hire me.</p>
            <div className='py-4 text-2xl text-secondary flex justify-center md:justify-start flex-row gap-2'> <FiLinkedin/> <FiGithub/></div>
          </AnimateOnScroll>
          <AnimateOnScroll>
          <div className='max-w-[350px] max-h-[350px] hero-img z-4'></div>
          </AnimateOnScroll>
        </div>

    </div>
  )
}

export default Home