import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Error() {

  const{specify} = useParams()

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Error! Page 404 Not Found.</h1>
        <p>Your '{specify}' search not found.Click <NavLink to='/' ><span className='underline underline-offset-2'>Home.</span></NavLink></p>
         </div>
  )
}

export default Error;