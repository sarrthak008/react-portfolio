import React,{useEffect} from 'react'
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


  return (
    <div className='h-lvh w-lvw bg-black absolute top-0 z-40 left-0 '>
    <CLOSER closeTab={close}/>
        {type=='image' ? 
           <IMGOPENER path={value}/>
        : null}
    </div>
  )
}

export default OpenAnyThing
