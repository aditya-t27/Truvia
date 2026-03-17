import React from 'react'
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  function submitImage(){
    navigate("/upload"); 
  }
  return (
    <div className='flex flex-col justify-between items-center md:gap-20 md:flex-row w-full m-0'>
         <div className='flex flex-col items-start md:m-10'>
            <h1 className='md:text-6xl text-4xl font-bold'>Truvia<span className='text-red-800'>.</span></h1>
            <span className='text-sm text-gray-700'>Decode Emotions,Elevate Well-Being</span>
            <div>
            <button
              onClick={submitImage}
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-700 to-pink-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-700/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-600/30 focus:outline-none focus:ring-4 focus:ring-pink-400/40 active:translate-y-0"
            >
              Click to upload image
            </button>
            </div>
            
         </div>
         <div className='md:w-1/2'>
            <img src="../Landingimg.jpg" className=''></img>
           
         </div>
         
    </div>
  )
}

export default Landing