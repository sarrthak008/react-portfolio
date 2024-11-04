import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import FILE from '../assets/file.png'
import BROWSERICON from '../assets/browser.png'
import SCREENSHOT from '../assets/screenshot.png'
import GITHUBICON from '../assets/github.png'
import OpenAnyThing from './OpenAnyThing'
import { useMyContext } from '../contexts/MyContext'

const FileContentOpener = ({ project }) => {

  const [opener, setOpener] = useState(false);
  const [type, settype] = useState('')
  const [value, setValue] = useState('')

  let { setHaveFooter, haveFooter } = useMyContext()
  const {setFileContentOpen} = useMyContext()
  useEffect(() => {
    setHaveFooter(true)
  }, [opener])


  return (
    <div className='h-lvh w-lvw bg-black absolute top-0 z-40 left-0 '>
      <Nav />
      <div className='text-yellow-50 opacity-70 text-[11px]  w-full mt-9 text-sm'> <i className="ri-folder-received-fill ml-5 mr-2 cursor-pointer" onClick={()=>{setFileContentOpen(false)}}></i> / {project.name}</div>
      <div className='flex mt-9 gap-4 w-full flex-wrap'>
        {project.inner_data.map((data) => {
          return (
            <>
              {data.type == "file" ?
                <div className='flex-col items-center text-center'>
                  <img src={FILE} className='h-[45px] w-[45px] cursor-pointer mx-2' onClick={()=>{
                    settype('file');
                    setValue(data);
                    setOpener(true) 
                  }}></img>
                  <div className='text-white'>{data.title}</div>
                </div> :
                data.type == "htmlDoc" ?
                  <div className='flex-col items-center text-center'>
                    <img src={BROWSERICON} className='h-[45px] w-[45px] cursor-pointer mx-2' onClick={() => {
                      settype('web');
                      setValue(data.url)
                      setOpener(true)
                    }} />
                    <div className='text-white'>{data.title}</div>
                  </div>
                  : data.type === "photo" ?
                    <div className='flex-col items-center text-center'>
                      <img src={SCREENSHOT} className='h-[45px] w-[45px] cursor-pointer mx-4' onClick={() => {
                        settype('image');
                        setValue(data.url)
                        setOpener(true)
                      }} />
                      <div className='text-white'>{data.title}</div>
                    </div>
                    : data.type == "gitdoc" ?
                      <div className='flex-col items-center text-center'>
                        <img src={GITHUBICON} className='h-[45px] w-[45px] cursor-pointer mx-4' />
                        <div className='text-white'>{data.title}</div>
                      </div>
                      : null
              }
            </>
          )
        })}
      </div>
      {opener ? <OpenAnyThing type={type} value={value} close={setOpener} /> : null}
    </div>
  )
}

export default FileContentOpener
