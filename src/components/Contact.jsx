import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div name='skills' className='w-full bg-[#f9f9f9]'>
        <div className='py-12 md:py-24 px-8 max-w-[1000px] mx-auto justify-center flex flex-col'>
          <div className="pb-2">
              <h1 className='text-l  font-[800] text-center md:text-xl py-1  text-secondary'>CONTACT</h1>
              <h1 className='text-xl text-center md:text-2xl  pb-2 text-primary font-[700] '>Reach out to me!</h1>
              <p className='text-center font-[600] text-xl'>If you liked this site I made, then imagine what I could do for you.</p>
              <div className='flex flex-row justify-center items-center gap-4 py-6'>
                    <div className='text-4xl text-secondary shadow-[0_0_10px_0_rgba(0,0,0,0.19)] p-2 rounded-full'>
                        <MdOutlineEmail/>
                    </div>
                    <div>
                        <h3 className='font-[700]'>Email</h3>
                        <p>alexanderblack957@gmail.com</p>
                    </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Contact