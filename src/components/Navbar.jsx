import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-white px-12 shadow-[0_0_10px_0_rgba(0,0,0,0.09)] text-primary z-[50]">
        <h3 className="font-bold text-xl cursor-pointer select-none  md:hover:scale-105"><Link to="home" smooth={true} duration={500}>alexblack.dev</Link></h3>
        <ul className="hidden md:flex flex-row gap-4 font-[750] text-[18px]">
            <li className='cursor-pointer select-none md:hover:scale-105'><Link to="skills" smooth={true} duration={500} offset={-80}>Skills</Link></li>
            <li className='cursor-pointer select-none md:hover:scale-105'><Link to="projects" smooth={true} duration={500} offset={-80}>Projects</Link></li>
            <li className='cursor-pointer select-none md:hover:scale-105'><Link to="education" smooth={true} duration={500} offset={-80}>Education</Link></li>
            <li className='cursor-pointer select-none md:hover:scale-105'><Link to="contact" smooth={true} duration={500} offset={-80}>Contact</Link></li>
        </ul>
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
            <li className='py-4 text-2xl font-[700] cursor-pointer select-none'><Link to="skills" onClick={handleClick} smooth={true} duration={500} offset={-80}>Skills</Link></li>
            <li className='py-4 text-2xl font-[700] cursor-pointer select-none'><Link to="projects" onClick={handleClick} smooth={true} duration={500} offset={-80}>Projects</Link></li>
            <li className='py-4 text-2xl font-[700] cursor-pointer select-none'><Link to="education" onClick={handleClick} smooth={true} duration={500} offset={-80}>Education</Link></li>
            <li className='py-4 text-2xl font-[700] cursor-pointer select-none'><Link to="contact" onClick={handleClick} smooth={true} duration={500} offset={-80}>Contact</Link></li>
        </ul>

    </div>
  )
}

export default Navbar