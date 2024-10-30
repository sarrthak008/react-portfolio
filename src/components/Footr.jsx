import React from 'react'

const Footr = ({chechscrn,cur_scrn}) => {


    const chnageScrrenStatus =() =>{
         if(cur_scrn){
             chechscrn(false);
         }else{
            chechscrn(true);
         }
    }

  return (
    <div className='h-8 w-full fixed bottom-0 left-0 bg-gray-950 flex text-yellow-50 opacity-70 items-center justify-evenly'>
      <span className='cursor-pointer'><i className="ri-arrow-left-line"></i></span>
      <span className='cursor-pointer'><i className="ri-home-8-line"></i></span>
      <span className='cursor-pointer' onClick={chnageScrrenStatus}>{cur_scrn ? <i class="ri-collapse-diagonal-2-line"></i> : <i class="ri-expand-diagonal-fill"></i>}</span>
    </div>
  )
}

export default Footr

//chechscrn={setFullscrn} cur_scrn={isfullScrn}