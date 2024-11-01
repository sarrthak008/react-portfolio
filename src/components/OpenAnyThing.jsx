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
    

    const [loder,setloader] =useState(true)
    setTimeout(()=>{
      setloader(false)
    },1500)

     return(
        <div className='w-full h-full flex items-center justify-center'>
            {loder ?  
             <div className='h-2/6 w-full absolute bg-gray-400 animate-pulse flex items-center justify-center sm:h-3/4 sm:w-3/4'>
              </div> : 
              <img src={path} alt="image about project..." className='sm:h-3/4' />
            }
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
      },2500)

      return(
        <>
        <div className='absolute top-11 left-10 flex'>
         <div className='text-white  text-yellow-50 opacity-70 px-5 py-1 bg-gray-800 rounded-3xl text-left text-sm line-clamp-1 sm:w-full' >{url}</div>
         <span className='text-white'><i className="ri-arrow-right-up-line"></i></span>
        </div>
         <div className='h-full w-full bg-white mt-[30%] sm:mt-[8%] overflow-hidden  flex items-center justify-center'>
            {loder ?  
             <div className='h-full w-full absolute bg-gray-400 animate-pulse flex items-center justify-center'>
              </div> : 
            <iframe src={url} className='h-full w-full '></iframe>
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
