import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Service from './Service'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Contact from './Contact'
import Education from './Education'


function App() {

  
  const router=createBrowserRouter([

    { path:"/",element:<><Navbar/><Home/></>},
    {path:"/about",element:<><Navbar/><About/></>},
    {path:"/service",element:<><Navbar/><Service/></>},
    {
      path:"/contact",element:<><Navbar/><Contact/></>
    },
    {
      path:"/education",element:<><Navbar/><Education></Education></>
    }
  ])
  return (
   <>
    
    <RouterProvider router={router}></RouterProvider>
   <Contact/>
    </>
       
   
  )
}

export default App
