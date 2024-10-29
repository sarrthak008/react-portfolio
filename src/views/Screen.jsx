import React, { useState } from 'react'

const Screen = () => {

    const [time,setTime] = useState('')
   const [dayInfo,setDayInfo] = useState('')

    setInterval(()=>{

        // get a time....

         let date = new Date();
         let HR = date.getHours()
         let AMPM = HR >= 12 ? "PM" : 'AM'
         HR= HR<=12 ? HR : HR%12
         let MIN = date.getMinutes()
         MIN = MIN < 10 ? `0${MIN}` : MIN
         setTime(`${HR}:${MIN} ${AMPM}`)
    

    //get a date and motn info....
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      let month = date.getMonth()
      let year = date.getFullYear()
      let day= date.getDate()

      setDayInfo(`${monthNames[month]} ${day} , ${year}`)
   
    },1000)


  return (
    <div className='h-lvh w-lvw bg-[#282828]'>
         <div className='h-7 w-screen flex items-center justify-between px-3'>
             <div className='text-sm text-yellow-50 opacity-80 font-light'>{time}</div>
             <div className='flex gap-3'>
                <i className="ri-notification-line cursor-pointer text-md text-yellow-50 opacity-80"></i>
                <i class="ri-shut-down-line cursor-pointer text-md text-yellow-50 opacity-80"></i>
            </div>  
         </div>
         <div className='w-full h-48 flex items-center justify-center text-center flex-col'>
             <div className='text-yellow-100 font-bold text-7xl'>{time.split(" ")[0]}</div>
             <div className='text-yellow-100 text-md opacity-80'>{dayInfo}</div>
         </div>
    </div>
  )
}

export default Screen
