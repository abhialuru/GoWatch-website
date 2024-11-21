import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';
import Loading from '../Loading';
import { NavLink } from 'react-router-dom';
import Error from '../Error';
 
function DisplayGenre() {

   const[movieslist, setMoviesList] = useState([])
   const[pages, setPages] = useState(1);
   const [loading, setLoading] = useState(false)
   const[filter, setFilter] = useState('')

   const {id} = useParams();


   function handleFilter(e) {
       setFilter(e.target.value)
       window.scroll({
        top: 0,
        behavior: 'smooth',
       })
   }

   function handleSubtractPages() {
     if (pages!==1) {
       setPages(prev=>prev-1)
       window.scroll({
         top: 0,
         behavior: 'smooth',
       } 
       )
     }
   }

   function handleAddPages() {
      setPages(prev=>prev+1)
       window.scroll({
         top: 0,
         behavior: 'smooth',
       })
   }

   const options = {
       method: 'GET',
       headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQzNDI4Mzc5NDllY2M2M2E1MDU1M2M0YmI2YWRhMiIsIm5iZiI6MTczMDk1ODc5My4wMDM4NDMsInN1YiI6IjY3MmFmYjcwMTRkNGEzOTk3MjAzNjhiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1i76vyKTL2JLYIy3WKQZiFpufmSjHKwxSxZv4v370Q'
       }
     };

    useEffect(()=>{   
       setLoading(true)
         fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4d4342837949ecc63a50553c4bb6ada2&with_genres=${id}&sort_by=${filter}.desc&page=${pages}`, options)
         .then(res => res.json())
         .then(res =>{ 
          if ( !res.results || !res.results>0) {
            <Error/>
          }
            setMoviesList(res.results);
            setLoading(false);
        })
        
         .catch(err => console.error(err));
         
    },[pages, id, filter])

  return (
    <div className='p-2'>
      <NavLink to='/' > <h1 className='font-semibold text-3xl text-slate-800 p-4 text-center'>GoWatch</h1></NavLink> 

      
     <select value={filter} onChange={handleFilter} className='fixed top-0  right-0 p-2 m-5 border-slate-400 border-2 rounded-lg' name='filter' >
      <option value='' >Filter</option>
           <option value='vote_average'>Top-Rated</option>
          <option value='release_date'>Latest</option>
          <option value='popularity'>Popular</option>
        </select> 
        
        { loading ? <Loading/> :
          movieslist.map((movies, i)=>
           {    if(movies.poster_path !== '' || movies.title !== '' || movies.release_date!=='' || movies.overview!=='' || movies.vote_average!==null){
               
           return <div key={i} className='flex items-center gap-10 w-full mb-4 shadow-gray-400 shadow-lg'  >
                   <div className='w-40% md:w-[20%] h-80 my-auto' >
                       <img className='h-[95%] m-2'  src={`https://image.tmdb.org/t/p/w500`+movies.poster_path} alt={movies.title} />
                   </div>
                   <div className='w-[60%]' >
                       <p><b>Title : </b><span>{movies.title}</span></p>
                       <p><b>release data : </b><span>{movies.release_date}</span></p>
                       <p><b>rating : </b><span>{(movies.vote_average).toFixed(1)}</span></p>
                       <p className='hidden md:block' ><b>Description : </b><span>{movies.overview}</span></p>
                   </div>
               </div>
            } 
            }
           )
           
        }

         <div className='flex p-2 bg-slate-800'>
                 <p className='flex items-center text-xl text-white'>Pages</p>
                     <div className='w-[40%] md:w-[10%] grid grid-cols-3 mx-auto'>       
                   <button className='bg-white text-4xl flex justify-center items-center border-2' onClick={()=>handleSubtractPages()}>-</button>
                   <input className='outline-none border-black border-2 text-center' type="text" value={pages} readOnly/>
                   <button className='bg-white text-4xl flex justify-center items-center' onClick={()=>handleAddPages()} >+</button>
                 </div>
         </div>
    </div>
  )
}

export default DisplayGenre;