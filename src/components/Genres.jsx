import React from 'react'
import { NavLink } from 'react-router-dom'
 

function Genres() {
  return (
    <div id='genre' className='md:px-20 mt-16 md:my-20 px-5' >
     <div className='container flex flex-col justify-center items-center mt-5 md:mt-10 mx-auto '>
            <h1 className='text-2xl sm:text-4xl text-center font-bold' >Genre <span className='underline font-light underline-offset-4 under decoration-2' >& Mood</span></h1>
            <p className='text-gray-500 md:mb-10 mt-2 max-w-80 text-center' >No mood too bad, just watch movies.</p>
        </div>
 
    <div className='hidden md:flex justify-evenly'>
          <div className='text-center' >
            <img className='w-40' src='/Happy.png' alt="" />
              <ul>
                <NavLink to='/genres/10749' className='hover:underline underline-offset-2 light' ><li>Romance</li></NavLink>
                <NavLink to='/genres/35'  className='hover:underline underline-offset-2 light' ><li>Comedy</li></NavLink>
                <NavLink to='/genres/12' className='hover:underline underline-offset-2 light' >   <li>Adventure</li></NavLink>
              </ul>
          </div>
          <div className='text-center' >
            <img className='w-48' src='/Chilled.png' alt="" />
              <ul  >
                <NavLink to='/genres/28' className='hover:underline underline-offset-2 light' >  <li>Action</li></NavLink>
                <NavLink to='/genres/27' className='hover:underline underline-offset-2 light'  >   <li>Horror</li></NavLink>
                <NavLink to='/genres/10402' className='hover:underline underline-offset-2 light' > <li>Music</li></NavLink>
              </ul>
          </div>
          <div className='text-center' >
            <img className='w-36' src='/sad.png' alt="" />
              <ul>
                <NavLink to='/genres/18' className='hover:underline underline-offset-2 light' >   <li>Drama</li></NavLink>
                <NavLink to='/genres/10749' className='hover:underline underline-offset-2 light' ><li>Romance</li></NavLink>
                <NavLink to='/genres/10402' className='hover:underline underline-offset-2 light' >    <li>Music</li></NavLink>
              </ul>
          </div>
          <div className='text-center' >
            <img className='w-36' src='/Angry.png' alt="" />
              <ul >
                <NavLink to='/genres/35' className='hover:underline underline-offset-2 light' > <li>Comedy</li></NavLink>
                <NavLink to='/genres/10402' className='hover:underline underline-offset-2 light' >    <li>Music</li></NavLink>
                <NavLink to='/genres/10749' className='hover:underline underline-offset-2 light' >  <li>Romance</li></NavLink>
              </ul>
          </div>
          <div className='text-center' >
              <img className='w-36' src='/Boreing.png' alt="" />
              <ul>
                <NavLink to='/genres/878' className='hover:underline underline-offset-2 light'>        <li>Thriller</li></NavLink>
                <NavLink to='/genres/12' className='hover:underline underline-offset-2 light' >   <li>Adventure</li></NavLink>
                <NavLink to='/genres/53' className='hover:underline underline-offset-2 light' >  <li>sci-fi</li></NavLink>
              </ul>
          </div>
    </div>
     

       <div className='md:hidden'>
          <div className='flex justify-evenly my-2'>
            <img className='w-10' src='/Happy.png' alt="" />
            <img className='w-10' src='/Angry.png' alt="" />
            <img className='w-12' src='/Chilled.png' alt="" />
            <img className='w-10' src='/Boreing.png' alt="" />
            <img className='w-9' src='/sad.png' alt="" />
          </div>
          <div className='grid grid-cols-3 gap-2 text-center font-sans font-bold'>
         <NavLink to='/genres/27' ><p>Horror</p></NavLink> 
         <NavLink to='/genres/28'><p>Action</p></NavLink> 
         <NavLink to='/genres/53'><p>Thriller</p></NavLink> 
         <NavLink to='/genres/35'><p>Comedy</p></NavLink> 
         <NavLink to='/genres/12'><p>Adventure</p></NavLink> 
         <NavLink to='/genres/18'><p>Drama</p></NavLink> 
         <NavLink to='/genres/10749'><p>Romance</p></NavLink> 
         <NavLink to='/genres/10402'><p>Music</p></NavLink> 
         <NavLink to='/genres/878'> <p>Sci-fi</p></NavLink> 
          </div>
       </div>
    </div>


 
  )
}

export default Genres