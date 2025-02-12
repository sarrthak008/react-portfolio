import React from 'react'
import { useMyContext } from '../contexts/MyContext'

const Nav = () => {

 let {time}  = useMyContext()

  return (
    <div className='h-10 w-full flex items-center justify-between'>
        <div className='text-xl font-medium hover:text-white transition-colors ml-3'>{time}</div>
        <div className='h-full flex gap-4 items-center text-xl mr-10'>
             <span><i className="ri-notification-fill  hover:text-white transition-colors cursor-pointer"></i></span>
             <span><i className="ri-shut-down-line  hover:text-white transition-colors cursor-pointer"></i></span>
             <span><i className="ri-fullscreen-line hover:text-white transition-colors cursor-pointer"></i></span>
        </div>
    </div>
  )
}

export default Nav