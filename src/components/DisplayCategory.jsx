import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


function  DisplayCategory({category}) {
   const[moviesList, setMoviesList] = useState([])
   
  
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQzNDI4Mzc5NDllY2M2M2E1MDU1M2M0YmI2YWRhMiIsIm5iZiI6MTczMDk1ODc5My4wMDM4NDMsInN1YiI6IjY3MmFmYjcwMTRkNGEzOTk3MjAzNjhiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1i76vyKTL2JLYIy3WKQZiFpufmSjHKwxSxZv4v370Q'
        }
      };
      
     useEffect(()=>{   
          fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=4d4342837949ecc63a50553c4bb6ada2&page=1`, options)
            .then(res => res.json())
            .then(res => setMoviesList(res.results))
            .catch(err => console.error(err));
     },[category])
    
    return (
        <div className='md:grid p-4 grid-cols-5 gap-2 '>
             {moviesList.map((movies, i)=> 
                     <NavLink key={i} to={`/movies/${movies.title}`}> <div  className='w-50 h-70 shadow-slate-400 shadow-xl rounded'  >
                        <img className='p-2 mx-auto' src={`https://image.tmdb.org/t/p/w500`+movies.poster_path} alt={movies.title} />
                     <h3 className='text-center' >{movies.title}</h3>
                    </div></NavLink> 
             )}
        </div>
    )
    
}

export default DisplayCategory;