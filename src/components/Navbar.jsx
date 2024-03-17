import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-white px-12 shadow-[0_0_10px_0_rgba(0,0,0,0.09)] text-primary z-[50]">
        <h3 className="font-bold text-xl">alexblack.dev</h3>
        <ul className="hidden md:flex flex-row gap-4 font-[750] text-[18px]">
            <li>Home</li>
            <li>Education</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div onClick={handleClick} className='md:hidden z-10 '>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
            <li className='py-4 text-2xl font-[700]'>Home</li>
            <li className='py-4 text-2xl font-[700]'>Education</li>
            <li className='py-4 text-2xl font-[700]'>Projects</li>
            <li className='py-4 text-2xl font-[700]'>Contact</li>
        </ul>

    </div>
  )
}

export default Navbar