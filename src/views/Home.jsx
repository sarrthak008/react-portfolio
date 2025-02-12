import React from 'react'
import Nav from '../components/Nav'
import { useMyContext } from '../contexts/MyContext'
import { FILES_DATA } from '../config/ShowData'
import FileIcon from '../components/FileIcon'
import FolderIcon from '../components/FolderIcon'

const Home = () => {
  let {time ,dayInfo} = useMyContext()
  return (
    <div className='h-screen w-screen bg-gray-950 text-gray-500 overflow-hidden '>
     <Nav/>
    <div>
       <div className='h-40 w-full flex items-center  flex-col justify-center '>
           <div className='text-6xl font-bold text-gray-400'>{time}</div>
           <div className='text-xl font-medium text-gray-500 opacity-55'>{dayInfo}</div>
       </div>
        <div className='min-h-44 w-full flex flex-wrap gap-4 ml-0 sm:ml-20'>
         {
           FILES_DATA?.map((dataInfo,index)=>(
             <>
               {dataInfo?.type === "file" ? <FileIcon info={dataInfo}/>: dataInfo?.type ==="folder" ? <FolderIcon info={dataInfo}/> :null  }
             </>
           ))
          }
        </div>
    </div>
    </div>
  )
}

export default Home