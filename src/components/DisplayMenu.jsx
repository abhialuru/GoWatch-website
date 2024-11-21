 import { useState } from 'react'
import DisplayCategory from './DisplayCategory'
 
function  DisplayMenu() {

    const[moviemenu, setMovieMenu] = useState('popular')

    function  handleMovieMenu(movietype) {
          setMovieMenu(movietype)
    }

  return (
    <div id='discover' className='md:px-20 p-2 mt-10 md:mt-0'>
  <div id='discover' className='container flex flex-col justify-center items-center mt-5 md:mt-10 mx-auto '>
            <h1 className='text-2xl sm:text-4xl text-center font-bold' >Discover <span className='underline font-light underline-offset-4 under decoration-2' >& Watch</span></h1>
            <p className='text-gray-500 md:mb-10 mt-2 max-w-80 text-center' >Movies are Waiting to Be Discovered.</p>
        </div>
 

      <div className='flex justify-around mt-4 md:mt-2' >
         <button className='w-28 p-1 text-sm text-white font-medium bg-black rounded hover:py-1' onClick={()=>handleMovieMenu('popular')} >Popular</button>   
         <button className='w-28 p-1 text-sm text-white font-medium bg-black rounded hover:py-1' onClick={()=>handleMovieMenu('top_rated')}>Top-Rated</button>   
         <button className='w-28 p-1 text-sm text-white font-medium bg-black rounded hover:py-1' onClick={()=>handleMovieMenu('now_playing')}>Now Playing</button> 
        <button className='w-28 p-1 text-sm text-white font-medium bg-black rounded hover:py-1' onClick={()=>handleMovieMenu('upcoming')}>Up-Coming</button> 
    </div>
       { moviemenu && <DisplayCategory category={moviemenu} /> }
    </div>
  )

}


export default  DisplayMenu;