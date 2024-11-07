import React, { useState } from 'react'
import  {FILES_DATA} from '../config/ShowData'
import File from '../components/File'
import Folder from '../components/Folder'
import Footr from '../components/Footr'
import Nav from '../components/Nav'
import { useMyContext } from '../contexts/MyContext'

const Screen = ({chechscrn, cur_scrn}) => {

 let {time ,dayInfo ,haveFooter} = useMyContext()
 

  return (
    <div className='h-lvh w-lvw bg-[#282828] overflow-x-hidden'>
      <Nav/>
      <div className='w-full h-48 flex items-center justify-center text-center flex-col'>
        <div className='text-yellow-100 font-bold text-7xl'>{time.split(" ")[0]}</div>
        <div className='text-yellow-100 text-md opacity-80'>{dayInfo}</div>
      </div>
      <div className='w-[85%] h-60 mx-[7.5%] flex flex-wrap'>
         { FILES_DATA.map((fileInfo ,index)=>(
          
              fileInfo.type === "file" ? <File fileInfo={fileInfo} key={index} id={index}/> : fileInfo.type === "folder" ? <Folder fileInfo={fileInfo} key={index}/> : null
         ))}
      </div>
       {haveFooter ? <Footr chechscrn={chechscrn} cur_scrn={cur_scrn}/> : null}
    </div>
  )
}

export default Screen

