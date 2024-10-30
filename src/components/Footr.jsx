import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../contexts/MyContext';

const Footr = ({chechscrn,cur_scrn}) => {

  let {setFileOpen} = useMyContext()

    const chnageScrrenStatus =() =>{
         if(cur_scrn){
             chechscrn(false);
         }else{
            chechscrn(true);
         }
    }

    const getoback = () =>{
      setFileOpen(false)
    }


  return (
    <div className='h-12 w-full fixed bottom-0 left-0 bg-gray-950 flex text-yellow-50 opacity-70 items-center justify-evenly text-[22px] sm:hidden z-20'>
      <span className='cursor-pointer' onClick={getoback}><i className="ri-arrow-left-line"></i></span>
      <span className='cursor-pointer'><i className="ri-home-8-line"></i></span>
      <span className='cursor-pointer' onClick={chnageScrrenStatus}>{cur_scrn ? <i class="ri-collapse-diagonal-2-line"></i> : <i class="ri-expand-diagonal-fill"></i>}</span>
    </div>
  )
}

export default Footr
