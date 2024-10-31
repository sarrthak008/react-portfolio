import React,{useEffect, useState} from 'react'
import { useMyContext } from '../contexts/MyContext'

const OpenAnyThing = ({type,value,close}) => {


   //hiding footer.... 
  let {setHaveFooter,haveFooter} = useMyContext()
  useEffect(()=>{
      setHaveFooter(false)
    },[close])



 //open the image..
  const IMGOPENER = ({path}) =>{
     return(
        <div className='w-full h-full flex items-center justify-center'>
                 <img src={path}/>
        </div>
     )
  }

 //go backward page...
  const CLOSER  = ({closeTab}) =>{
    return(    
     <div className='h-[20px] w-[20px] absolute top-10 left-2 z-40 text-yellow-50 opacity-70 text-2xl'onClick={()=>{
        closeTab(false)
     }}><i className="ri-arrow-left-line"></i></div>
    )
  }

  const WEBOPENER =({url})=>{
     console.log(url)
      const [loder,setloader] =useState(true)
      setTimeout(()=>{
        setloader(false)
      },3000)
      return(
        <>
         <div className='text-white text-sm absolute top-11 left-10 text-yellow-50 opacity-70 px-5 py-1 bg-gray-800 rounded-3xl text-left' >{url}</div>
        <div className='h-full w-full bg-white mt-[30%]'>
            {loder ?  
             <div className='h-full w-full absolute bg-gray-400 animate-pulse flex items-center justify-center'>
                 <span className='animate-ping block w-[40px] h-[40px] bg-yellow-300 rounded-full'></span>
              </div> : 
            <iframe src={url} className='h-full w-full'></iframe>
            }
        </div>
        </>
      )
  }


  return (
    <div className='h-lvh w-lvw bg-black absolute top-0 z-40 left-0 '>
    <CLOSER closeTab={close}/>
        {type=='image' ? 
           <IMGOPENER path={value}/>
        : type=="web" ? 
         <WEBOPENER url={value}/> : null
     }
    </div>
  )
}

export default OpenAnyThing
