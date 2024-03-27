import React from 'react'
import { FiGithub, FiLinkedin} from "react-icons/fi";


const Footer = () => {
  return (
    <div name='footer' className='w-full bg-primary'>
    <div className='py-12 md:py-24 px-8 max-w-[1000px] mx-auto justify-center flex flex-col'>
      <div className="pb-2 justify-between flex flex-row items-center">

          <h1 className='text-sm text-left md:text-xl  text-white font-[700] '>Designed and made<br className='flex md:hidden'></br> by Alexander Black.</h1>
          <div className='py-4 text-2xl text-white flex justify-center md:justify-start gap-2'> 
            <div className="hover:text-secondary hover:scale-105 cursor-pointer select-none pb-1">
            <a href="https://linkedin.com/in/alexanderblack957"  target="_blank">< FiLinkedin/> </a>
            </div> 
            <div className="hover:text-secondary hover:scale-105 cursor-pointer select-none pb-1">
              <FiGithub/>
            </div>  
          </div>
      </div>
    </div>
</div>
  )
}

export default Footer