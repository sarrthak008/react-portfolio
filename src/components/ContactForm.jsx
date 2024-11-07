import React from 'react'
import Nav from './Nav'


const ContactForm = () => {
  return (
     <div className='h-lvh w-lvw bg-[#282828] absolute top-0 left-0 z-10'>
       <Nav/>
       <span className='mt-9 ml-1 block text-yellow-100 text-xl font-semibold opacity-70'>📄 contact</span>
       <div className='bg-[#32312F] h-[70%] w-[90%] m-auto mt-5 flex flex-col items-center justify-center gap-7 text-yellow-50 font-normal'>
         <input placeholder='name eg. sarthak' className='bg-[#45423C] outline-none outline-[0.5px] rounded-md focus:outline-yellow-300 focus:border-none w-[80%] py-2 px-3 border-white text-xl  border-[0.2px] border-sky-100 opacity-70'/>
         <input placeholder='mobile number eg. 0123456789' className='bg-[#45423C] outline-none outline-[0.5px] rounded-md focus:outline-yellow-300 focus:border-none w-[80%] py-2 px-3 border-white text-xl  border-[0.2px] border-sky-100 opacity-70'/>
         <textarea placeholder='message eg.hello, how are your ?' className='bg-[#45423C] outline-none outline-[0.5px] rounded-md focus:outline-yellow-300 focus:border-none w-[80%] py-2 px-3 border-white text-xl  border-[0.2px] border-sky-100 opacity-70 h-40'/>
         <button className='orange px-5 py-2 text-xl rounded-sm border-0  hover:bg-yellow-600 text-black'><i class="ri-chat-heart-fill"></i> send message</button>
       </div>
     </div>
  )
}

export default ContactForm
