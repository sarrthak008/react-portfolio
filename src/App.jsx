import React from 'react'
import './App.css'
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Start from './views/Start'


const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Start/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
