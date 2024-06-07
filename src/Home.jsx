import React from "react";
import keyboard from "./assets/keyboard.webp"
import About from "./About";
import mypicture from './assets/mypicture.jpg'


 function Home()
 {
    return(
        
            
        
        <div className="     bg-cover bg-center h-screen sm:py-8 bg-opacity-200" style={{ backgroundImage: `url(${keyboard})` }}>
             <div className="container mx-auto px-12  ">
        <div className="md:flex items-center h-50 w-50">
          <div className="md:w-6/12 md:pr-8 mb-8 md:mb-0">
            <img src={mypicture} alt="About Us" className="rounded-full w-auto md:w-50 animate-float  " />
          </div>
          <div className="md:w-3/4">
            <h2 className="text-2xl  font-mono font-bold mb-1 text-white">Introduction</h2>
            
             <span className="text-white font-mono text-xl flex  animate-float  animate-flicker ">Hi  <img  className="  mx-2 text-amber-500 space-x-3 bg-white rounded-full h-8 w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFByJV2as_NLcIuu1wNAnHgSwe_W6hNRl-A&usqp=CAU" /> I'm Sandeep</span>
              <p className="text-white font-mono  text-xl animate-float animate-flicker">
                And I am Pursuing MCA|I am aspiring of Java Developer or Software development
            </p>
            <div className="  space-x-4 text-xl py-4   ">
            <button  href="https://www.linkedin.com/in/sandeepkr1506/" className="bg-gradient-to-r from-[#0077B5] to-[#005E94] rounded-full p-1 px-2 hover:text-blue-400">
          <i class="fa-brands fa-linkedin"></i>   
          </button>
          <a href="https://sandeepkumar24y7@gmail.com" className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full p-1 px-2 hover:text-gray-400">
          <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/sandeep_sharma8670/" className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full p-1 px-2 hover:hover:text-red-300">
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100054210267040" className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full p-1 px-2 hover:hover:text-blue-400">
          <i class="fa-brands fa-facebook"></i>
          </a>

            </div>
          
          </div>
        </div>
      </div>
    </div>
            
        
    )
 }
 export default Home;