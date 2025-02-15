import React ,{useState,useEffect}from 'react'
import BROSWER_ICO from "../assets/browser.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const LinksOpener = ({url,setBrowser}) => {

    const [burl,setBurl] = useState(url || "https://www.easycode.support/")

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
  
    },); 
  
  const  closeOpener = ()=>{
      let t1 = gsap.timeline()
      t1.to(".file-opener",{
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
        onComplete:()=>{setBrowser(false)}
      })
    }
  
  const handelClose =()=>{
       useGSAP(closeOpener())
    }
  

    return (
        <>
            <div className={`h-[90vh] w-[90vw]  absolute  mx-auto left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] backdrop-blur-md bg-[#323232] file-opener shadow-sm shadow-gray-800 rounded-md resize`} >
                <div className='flex'>
                    <div className=' h-10 flex gap-1 m-2'>
                        <div className='h-[15px] w-[15px] rounded-full bg-red-500 cursor-pointer' onClick={(e) => { e.stopPropagation(); handelClose() }}></div>
                        <div className='h-[15px] w-[15px] rounded-full bg-yellow-500 cursor-pointer'></div>
                        <div className='h-[15px] w-[15px] rounded-full bg-green-500 cursor-pointer'></div>
                    </div>
                    <div className=''><span className='py-[0px] px-8 mt-1 block bg-gray-500  rounded-full text-black'>{url} <i class="ri-chrome-fill"></i></span></div>
                </div>
                <div className='overflow-x-hidden overflow-y-scroll hinde-scrollbar h-[90%]'>
                    <iframe src={burl} className='h-full w-full bg-white'></iframe>
                </div>
            </div>
        </>
    )
}

const Browser = ({ info }) => {

    const [Browser, setBrowser] = useState(false)
    
    return (
        <>
            <div className='h-[45px] flex flex-col items-center cursor-pointer m-2' onClick={() => { setBrowser(true) }}>
                <div className='h-[35px] '>
                    <img src={BROSWER_ICO} className='h-full  object-fill' />
                </div>
                <div className='lowercase text-sm text-white'>{"website"}</div>
            </div>
            {Browser ? <LinksOpener url={info?.url} setBrowser={setBrowser}/> : null}
        </>
    )
}

export default Browser