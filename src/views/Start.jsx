import React from 'react'
import { Link } from 'react-router-dom'

const Start = ({chechscrn}) => {
 const getFullScreen =()=>{
    chechscrn(true)
 }
  return (
    <div className='h-screen w-screen bg-gray-950 text-gray-500 flex items-center justify-center'> 
 <Link to='/home'>
   <span onClick={getFullScreen}>
         <i class="ri-shut-down-line text-5xl font-medium cursor-pointer hover:text-white transition-colors"></i>
     </span>
  </Link>
    </div>
  )
}

export default Start
