import React from 'react'
import Nav from './Nav'

const FileOpener = ({data}) => {


  return (
    <div className='h-lvh w-lvw bg-[#282828] absolute top-0 left-0 z-10'>
      <Nav/>
      <span className='mt-9 ml-1 block text-yellow-100 text-xl font-semibold opacity-70'>📄 {data.name}</span>
      <div className='w-[90%] bg-[#32312F] h-[80%] m-auto overflow-y-scroll text-gray-200 mt-4 px-3'>
         {data.fildData.map((showdata)=>{
           return(<>
                <h2 className='font-bold text-4xl'>{showdata.title}</h2>
                <p className=' text-left text-[1.1rem] leading-6 mt-6'>{showdata.discription}</p>
                {showdata.Images ? "hiii" : null}
            </>)
         })}
      </div>
 
    </div>
  )
}

export default FileOpener
