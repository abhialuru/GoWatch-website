import React from 'react'

function Loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center ' >
        <img className='w-24 animate-spin' src='/image.png' alt="" />
    </div>
  )
}

export default Loading