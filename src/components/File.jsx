import React, { useEffect, useState } from 'react'
import FILEICON  from '../assets/file.png'
import FileOpener from './FileOpener'
import { useMyContext } from '../contexts/MyContext'

const File = ({fileInfo ,key,id}) => {

  let {setFileOpen ,isfileOpen,setindex} = useMyContext()
 console.log(id)
  return (
    <>
    <div className='h-[30px] w-[40px] cursor-pointer mx-2' onClick={()=>{
      setFileOpen(true)
      setindex(id)
    }}>
       <img src={FILEICON} />
       <div className='text-yellow-50 opacity-70 text-[11px] text-center w-full'>{fileInfo.name}</div>
    </div>
      {isfileOpen ? <FileOpener data={fileInfo} index={id} /> : null}
    </>
  )
}

export default File
