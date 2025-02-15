import React, { useState } from 'react'
import { useMyContext } from '../contexts/MyContext'
import FileIcon from './FileIcon'
import FolderIcon from './FolderIcon'

const History = () => {
 
    const {allTabs} = useMyContext()
    const [tabs,setTabs] = useState(allTabs)
    

  return (
     <div className='absolute  z-40 bottom-[8%] left-[50%] shadow-md shadow-black  translate-y-[50%] -translate-x-[50%] min-w-[40%] h-16 backdrop-blur-md bg-[#85858574] rounded-md'>
             <div className='flex'>
             {
                allTabs?.map((info,index)=>(
                     <>
                        {info?.type == "file" ? <FileIcon info={info} key={index}/> : info.type =="folder" ? <FolderIcon info={info}/> : null}
                     </>
                ))
             }
             </div>
     </div>
  )
}

export default History