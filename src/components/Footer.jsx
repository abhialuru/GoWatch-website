import React from 'react'
 
function Footer() {
  return (
            <div id='about' className='w-full p-4 md:px-10 pt-5 bg-slate-950'>
              <div className='flex flex-col md:flex-row gap-5 md:gap-20'>
                <div className='md:w-[70%] text-white'>
                    <h1 className='text-xl font-semibold md:mb-2'>GoWatch</h1>
                    <p>At Go Watch, we believe that finding the perfect movie should be as enjoyable as watching it. Whether you’re in the mood for a heart-pounding thriller, a feel-good comedy, or an unforgettable drama, we’ve got you covered</p>
                    <p className='hidden md:block pt-4' >With just a few clicks, you can input your mood, genre, and preferences, and we'll provide tailored movie recommendations just for you. Our smart system continuously learns and improves, ensuring that every suggestion feels like it was handpicked by a true movie lover</p>
                </div>
                 <div className='text-white' >
                  <h1 className='text-xl font-semibold md:mb-2' >Company</h1>
                  <div className='flex md:flex-col gap-2 md:gap-0'>
                  <a href="/">Home</a>
                 <a href="#genre">Genre</a>
                 <a href="#discover">Discover</a>
                  <a href="#contact">Contact Us</a>
                  <a href="#about">About Us</a>
                  </div>
                 </div>
                 </div>
            <hr className='my-5' />
            <div className='text-white flex justify-center' >Copyright &copy;2024: Designed by<span className='ml-2'>abhialuru</span></div>
            </div>
  )
}

export default Footer;