 import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from '../Applayout'
import Genres from './components/Genres'
import DisplayMovie from './components/DisplayMovie'
import DisplayGenre from './components/Pages/DisplayGenre'
 
 function App() {


  const router = createBrowserRouter([
    {
    path: '/',
    element: <Applayout/>,
    children: [
    {
      path: '/',
      element: <Genres/>
    }]
   },
   {
    path:'/movies/:specify',
    element: <DisplayMovie/>
   },
   {
    path:'/genres/:id',
    element: <DisplayGenre/>
   }

  ])
     
  
   return (
        <RouterProvider router={router} >
          <Applayout/>
        </RouterProvider>
   )
 }
 
 export default App