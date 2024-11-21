import React from 'react'

function Navbar() {
  return (
    <nav className='absolute top-0 left-0 z-10 text-gray-100 w-full max-h-fit bg-transparent' >
        <div className='flex justify-center my-10 md:mt-4 items-center text-4xl md:text-2xl text-yellow-500 font-semibold'>
            GoWatch
        </div>
      <div className='flex justify-around'>
        <a href="/">Home</a>
        <a href="#genre">Genre</a>
        <a href="#discover">Discover</a>
        <a href="#contact">Contact Us</a>
        <a href="#about">About Us</a>
      </div>
    </nav>
  )
}

export default Navbar