import React, {useRef} from 'react'
import gradImage from '../assets/graduation.jpg'
import Confetti, { ReactConfetti } from 'react-confetti'
import AnimateOnScroll from '../assets/AnimateOnScroll.tsx'



const Education = () => {
  return (
    <div name='education' className='w-full'>    
      <AnimateOnScroll>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col-reverse md:flex-row-reverse justify-center items-center h-full gap-2 md:gap-12 py-8 md:py-24'>
          <div className='text-primary font-[700] max-w-[450px] align-top'>
            <h1 className='text-l text-center md:text-xl pt-2 md:text-left text-secondary'>EDUCATION</h1>
            <h1 className='text-xl text-center md:text-2xl py-1 md:text-left'>Bachelor of Computer Science, <br></br>University of Queensland</h1>
            <p className='text-center pt-1 pb-8 font-[500] md:text-left text-l md:text-[18px]'> Graduated in December, 2023 with a major in Cybersecurity. Exchange semester at the University of California, Los Angeles.</p>
          </div>
          <div>
            <img src={gradImage} className="w-[500px] rounded-xl"></img>
          </div>
          
        </div>
      </AnimateOnScroll>
    </div>
  )
}

export default Education