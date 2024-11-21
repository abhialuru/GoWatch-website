import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
  
function  DisplayMovie() {
 
    const[specificMovie, setSpecificMovie] = useState()

    const[loading, setLoading] = useState(true);

    const [error, setError] = useState(false);
      
    const {specify} = useParams()

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQzNDI4Mzc5NDllY2M2M2E1MDU1M2M0YmI2YWRhMiIsIm5iZiI6MTczMDk1ODc5My4wMDM4NDMsInN1YiI6IjY3MmFmYjcwMTRkNGEzOTk3MjAzNjhiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1i76vyKTL2JLYIy3WKQZiFpufmSjHKwxSxZv4v370Q'
        }
      };

     useEffect(()=>{
      setLoading(true)
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=4d4342837949ecc63a50553c4bb6ada2&query=${specify}`, options)
            .then(res => res.json())
            .then(res => {
              if (res.results && res.results>0) {
                setSpecificMovie(res.results[0]);
                console.log(res.results[0]);
              }else{
                setError(true)
              }
              setLoading(false);}
          )  
            .catch(err => console.error(err));
          
     },[specify])
 
 if (loading) {
  <Loading/>
 }

     if (error) {
      <Error/>
     }


  return  (
    <> {specificMovie ?
     (<div className='w-full h-screen flex justify-center items-center' > 
            <div className='max-w-[90%] md:w-[60%] max-h-fit my-auto p-2 shadow-slate-900 shadow-2xl '>
            <div className='flex justify-center' >
                <img className='w-[60%] md:w-[25%]' src={`https://image.tmdb.org/t/p/w500`+specificMovie.poster_path} alt="" />
            </div>
            <div className='text-center' >
                <p><b>Title : </b><span>{specificMovie.title}</span></p>
                <p><b>release data : </b><span>{specificMovie.release_date}</span></p>
                <p><b>rating : </b><span>{(specificMovie.vote_average)}</span></p>
                <p><b>Description : </b><span>{specificMovie.overview}</span></p>
            </div>
        </div>
         </div>): <div><Error/></div> }
 </>
  )
}
            

export default DisplayMovie;