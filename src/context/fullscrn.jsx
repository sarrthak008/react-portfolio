import { createContext, useContext, useState } from "react";

const Fullscrren = createContext()

const FullscrrenProvide =({children})=>{

    const [fullscrn , setFullscrn] = useState(false)
    const reqfullscreen = () =>{
        document.body.requestFullscreen().then(()=>{
            console.log('req accept')
            navigate('/home')
         }).catch((e)=>{
           console.log(e)
         })
     }

    if(fullscrn){
        reqfullscreen()
    }


  return(
     <Fullscrren.Provider value={{setFullscrn}}>
         {children}
     </Fullscrren.Provider>
  )
}

const useFullScrren =()=>{
     return useContext(Fullscrren)
}

export {FullscrrenProvide ,useFullScrren}