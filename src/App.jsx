import React, { useDebugValue, useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter ,Routes ,Route, useNavigate} from "react-router-dom"
import Start from './views/Start'
import Home from './views/Home'
import Screen from './views/Screen'

const App = () => {

  const [isfullScrn ,setFullscrn] = useState(false)
  const reqfullscreen = () =>{
    document.body.requestFullscreen().then(()=>{
        console.log('req accept')
     }).catch((e)=>{
       console.log(e)
     })
  }

  useEffect(()=>{
    reqfullscreen()
  },[isfullScrn])

  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Start chechscrn={setFullscrn}/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/screen' element={<Screen/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
