import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import Logo from './assets/logo.png'

const App = () => {
  function close()
  {
    document.getElementById("navs").style.display = "none";
  }
  function show()
  {
    document.getElementById("navs").style.display = "flex";

  }
  return (
    <div>
    {/* navbar section  */}
    <nav className='flex justify-between  bg-blue-600 py-4 px-8 text-white'>
       <div className='flex items-center w-[40%]'>
      <img src={Logo} className='h-12 w-12'></img>  
      <h2><sup className='text-2xl'>Doctor</sup></h2>
      <sub className='text-2xl'>Assistant</sub>
     </div>
       <div className='flex gap-10 text-2xl font-bold px-10 max-md:text-xl max-md:hidden
       w-[30%]'>
        <a href='#'>HOME</a>
        <a href='#'>ABOUT</a>
        <h2 className=''>CHATWITHAI</h2>
       </div>
       <div className='hidden max-md:flex text-2xl'>
       <i class="ri-menu-fill"></i>
       
       </div>

     </nav>
     {/* banner section  */}
     <div className='flex items-center justify-around p-20 max-md:flex-col '>
       <div className='w-[45%] max-md:w-[100%]'>
       <h2 className='text-3xl'>Book your appointments Now-with <span className='text-orange-600 text-3xl font-bold'>Ai Guide </span></h2>
       <p className='text-2xl'> Our AI-powered healthcare assistant helps you seamlessly book appointments with qualified medical professionals at your convenience.Get the best medical advice from our AI assistant.With intelligent recommendations, real-time availability, and 24/7 support, we ensure you get the best medical care without any hassle. Whether you need a routine check-up or urgent consultation, our AI assistant is here to guide you every step of the way.</p>
       <button className='text-xl bg-orange-600 p-2 rounded-md text-white mt-2'>Book Appointment</button>

       </div>
       <div className='bg-pink-600 rounded-r-lg max-md:hidden'>
         <img src='https://turbopt.com/images/aibot.jpg' className='h-[450px] w-auto'></img>
       </div>
     </div>
          <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-5 text-center">
      <motion.h1 
        className="text-5xl font-bold text-blue-700" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Doctor AI Assistant
      </motion.h1>
      <p className="mt-4 text-lg text-gray-600 max-w-lg">
        Your AI-powered healthcare companion, providing instant medical insights and support.
      </p>
      <div className="mt-6 flex flex-col space-y-6 w-full max-w-2xl">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700">About Doctor AI</h2>
          <p className="mt-2 text-gray-600">
            Our AI assistant helps doctors and patients by providing quick, reliable medical insights and recommendations.
          </p>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700">Features</h2>
          <ul className="mt-2 text-gray-600 list-disc list-inside">
            <li>Instant AI-driven medical analysis</li>
            <li>Symptom checker and recommendations</li>
            <li>Secure and reliable consultations</li>
          </ul>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            Get in touch with our support team for any inquiries or assistance.
          </p>
        </section>
      </div>
    </div>
    {/* FOOTER  */}
     <footer className='bg-slate-600 py-4 text-white'>
      <div className='flex justify-around'>
        
        <p>Developed by 2024 Doctor AI Assistant<a href='https://github.com/your-github-
        username'>CODEMONKEYS</a></p>
      </div>
     </footer>
    </div>
  )
}

export default App
