import React, { useEffect } from 'react'
import PROFILEIMG from '../assets/profile.svg'
import { Link } from 'react-router-dom'

const home = () => {

  return (
    <div className='h-lvh w-lvw bg-[#282828] flex items-center justify-center text-center'>
        <div className='flex flex-col items-center justify-center gap-2'>
            <div className='h-[90px] w-[90px] rounded-full bg-[#FFC200] flex items-center justify-center mb-3'>
              <img src={PROFILEIMG} className='mt-4'/>
            </div>
            <h2 className='text-2xl font-bold text-yellow-100 line-clamp-0  sm:text-3xl '>Sarthak Navale</h2>
            <h4 className='text-sm text-yellow-50 opacity-40'>Fullstack web Developer</h4>
         <Link to='/screen'><button className='orange px-5 py-1 rounded-sm border-0 mt-10 hover:bg-yellow-600'><i className="ri-arrow-right-line"></i> Login</button></Link>  
        </div>
    </div>
  )
}

export default home
