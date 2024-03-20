import React from 'react'
import {FaCheck} from 'react-icons/fa'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-white'>
        <div className='py-12 md:py-24 px-8 max-w-[1000px] mx-auto justify-center flex flex-col'>
          <div className="pb-2">
              <h1 className='text-l  font-[800] text-center md:text-xl py-1  text-secondary'>Skills</h1>
              <h1 className='text-xl text-center md:text-2xl  pb-4 text-primary font-[700] '>What I Bring to the Table</h1>
          </div>
          <div className='md:hidden font-[600]'>
            <Tabs>
              <TabList>
               <Tab>Technologies</Tab>
                <Tab>Soft Skills</Tab>
                <Tab>Knowledge</Tab>
              </TabList>

            <TabPanel>
            <ul>
                <li className='flex flex-row gap-2 pt-4 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>Comfortable with C, Java, Python, Lua and SQL</p>
                </li>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>Front-end libraries: React and TailwindCSS (used to build this site) </p>
                </li>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>Version control: git </p>
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
            <ul>
                <li className='flex flex-row gap-2 pt-4 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>A team player who listens, contributes and leads</p>
                </li>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>Always willing to learn from others and innovate</p>
                </li>

                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>Optimistic outlook in all situations</p>
                </li>
              </ul>
            </TabPanel>

            <TabPanel>
              <ul className=''>
                <li className='flex flex-row gap-2 pt-4 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>CS fundamentals, i.e. data structures, algorithms, operating systems and networking</p>
                </li>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div> 
                  <p>Capable of both backend and frontend</p>
                </li>
              </ul>
            </TabPanel>
          </Tabs>
          </div>


          <div className="hidden md:flex md:flex-row justify-between text-lg grow-0 gap-8 font-[500]">
            <div className='basis-1/3'>
              <h1 className='text-center font-[600] text-lg pb-1'>Technologies</h1>
              <ul>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>Comfortable with C, Java, Python, Lua and SQL</p>
                </li>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>Front-end libraries: React and TailwindCSS (used to build this site) </p>
                </li>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>Version control: git </p>
                </li>
              </ul>
            </div>
            <div className='basis-1/3'>
              <h1 className='text-center font-[600] text-lg pb-1'>Soft Skills</h1>
              <ul>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>A team player who listens, contributes and leads</p>
                </li>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>Always willing to learn from others and innovate</p>
                </li>

                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>Optimistic outlook in all situations</p>
                </li>
              </ul>
            </div>
            <div className='basis-1/3'>
              <h1 className='text-center font-[600] text-lg pb-1'>Knowledge</h1>
              <ul className=''>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div>
                  <p>CS fundamentals, i.e. data structures, algorithms, operating systems and networking</p>
                </li>
                <li className='flex flex-row gap-2 pb-2'>
                  <div className='pt-1 text-secondary'><FaCheck/></div> 
                  <p>Capable of both backend and frontend</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills