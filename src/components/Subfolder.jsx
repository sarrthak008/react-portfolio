import React, { useState, useEffect } from 'react'
import FOLDER_ICO from "../assets/folder.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import FileIcon from './FileIcon'
import Browser from './Browser'

const SubfolderOpener =({setIsFolderOpen,folderInfo})=>{
    useGSAP(() => {
        gsap.from(".folder-opener", {
          opacity: 0,
          duration: 0.001,
          width: 0,
          height: 0,
          scale: 0.5,
          rotate: -10,
          top: '10%',
          left: "50%",
          ease:'elastic.out',
        });
    
      }, []);
    
      const closeOpener = () => {
        let t1 = gsap.timeline()
        t1.to(".folder-opener", {
          optcity: 0,
          height: 50,
          width: 50,
          duration: 0.001,
          scale: 0.3,
          rotate: -10,
          delay: 0.1,
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
          <div className='w-[80%] h-[80%] folder-opener  absolute  mx-auto left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] backdrop-blur-md bg-[#242424] file-opener resize shadow-sm shadow-black rounded-md  border-[0.5px] border-gray-900 z-20'>
            <div className='flex'>
              <div className=' h-10 flex gap-1 m-2'>
                <div className='h-[15px] w-[15px] rounded-full bg-red-500 cursor-pointer' onClick={(e) => { e.stopPropagation(); handelClose() }}></div>
                <div className='h-[15px] w-[15px] rounded-full bg-yellow-500 cursor-pointer'></div>
                <div className='h-[15px] w-[15px] rounded-full bg-green-500 cursor-pointer'></div>
              </div>
             <div className='min-w-[90%] text-center font-normal text-xl'>{folderInfo?.name} <i className="ri-search-2-line text-md"></i></div>
            </div>
            <div className='overflow-x-hidden overflow-y-scroll hinde-scrollbar h-[85%] flex'>
              {
                folderInfo?.inner_data?.map((data,inde)=>(
                
                     <>
                       {data?.type=='file' ? <FileIcon info={data}/> : 
                        
                        data?.type == "htmlDoc" ? <Browser info={data}/> :null

                       }
                     </>
                ))
    
              }
            </div>
          </div>
        </>
      )
}

const Subfolder = ({ folderInfo }) => {
    const [subFolderOpener, setsubFolderOpener] = useState(false)

    console.log(folderInfo)
    return (
        <>
            <div className='h-[45px] flex flex-col items-center cursor-pointer m-2' onClick={()=>setsubFolderOpener(true)}>
                <div className='h-[35px] '>
                    <img src={FOLDER_ICO} className='h-full  object-fill' />
                </div>
                <div className='lowercase text-sm text-white'>{folderInfo?.name}</div>
            </div>
           {subFolderOpener ? <SubfolderOpener folderInfo={folderInfo} setIsFolderOpen={setsubFolderOpener}/>  : null}
        </>
    )
}

export default Subfolder