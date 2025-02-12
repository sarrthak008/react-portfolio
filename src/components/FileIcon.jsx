import React, { useEffect, useState ,useRef } from 'react'
import FILE_ICO from '../assets/file.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const FileOpener = ({isFileOpen,setIsFileOpen,info}) =>{
  

useGSAP(() => {
      gsap.from(".file-opener", {
        opacity: 0,
        duration: 0.5,
        width: 0,
        height: 0,
        scale: 0.5,
        rotate: -10,
        top:'10%',
        left: "50%",
        ease: "power3.out",
      });

  }, []); 

const  closeOpener = ()=>{
    let t1 = gsap.timeline()
    t1.to(".file-opener",{
      optcity:0,
      height:50,
      width:50,
      duration:0.5,
      scale: 0.2,
      rotate: -10,
      delay:0.2,
      top:'100%',
      ease: "power3.out",
      left:'50%',
      onComplete:()=>{setIsFileOpen(false)}
    })
  }

const handelClose =()=>{
     useGSAP(closeOpener())
  }



  

   return(
     <div  className='w-[80%] h-[80%]  absolute  mx-auto left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] backdrop-blur-md bg-[#323232] file-opener resize shadow-sm shadow-gray-800 rounded-md'>
      <div className='w-full h-10 flex gap-1 m-2'>
         <div className='h-[15px] w-[15px] rounded-full bg-red-500 cursor-pointer' onClick={(e)=>{ e.stopPropagation();handelClose()}}></div>
         <div className='h-[15px] w-[15px] rounded-full bg-yellow-500 cursor-pointer'></div>
         <div className='h-[15px] w-[15px] rounded-full bg-green-500 cursor-pointer'></div>
      </div>
      <div className='overflow-x-hidden overflow-y-scroll hinde-scrollbar h-[85%]'>
         {
          info?.fildData?.map((data,index)=>(
            <div className='ml-5 p-3'>
              <span className='text-white text-3xl font-medium block my-6'>{data?.title}</span>
              <p className='text-xl text-gray-400'>{data?.discription}</p>
            </div>
          ))
         }
      </div>
     </div>
   )
}

const FileIcon = ({info}) => {

   const [isFileOpen,setIsFileOpen] = useState(false);

  return (
    <>
      <div className='h-[45px] flex flex-col items-center cursor-pointer m-2' onClick={()=>setIsFileOpen(true)}>
        <div className='h-[35px] '>
           <img src={FILE_ICO} className='h-full  object-fill'/>
        </div>
       <div className='lowercase text-sm text-white'>{info?.name}</div>
    </div>
      {isFileOpen ? <FileOpener isFileOpen={isFileOpen}  setIsFileOpen={setIsFileOpen} info={info}/> : null}
    </>
  )
}

export default FileIcon