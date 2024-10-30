import React from 'react'
import FOLDERICON from '../assets/folder.png'

const Folder = ({fileInfo}) => {
  return (
    <div>
    <div className='h-[20px] w-[30px] cursor-pointer m-2'>
       <img src={FOLDERICON}/>
       <div className='text-yellow-50 opacity-70 text-[11px] text-center w-full'>{fileInfo.name}</div>
    </div>
    </div>
  )
}

export default Folder
