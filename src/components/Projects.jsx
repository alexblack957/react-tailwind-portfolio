import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className='w-full bg-[#f9f9f9]'>
        <div className='py-8 md:py-32 px-8 max-w-[1000px] mx-auto justify-center flex flex-col '>
            <div className="pb-2">
                <h1 className='text-l  font-[800] text-center md:text-xl py-1  text-secondary'>PROJECTS</h1>
                <p className='text-center font-[500]  text-[18px]'> Formal education is great and all - but I'm most proud of my personal projects.</p>
            </div>
            <div className='bg-primary text-white rounded-xl py-2 px-4 mt-4 mb-2 md:py-3 flex flex-row justify-between'>
                <h2 className=' font-[600]'>GameLoaded</h2>
                <h2 className=' font-[600]'>2019 - Present</h2>
            </div>

            <div className='bg-white text-primary rounded-xl py-8 px-4 flex flex-col justify-between'>
                <p className=' font-[600]'>GameLoaded is a video game development studio founded by my brother, Lucas. The company has 8 full-time employees and has amassed over 20 million hours of gameplay from players of our games.</p>

            </div>
        </div>
    </div>
  )
}

export default Projects