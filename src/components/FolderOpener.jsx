import React, { useState } from 'react'
import Nav from './Nav'
import FOLDERICON from '../assets/folder.png'
import FileContentOpener from './FileContentOpener'

const FolderOpener = ({ data }) => {

  const [fileContentOpen,setFileContentOpen] = useState(false);
  const [openProject,setOpenProject] =useState('')
  

  return (
    <>
    <div className='h-lvh w-lvw bg-[#282828] absolute top-0 left-0 z-10'>
      <Nav />
      <span className='mt-9 ml-1 block text-yellow-100 text-xl font-semibold opacity-70'>📄 {data.name}</span>
      <div className='flex mt-9 flex-wrap gap-3'>
        {data.content.map((project) => {
          return (<>
            <div className='h-[30px] w-[40px] cursor-pointer mx-2'>
              <img src={FOLDERICON}  onClick={()=>{
                setFileContentOpen(true)
                setOpenProject(project)
              }}/>
              <div className='text-yellow-50 opacity-70 text-[11px] text-center w-full'>{project.name}</div>
            </div>
          </>)
        })}
      </div>
      {fileContentOpen ? <FileContentOpener project={openProject}/> : null}
    </div>
    </>
  )
}

export default FolderOpener
