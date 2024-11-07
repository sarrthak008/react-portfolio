import React, { useState } from 'react'
import CONTACT from '../assets/contact.png'
import ContactForm from './ContactForm'
import { useMyContext } from '../contexts/MyContext'

const Contact = ({fileInfo}) => {

  let {contactopen ,setContactOpen} = useMyContext() 

  return (
    <>
      <div className='h-[30px] w-[40px] cursor-pointer mx-2' onClick={() => {
        setContactOpen(true);
      }}>
        <img  src={CONTACT}/>
        <div className='text-yellow-50 opacity-70 text-[11px] text-center w-full'>{fileInfo.name}</div>
      </div>
      {contactopen ? <ContactForm/> : null}
    </>
  )
}

export default Contact
