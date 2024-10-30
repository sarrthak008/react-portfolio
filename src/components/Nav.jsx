import React from 'react'
import { useMyContext } from '../contexts/MyContext'

const Nav = () => {

    let {time} =useMyContext()

  return (
    <div>
      <div className='h-7 w-screen flex items-center justify-between px-3 fixed top-0 left-0 z-20'>
        <div className='text-sm text-yellow-50 opacity-80 font-light'>{time}</div>
        <div className='flex gap-3'>
          <i className="ri-notification-line cursor-pointer text-md text-yellow-50 opacity-80"></i>
          <i class="ri-shut-down-line cursor-pointer text-md text-yellow-50 opacity-80"></i>
        </div>
      </div>
    </div>
  )
}

export default Nav
