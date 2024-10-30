import React from 'react'
import FILEICON  from '../assets/file.png'

const File = ({fileInfo}) => {
  return (
    <div className='h-[20px] w-[30px] cursor-pointer m-2'>
       <img src={FILEICON}/>
       <div className='text-yellow-50 opacity-70 text-[11px] text-center w-full'>{fileInfo.name}</div>
    </div>
  )
}

export default File