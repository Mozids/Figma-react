import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import ppp from '../assets/Buku.jpg';

export const Main = () => {
  return (
    <div id='Home' className='w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-6 items-center'>
        <div className='text-white font-extrabold flex flex-col justify-center items-center'>
          <img src={ppp} alt="Logo" className='w-40 sm:w-48 md:w-56 lg:w-64 mb-6' />
          <div className='h-40 flex items-center'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center'>
              TOKOBOOKKU
            </h1>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <a href="/Home" className='text-white'>
            <button className='flex items-center px-6 py-3 text-sm sm:text-base lg:text-lg rounded-lg transition-transform transform hover:scale-110 hover:bg-neutral-900 hover:text-white'>
            Let's go <FaArrowRight className='w-6 sm:w-7 ml-2' />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
