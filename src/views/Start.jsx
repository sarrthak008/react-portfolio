import React from 'react'

const Start = () => {

     const reqfullscreen = () =>{
        document.body.requestFullscreen().then(()=>{
            console.log('req accept')
         }).catch((e)=>{
           console.log(e)
         })
     }

  return (
    <div className='h-screen w-screen bg-gray-950 text-gray-500 flex items-center justify-center'>
      <span onClick={reqfullscreen}>
         <i class="ri-shut-down-line text-5xl cursor-pointer hover:text-white transition-colors"></i>
      </span>
    </div>
  )
}

export default Start
