import React, { useEffect } from 'react'
import PROFILEIMG from '../assets/profile.svg'

const home = () => {

  return (
    <div className='h-lvh w-lvw bg-[#282828] flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <div className='h-[100px] w-[100px] rounded-full bg-[#FFC200] flex items-center justify-center'>
              <img src={PROFILEIMG} className='mt-4'/>
            </div>
            <h2>Sarthak Navale</h2>
        </div>
    </div>
  )
}

export default home
