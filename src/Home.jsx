import React from "react";
import keyboard from "./assets/keyboard.webp"
import About from "./About";
import mypicture from './assets/mypicture.jpg'


 function Home()
 {
    return(
        
            
        
        <div className=" bg-cover bg-center h-screen sm:py-4 bg-opacity-200" style={{ backgroundImage: `url(${keyboard})` }}>
             <div className="container mx-auto px-12 ">
        <div className="md:flex items-center h-50 w-50">
          <div className="md:w-6/12 md:pr-8 mb-8 md:mb-0">
            <img src={mypicture} alt="About Us" className="rounded-full w-auto md:w-50" />
          </div>
          <div className="md:w-3/4">
            <h2 className="text-3xl  font-mono font-bold mb-4 text-white">Introduction</h2>
            <p className="text-white font-mono  text-2xl">
              Hi I am Sandeep And I am Pursuing MCA|I am aspiring of Java Developer or Software development
            </p>
          </div>
        </div>
      </div>
    </div>
            
        
    )
 }
 export default Home;