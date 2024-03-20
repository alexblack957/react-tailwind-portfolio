import React from 'react'
import gameLoaded from '../assets/gameloadedsquare.png'
import { FaExternalLinkAlt} from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

const Projects = () => {
  return (
    <div name='projects' className='w-full bg-[#f9f9f9]'>
        <div className='py-8 md:py-32 px-8 max-w-[1000px] mx-auto justify-center flex flex-col '>
            <div className="pb-2">
                <h1 className='text-l  font-[800] text-center md:text-xl py-1  text-secondary'>PROJECTS</h1>
                <p className='text-center font-[500]  text-primary text-[18px]'> Formal education is great - but I'm most proud of my personal projects that have brought value to people's lives.</p>
            </div>
            <div className='bg-primary text-white rounded-xl py-2 px-4 mt-4 mb-2 md:py-3 flex flex-row justify-between'>
                <h2 className=' font-[600]'>GameLoaded</h2>
                <h2 className=' font-[600]'>2019 - Present</h2>
            </div>

            <div className='bg-white text-primary rounded-xl py-4 px-6 flex flex-col gap-8  md:flex-row justify-between'>
                <div>
                    <h1 className='text-sm  font-[800] text-left md:text-l py-1  text-secondary'>Overview</h1>
                    <p className=' font-[600]'>Video game development studio founded by my brother.
                    Amassed over 250 million plays across all projects.</p><br></br>

                    <h1 className='text-sm  font-[800] text-left md:text-l py-1  text-secondary'>My Role</h1>
                    <ul className='font-[600] list-disc text-[#555] list-outside px-4'>
                        <li> Implemented a database that stores user information for over 100k+ players via Google Firebase.</li>
                    </ul>

                </div>
                <div className='flex flex-row md:flex-col gap-4 '>
                    <img className='w-[80px] md:w-[150px] 'src={gameLoaded}></img>
                    <div>
                        <div className='flex flex-row gap-2 items-top'>
                            <div className='pt-1'>
                                <FaExternalLinkAlt />
                            </div>
                            <p>GameLoaded.net</p>
                        </div>
                        <div className='flex flex-row gap-2 items-top'>
                        <div className='pt-1'>
                                <IoMdPin />
                            </div>
                            <p>Brisbane, Australia</p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Projects