import React from 'react'
import FOLDER_ICO from "../assets/folder.png"

const FolderIcon = ({info}) => {
  return (
      <div className='h-[45px] flex flex-col items-center cursor-pointer m-2'>
          <div className='h-[35px] '>
             <img src={FOLDER_ICO} className='h-full  object-fill'/>
          </div>
         <div className='lowercase text-sm text-white'>{info?.name}</div>
      </div>
    )
}

export default FolderIcon