import React from 'react'
import BROSWER_ICO from "../assets/browser.png"

const Browser = ({info}) => {
    console.log(info)
    return (
        <>
            <div className='h-[45px] flex flex-col items-center cursor-pointer m-2'>
                <div className='h-[35px] '>
                    <img src={BROSWER_ICO} className='h-full  object-fill' />
                </div>
                <div className='lowercase text-sm text-white'>{"website"}</div>
            </div>
            
        </>
    )
}

export default Browser