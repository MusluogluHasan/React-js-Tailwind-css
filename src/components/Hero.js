import React from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mx-auto justify-center text-center w-full h-screen mt-[-96px] flex flex-col'>
        <p className='text-[#00df9a] uppercase font-bold p-2'>growing with data analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow width data.</h1>
        <div className='flex justify-center'>
            <p className='md:text-5xl sm:text-4xl text-xl py-4'>Fast, flexible financing for</p>
            <Typed className='md:text-5xl sm:text-4xl text-xl pl-2 py-4' strings={['SASS', 'LESS', 'SCSS']}
            typeSpeed={100}
            backSpeed={120}
            loop
            />
        </div>
        <p className='md:text-2xl text-xl text-gray-500 font-bold'>Monitor your data anlytics to increase revenue for BTB,BTC&SASS platforms.</p>
        <button className='text-black bg-[#00df9a] w-[200px] rounded font-medium mx-auto py-3 my-6'>Get Started</button>
      </div>
    </div>
  )
}
export default Hero