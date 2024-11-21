import React, { useRef } from 'react'
import { toast } from 'react-toastify'
 
function Contact() {

    const formSub = useRef();

    function handleSubmit(e) {
        e.preventDefault(); 
         toast.success('Received!')
        formSub.current.reset();
    }

  return (
    <div id='contact' className='mt-20'> 
         <div id='About' className='container flex flex-col justify-center items-center mt-5 md:mt-10 mx-auto '>
            <h1 className='text-2xl sm:text-4xl text-center font-bold' >Contact <span className='underline font-light underline-offset-4 under decoration-2' >With us</span></h1>
            <p className='text-gray-500 mb-2 mt-2 max-w-80 text-center' >Your Thoughts Matter – Get in Touch!.</p>
        </div>

        <form ref={formSub} className='max-w-2xl mx-auto p-4' onSubmit={handleSubmit} >
            <div className='flex flex-col md:flex-row md:space-x-2'>
            <div className='w-full md:w-1/2 pb-2' >
                Name
                <input className='w-full border-gray-300 border-2 px-2 py-1 mt-2 text-lg rounded-md' type="name" name='name' placeholder='Enter Your Name' required/>
            </div>
            <div className='w-full md:w-1/2' >
                 Email
                <input className='w-full border-gray-200 border-2 px-2 py-1 mt-2 text-lg rounded-md ' type="email" name='email' placeholder='Enter Your Name' required/>
            </div>
            </div>
            <div className='h-26 py-1'>
                Message
                <textarea className='w-full h-48 border-gray-300 border-2 px-2 py-1 mt-2 text-lg rounded-md resize-none'
                name="Message" placeholder='Message...' required></textarea>
            </div>
            <div className='flex justify-center p-4'>
            <button    className='bg-blue-500 py-2 px-4 text-white text-center rounded' type='submit' >send message</button>
            </div>
        </form>
    </div>
  )
}

export default Contact