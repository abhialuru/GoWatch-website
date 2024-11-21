import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header() {
    const[searchMovie, setSearchMovie] = useState();

    const navigate = useNavigate()

    function  handleEnter(e,path) {
      
         if (e.key==='Enter'  ) {
        e.preventDefault()
        if (searchMovie !== '' && searchMovie !== undefined) {
          navigate(path)
        }else{
          toast.warn('Please Enter Movie')
        }
          }
        }


    function handleInput(path) {
        if (searchMovie===undefined) {
          toast.warn('Please Enter Movie')
        }else{
            navigate(path)
        }
    }

  return (
    <header> 
        <div className='min-h-screen w-full bg-cover bg-center flex items-center  overflow-hidden '
        style={{background: 'url(/movieBanner.png)'}}>
            <div className='w-[80%] flex flex-col gap-10 mx-auto items-center' >
                <h1 className='text-white text-xl md:text-3xl font-semibold' >Explore Your Movies Here.</h1>
                <div className='w-[90%] md:w-[60%] flex justify-evenly items-center bg-white rounded-lg'>
                    <input onChange={(e)=>setSearchMovie(e.target.value)} onKeyDown={(e)=>handleEnter(e,`/movies/${searchMovie}`)} className='w-[100%] ml-2 p-2 outline-none rounded-lg input-area'  type="text"  placeholder='search' required/>
              <NavLink  onClick={()=>handleInput(`/movies/${searchMovie}`)} ><CiSearch className='w-10 h-6 cursor-pointer' /></NavLink> 
                </div>
            </div>
           </div>
    </header>
  )
}

export default Header