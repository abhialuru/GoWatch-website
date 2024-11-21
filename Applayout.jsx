import React from 'react'
import Navbar from './src/components/Navbar'
import Header from './src/components/Header'
import { Outlet } from 'react-router-dom'
  import DisplayMenu from './src/components/DisplayMenu'
import Contact from './src/components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './src/components/Footer'

function Applayout() {
  return (
    <div> 
         <ToastContainer/>
         <Navbar/>
         <Header/>
         <Outlet/>
         <DisplayMenu/>
         <Contact/>
         <Footer/>
    </div>
  )
}

export default Applayout