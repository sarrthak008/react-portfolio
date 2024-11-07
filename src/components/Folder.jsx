import React from 'react'
import FOLDERICON from '../assets/folder.png'
import { useMyContext } from '../contexts/MyContext'
import FolderOpener from './FolderOpener'

const Folder = ({fileInfo}) => {

   let {isFolderOpen,setFolderOpen} = useMyContext()
   
  return (
    <div>
    <div className='h-[30px] w-[40px] cursor-pointer mx-2'>
       <img src={FOLDERICON} onClick={()=>{setFolderOpen(true)}}/>
       <div className='text-yellow-50 opacity-70 text-[11px] text-center w-full'>{fileInfo.name}</div>
    </div>
    {isFolderOpen ? <FolderOpener data={fileInfo}/> : null}
    </div>
  )
}

export default Folder
