import React from 'react'
import FOLDERICON from '../assets/folder.png'
import { useMyContext } from '../contexts/MyContext'

const Folder = ({fileInfo}) => {

  return (
    <div>
    <div className='h-[30px] w-[40px] cursor-pointer mx-2'>
       <img src={FOLDERICON}/>
       <div className='text-yellow-50 opacity-70 text-[11px] text-center w-full'>{fileInfo.name}</div>
    </div>
    </div>
  )
}

export default Folder
