import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';


import { FaLightbulb } from 'react-icons/fa';
import { GrVirtualMachine } from "react-icons/gr";
import { GiSunbeams } from "react-icons/gi";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaBraille } from "react-icons/fa";
import { FaInstalod } from "react-icons/fa";



import BannerImage from '../../images/banner-01.png';
import CreativeImage01 from '../../images/welcome-01.png';
import CreativeImage02 from '../../images/welcome-02.png';
import CreativeImage03 from '../../images/welcome-03.png';



function MachineInstruct() {

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
                <header className="mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
                    How does the Machine works?
                  </h1>
                   <GrVirtualMachine  className='w-full text-4xl mt-4 mb-4 text-center text-violet-500'/>    
                    <p className='text-center font-serif font-semibold text-red-700 dark:text-red-500'>
                    Read the detailed instructions of how to use <br/> machine works the creativity.</p>
                </header>


                {/* Creativity List */}
                {/* List */}
                <div className='flex justify-center items-center mt-14'>
                <ul className="-my-2 max-w-[65%]">
                        {/* List item */}
                        <li className="relative py-2">
                        
                          <div className="flex items-center mb-1">
                            <div className="absolute left-0 mr-6" aria-hidden="true">
                              <GrVirtualMachine  className='w-full text-2xl mt-4 mb-4 text-center text-red-700 dark:text-red-500'/>
                            </div>
                            <h3 className="text-xl font-bold text-violet-500 pl-9">First: Choose the device which you want to innovate on</h3>
                          </div>
                          <a className="block hover:shadow-lg hover:shadow-slate-300 mx-auto w-4/5 m-6" href="#0">
                            <img className="w-full h-[30vh] rounded-sm mx-auto" src={CreativeImage01} alt="Meetup photo 01" />
                            </a>
                          <div className="pl-14 text-lg text-gray-800 dark:text-gray-100 font-semibold">
                            <ul className="list-disc list-inside">
                              <li>You'll see a Grid of devices to start your innovating journey from.</li>
                              <li>Those words marks the first stage of your innovations.</li>
                              <li>Later on you'll be at liberty to start with any item/device you desire.</li>
                            </ul>
                          </div>
                        </li>

                        {/* List item */}
                        <li className="relative py-6">
                          <div className="flex items-center mb-1">
                          <div className="absolute left-0 mr-6" aria-hidden="true">
                              <GrVirtualMachine  className='w-full text-2xl mt-4 mb-4 text-center text-red-700 dark:text-red-500'/>
                            </div>
                            <h3 className="text-lg font-bold text-violet-500 pl-9">
                              Next, You'll start with the first stage of your journey to Creativity
                            </h3>
                          </div>
                          <a className="block hover:shadow-lg hover:shadow-slate-300 mx-auto w-4/5 m-6" href="#0">
                            <img className="w-full h-[30vh] rounded-sm mx-auto" src={CreativeImage01} alt="Meetup photo 01" />
                            </a>
                          <div className="pl-14 text-lg text-gray-800 dark:text-gray-100 font-semibold">
                            <ul className="list-disc list-inside">
                              <li>Start with Preparation Stage, and move on with them.</li>
                              <li>During Preparation, Investigation, Ultration Stages you'll be presented with trigger words and/or questions.</li>
                              <li>Try and answer this question or associate this trigger word with the device you choose at the first stage.</li>
                              <li>Answering all those questions you'll be presented with numerous creative products resulted from the different modifications you have imagined done throughout the 3 stages.</li>
                            </ul>
                          </div>
                        </li>

                        {/* List item */}
                        <li className="relative py-6">
                          <div className="flex items-center mb-1">
                          <div className="absolute left-0 mr-6" aria-hidden="true">
                              <GrVirtualMachine  className='w-full text-2xl mt-4 mb-4 text-center text-red-700 dark:text-red-500'/>
                            </div>
                            <h3 className="text-lg font-bold text-violet-500 pl-9">
                              Then, Judge your innvative ideas and choose one as your Invention
                            </h3>
                          </div>
                          <a className="block hover:shadow-lg hover:shadow-slate-300 mx-auto w-4/5 m-6" href="#0">
                            <img className="w-full h-[30vh] rounded-sm mx-auto" src={CreativeImage01} alt="Meetup photo 01" />
                            </a>
                          <div className="pl-14 text-lg text-gray-800 dark:text-gray-100 font-semibold">
                            <ul className="list-disc list-inside">
                              <li>you'll go through Ilumination and Evaluation Stages.</li>
                              <li>During Ilumination Stage, you'll be presentaed with several characteristics and questions to use as sorting criteria for your innovations.</li>
                              <li>Out of all the innovations, this is thestage to chosoose only one idea to create a Product out of it.</li>
                              <li>Give your choosen device a name.</li>
                              <li>At the Evaluation Stage, here is your chance to levrage your community inside and outside creativity machine.</li>
                              <li>Showcase your idea, and ask your community about its pros and cons. What could it be used for? Is there any ulternatives to it?</li>
                            </ul>
                          </div>
                        </li>

                        {/* List item */}
                        <li className="relative py-6">
                          <div className="flex items-center mb-1">
                          <div className="absolute left-0 mr-6" aria-hidden="true">
                              <GrVirtualMachine  className='w-full text-2xl mt-4 mb-4 text-center text-red-700 dark:text-red-500'/>
                            </div>
                            <h3 className="text-lg font-bold text-violet-500 pl-9">
                              Finally, Think with us to get a decent Execution plan and start working
                            </h3>
                          </div>
                          <a className="block hover:shadow-lg hover:shadow-slate-300 mx-auto w-4/5 m-6" href="#0">
                            <img className="w-full h-[30vh] rounded-sm mx-auto" src={CreativeImage01} alt="Meetup photo 01" />
                            </a>
                          <div className="pl-14 text-lg text-gray-800 dark:text-gray-100 font-semibold">
                            <ul className="list-disc list-inside">
                              <li>Use AI to generate an image tha repressents your product.</li>
                              <li>Use our customized AI to produce a Pitch Deck for your idea.</li>
                              <li>Leverage our Marketing guidelines to start marketing for your idea.</li>
                              <li>Study all the avilable information about funding, investments, Copywrites, etc...</li>
                              <li>What's next? always think of ideas to develop your product even more...</li>
                            </ul>
                          </div>
                        </li>

                        {/* List item */}
                        <li className="relative py-6">
                          <div className="flex items-center mb-1">
                          <div className="absolute left-0 mr-6" aria-hidden="true">
                              <GrVirtualMachine  className='w-full text-2xl mt-4 mb-4 text-center text-red-700 dark:text-red-500'/>
                            </div>
                            <h3 className="text-lg font-bold text-violet-500 pl-9">
                              See our evaluations to your idea
                            </h3>
                          </div>
                          <a className="block hover:shadow-lg hover:shadow-slate-300 mx-auto w-4/5 m-6" href="#0">
                            <img className="w-full h-[30vh] rounded-sm mx-auto" src={CreativeImage01} alt="Meetup photo 01" />
                            </a>
                          <div className="pl-14 text-lg text-gray-800 dark:text-gray-100 font-semibold">
                            <ul className="list-disc list-inside">
                              <li>We provide a comprehensive scientific evaluation to your creative journey</li>
                              <li>Flexibility test, to measure how many unique variations of a specific product you were able to innovate.</li>
                              <li>Originality test, how many original ideas you had, and how original is your final product aginst its market.</li>
                              <li>Fluency test, to measure how many ideas you had without considering if there were any repitions or how original those ideas are.</li>
                            </ul>
                          </div>
                        </li>
                    </ul>
                </div>

                {/* Action Button */}
                <div className='w-full flex justify-center items-center mt-10'>
                <div className="bg-white dark:bg-gray-800 p-5 shadow-sm rounded-xl lg:w-72 xl:w-80">
                  <div className="space-y-2">
                    <Link to="/machine/pickdevice">
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

export default MachineInstruct;