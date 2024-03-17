import React from 'react'
import '../css/home.css'
import { CiLinkedin } from 'react-icons/ci'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#f9f9f9]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col-reverse md:flex-row justify-center items-center h-full gap-2 md:gap-12'>
          <div className='text-primary font-[700] max-w-[500px] align-top'>
            <h1 className='text-4xl text-center md:text-5xl py-6 md:text-left'>Hey there! I'm Alexander 👋</h1>
            <p className='text-center font-[500] md:text-left text-[18px]'> I'm an aspiring full-stack developer, and this website will detail why you should hire me. Brisbane, Australia.</p>
            <div className='py-4 text-3xl text-secondary flex justify-center md:justify-start'> <CiLinkedin /></div>
          </div>
          <div className='max-w-[350px] max-h-[350px] hero-img z-4'>
          </div>
          
        </div>

    </div>
  )
}

export default Home