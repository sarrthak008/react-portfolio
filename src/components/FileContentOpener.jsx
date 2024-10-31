import React from 'react'
import Nav from './Nav'
import FILE from '../assets/file.png'
import BROWSERICON from '../assets/browser.png'
import SCREENSHOT from '../assets/screenshot.png'

const FileContentOpener = ({project}) => {
  return (
    <div className='h-lvh w-lvw bg-black absolute top-0 z-40 left-0 '>
        <Nav/>
       <div className='text-yellow-50 opacity-70 text-[11px]  w-full mt-9 text-sm'>{project.name}/</div>
       <div className='flex mt-9 gap-4 w-full flex-wrap'>
        {project.inner_data.map((data)=>{
            return(
                <>
                  {data.type== "file"? 
                  <div className='flex-col items-center text-center'>
                    <img src={FILE} className='h-[45px] w-[45px] cursor-pointer mx-2'></img>
                    <div className='text-white'>{data.title}</div>
                  </div> : 
                   data.type == "htmlDoc" ? 
                   <div className='flex-col items-center text-center'>
                    <img src={BROWSERICON} className='h-[45px] w-[45px] cursor-pointer mx-2'/>
                    <div className='text-white'>{data.title}</div>
                   </div>
                    : data.type === "photo" ? 
                    <div className='flex-col items-center text-center'>
                    <img src={SCREENSHOT} className='h-[45px] w-[45px] cursor-pointer mx-4'/>
                    <div className='text-white'>{data.title}</div>
                   </div>
                  :null
                }
                </>
            )
        })}
       </div>
    </div>
  )
}

export default FileContentOpener
