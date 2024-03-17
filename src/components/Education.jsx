import React from 'react'
import gradImage from '../assets/graduation.jpg'
const Education = () => {
  return (
    <div name='education' className='w-full'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col-reverse md:flex-row-reverse justify-center items-center h-full gap-2 md:gap-12 py-8 md:py-24'>
          <div className='text-primary font-[800] max-w-[500px] align-top'>
            <h1 className='text-l text-center md:text-xl pt-2 md:text-left text-secondary'>EDUCATION</h1>
            <h1 className='text-xl text-center md:text-2xl py-2 md:text-left'>Bachelor of Computer Science, University of Queensland</h1>
            <p className='text-center  pb-8 font-[500] md:text-left text-l md:text-[18px]'> Graduated December, 2023 with a major in Cybersecurity. Selected to undertake a semester exchange to the University of California, Los Angeles.</p>

          </div>
          <div>
            <img src={gradImage} className="w-[500px] rounded-xl"></img>
          </div>
          
        </div>
    </div>
  )
}

export default Education