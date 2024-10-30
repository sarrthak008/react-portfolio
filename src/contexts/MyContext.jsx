import {  createContext ,useContext ,useState ,useEffect} from "react";

const Mycontext = createContext()

const MyContextProvider =({children}) =>{

    const [isfileOpen,setFileOpen] = useState(false);
    useEffect(()=>{
      localStorage.setItem('isfileopen',isfileOpen)
    },[isfileOpen])

     return(
         <Mycontext.Provider value={{isfileOpen,setFileOpen}}>
             {children}
         </Mycontext.Provider>
     )
}

const useMyContext = () =>{
     return useContext(Mycontext)
}

export {useMyContext, MyContextProvider}