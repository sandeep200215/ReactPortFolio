import React from 'react';
import mypicture from './assets/mypicture.jpg';
import { useState,useEffect,useRef} from 'react';
import Typed from 'typed.js';
import Contact from './Contact';



const Card = () => {
  const [data, setData] = useState({
    image: Card,
    title: "Java Developer & Android Developer",
    desc1: `Hi, I am pursuing MCA from Manipal University Jaipur.I am fashionated to programming and always try to develop application using different tech stack  and interested learning these tech stack `,
  
  });
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["","Android Developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed:100,
      
      backDelay: 50,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
   
    <section className="mx-auto  ">
      <div className=" max-w-2xl mx-auto  bg-slate-100 p-2 ">
     
        <div className="flex flex-col lg:flex-row  ">
        
          <div className=" rounded-full overflow-hidden h-50 w-50">
            <img
              src={mypicture}
              alt="Profile"
              className='w-full h-screen rounded-full mt-12 align-middle  p-2 '
            />
          </div>
          <div className="lg:w-fit  ml-8">
          <h2 className="text-3xl font-bold justify-around text-left text-slate-800">About Me</h2>
          <h2 className="text-xl ">
      
            I am <span className="font-semibold  " ref={el}></span>
          </h2>
            <p className="text-xl font-mono  text-slate-900">
            Hi ,I am Sandeep and pursuing Online MCA From Manipal University Jaipur.I am fashionated to programming and always try to develop aplication using different tech stack.I am interested to learn new technology.<br></br> 
            As well as I am  working as a <span className='text-slate-700'>computer instructor</span>  at Daffodil Public School  Biharsharif Nalanda.<br></br><br></br>
            
           
            <h2 className=' text-slate-950 font-serif  font-semibold'>Technical Skills & Tools</h2>
            <h3 class='text-ellipsis text-pretty text-xl'> C C++  Core Java Adv Java  Spring  Springboot  Core Python  Flask Pandas Numpy Angular React & Basic DSA  & Probability and Statistics </h3>
             VsCode Netbeans Elicpse Intellij Android Studio Git & Github
            </p>
            <div className="  text-center space-x-4 text-4xl py-4">
            <button  href="https://www.linkedin.com/in/sandeepkr1506/" className="text-gray-800  hover:text-blue-400">
          <i class="fa-brands fa-linkedin"></i>
              
          </button>
          <a href="https://www.instagram.com/sandeep_sharma8670/" className="text-gray-800 hover:hover:text-red-500">
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100054210267040" className="text-gray-800 hover:hover:text-blue-400">
          <i class="fa-brands fa-facebook"></i>
          </a>

            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default Card;
