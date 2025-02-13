import React, { useState, useEffect } from 'react'
import FOLDER_ICO from "../assets/folder.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import Subfolder from './Subfolder'


const FolderOpner = ({ isFolderOpen, setIsFolderOpen, info }) => {

  console.log(info)

  useGSAP(() => {
    gsap.from(".folder-opener", {
      opacity: 0,
      duration: 0.5,
      width: 0,
      height: 0,
      scale: 0.5,
      rotate: -10,
      top: '10%',
      left: "50%",
      ease: "power3.out",
    });

  }, []);

  const closeOpener = () => {
    let t1 = gsap.timeline()
    t1.to(".folder-opener", {
      optcity: 0,
      height: 50,
      width: 50,
      duration: 0.5,
      scale: 0.2,
      rotate: -10,
      delay: 0.2,
      top: '100%',
      ease: "power3.out",
      left: '50%',
      onComplete: () => { setIsFolderOpen(false) }
    })
  }

  const handelClose = () => {
    useGSAP(closeOpener())
  }

  return (
    <>
      <div className='w-[90vw] h-[90vh] folder-opener  absolute  mx-auto left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] backdrop-blur-md bg-[#2a2a2a] file-opener resize shadow-sm shadow-gray-300 rounded-md  border-[0.5px] border-gray-900 z-10'>
        <div className='flex'>
          <div className=' h-10 flex gap-1 m-2'>
            <div className='h-[15px] w-[15px] rounded-full bg-red-500 cursor-pointer' onClick={(e) => { e.stopPropagation(); handelClose() }}></div>
            <div className='h-[15px] w-[15px] rounded-full bg-yellow-500 cursor-pointer'></div>
            <div className='h-[15px] w-[15px] rounded-full bg-green-500 cursor-pointer'></div>
          </div>
         <div className='min-w-[90%] text-center font-normal text-xl'>{info?.name} <i className="ri-search-2-line text-md"></i></div>
        </div>
        <div className='overflow-x-hidden overflow-y-scroll hinde-scrollbar h-[85%] flex'>
          {
            info?.content?.map((folder,index)=>(
               <>
                  <Subfolder folderInfo={folder} key={index}/>
               </>
            ))

          }
        </div>
      </div>
    </>
  )
}
const FolderIcon = ({ info }) => {

  const [isFolderOpen, setIsFolderOpen] = useState(false);

  return (
    <>
      <div className='h-[45px] flex flex-col items-center cursor-pointer m-2' onClick={() => { setIsFolderOpen(true) }}>
        <div className='h-[35px] '>
          <img src={FOLDER_ICO} className='h-full  object-fill' />
        </div>
        <div className='lowercase text-sm text-white'>{info?.name}</div>
      </div>
      {isFolderOpen ? <FolderOpner isFolderOpen={isFolderOpen} setIsFolderOpen={setIsFolderOpen} info={info} /> : null}
    </>
  )
}

export default FolderIcon