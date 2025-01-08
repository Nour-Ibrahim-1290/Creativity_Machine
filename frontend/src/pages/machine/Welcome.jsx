import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';


import { FaLightbulb } from 'react-icons/fa';




import BannerImage from '../../images/banner-01.png';
import CreativeImage01 from '../../images/welcome-01.png';
import CreativeImage02 from '../../images/welcome-02.png';
import CreativeImage03 from '../../images/welcome-03.png';



function MachineWelcome() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
            {/* Page content */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
              {/* Content */}
              <div>
                {/* Banner */}
                <figure className="mb-6">
                  <img className="w-full rounded-sm" src={BannerImage} width="640" height="160" alt="Meetup" />
                </figure>

                {/** Back Btn */}
                {/* <div className="mb-6">
                  <Link className="btn-sm px-3 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300" to="/community/meetups">
                    <svg className="fill-current text-gray-400 dark:text-gray-500 mr-2" width="7" height="12" viewBox="0 0 7 12">
                      <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
                    </svg>
                    <span>Back To Meetups</span>
                  </Link>
                </div> */}

                {/** Date Banner */}
                {/* <div className="text-sm font-semibold text-violet-500 uppercase mb-2">Mon 27 Dec, 2024 - 9:00 PM -&gt; 10:00 PM</div> */}
                
                {/* Title */}
                <header className="mb-4 font-bold">
                  <h1 className="text-3xl md:text-4xl text-center text-gray-800 dark:text-gray-100 font-bold mb-2">Welcome To The Creativity Zone</h1>
                   <FaLightbulb  className='w-full text-4xl mt-4 mb-4 text-center text-violet-500'/>    
                    <p className='text-center text-lg text-red-700 dark:text-red-500'>
                    Here we get to create innovative ideas and <br/> transform them into creations</p>
                </header>


                {/* Photos */}
                <div>
                  <div className="grid grid-cols-3 gap-4 my-6">
                    <a className="block hover:shadow-lg hover:shadow-slate-300" href="#0">
                      <img className="w-full rounded-sm" src={CreativeImage01} width="203" height="152" alt="Meetup photo 01" />
                    </a>
                    <a className="block hover:shadow-lg hover:shadow-slate-300" href="#0">
                      <img className="w-full rounded-sm" src={CreativeImage02} width="203" height="152" alt="Meetup photo 02" />
                    </a>
                    <a className="block hover:shadow-lg hover:shadow-slate-300" href="#0">
                      <img className="w-full rounded-sm" src={CreativeImage03} width="203" height="152" alt="Meetup photo 03" />
                    </a>
                  </div>
                </div>
                
                
                
                
                {/* Post content */}
                <div className='mt-10 text-center'>
                  <h2 className="text-4xl text-center leading-snug text-red-800 dark:text-red-400 font-bold mb-4">Machine Details</h2>
                </div>
                <hr className="my-6 border-t border-gray-100 dark:border-gray-700/60" />


                {/* Creativity List */}
                {/* List */}
                <div className='flex justify-center items-center'>
                <ul className="-my-2">
                        {/* List item */}
                        <li className="relative py-2">
                          <div className="flex items-center mb-1">
                            <div className="absolute left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                            <div className="absolute left-0 rounded-full bg-red-500" aria-hidden="true">
                              <svg className="fill-current text-white" width="20" height="20" viewBox="0 0 20 20">
                                <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 pl-9">Innovate new Ideas</h3>
                          </div>
                          <div className="pl-9">Walk down 4 Stages to insentivate your creativity and start listing out ideas.</div>
                        </li>
                        {/* List item */}
                        <li className="relative py-2">
                          <div className="flex items-center mb-1">
                            <div className="absolute left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                            <div className="absolute left-0 rounded-full bg-red-500" aria-hidden="true">
                              <svg className="fill-current text-white" width="20" height="20" viewBox="0 0 20 20">
                                <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 pl-9">Test your ideas and choose one</h3>
                          </div>
                          <div className="pl-9">Discuss and Test your ideas to choose top applicable idea.</div>
                        </li>
                        {/* List item */}
                        <li className="relative py-2">
                          <div className="flex items-center mb-1">
                            <div className="absolute left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                            <div className="absolute left-0 rounded-full bg-red-500" aria-hidden="true">
                              <svg className="fill-current text-white" width="20" height="20" viewBox="0 0 20 20">
                                <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 pl-9">Levrage AI to transform your idea into product</h3>
                          </div>
                          <div className="pl-9">Use AI to generate image for your idea, pick up a name, and logo for your product.</div>
                        </li>
                        {/* List item */}
                        <li className="relative py-2">
                          <div className="flex items-center mb-1">
                          <div className="absolute left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                            <div className="absolute left-0 rounded-full bg-red-500" aria-hidden="true">
                              <svg className="fill-current text-white" width="20" height="20" viewBox="0 0 20 20">
                                <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 pl-9">Put your product on the market</h3>
                          </div>
                          <div className="pl-9">Get marketing and business ideas to help you develop yur product if you wish to.</div>
                        </li>
                        {/* List item */}
                        <li className="relative py-2">
                          <div className="flex items-center mb-1">
                            <div className="absolute left-0 rounded-full bg-red-500" aria-hidden="true">
                              <svg className="fill-current text-white" width="20" height="20" viewBox="0 0 20 20">
                                <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 pl-9">Show off and establish a creative history</h3>
                          </div>
                          <div className="pl-9">Save your Idea and share it with your friends.</div>
                        </li>
                    </ul>
                </div>

                {/* Action Button */}
                <div className='w-full flex justify-center items-center mt-10'>
                <div className="bg-white dark:bg-gray-800 p-5 shadow-sm rounded-xl lg:w-72 xl:w-80">
                  <div className="space-y-2">
                    <Link to="/machine/instructions">
                    <button className="btn w-full text-xl font-bold bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                    <svg className="fill-red-500 font-extrabold shrink-0" width="24" height="24" viewBox="0 0 16 16">
                        <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                      </svg>
                      <span className="ml-2 mr-2"> Start a new Innovation </span>
                      
                    </button>
                    </Link>
                  </div>
                </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MachineWelcome;