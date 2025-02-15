import { createContext, useContext, useState, useEffect } from "react";

const Mycontext = createContext()

const MyContextProvider = ({ children }) => {

  const [isfileOpen, setFileOpen] = useState(false);
  const [isFolderOpen, setFolderOpen] = useState(false);



  const [time, setTime] = useState('')
  const [dayInfo, setDayInfo] = useState('')
  const [allTabs,setAllTabs] = useState([])


  setInterval(() => {

    // get a time....

    let date = new Date();
    let HR = date.getHours()
    let AMPM = HR >= 12 ? "PM" : 'AM'
    HR = HR <= 12 ? HR : HR % 12
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
    let day = date.getDate()

    setDayInfo(`${monthNames[month]} ${day} , ${year}`)

  }, 1000)
  
  const addTolocalStorgae = (iteam) =>{
    let tabs = JSON.parse(localStorage.getItem('tabs')) || []
    tabs.push(iteam);
    setAllTabs(tabs)
    localStorage.setItem('tabs',JSON.stringify(tabs))
  }



  

  return (
    <Mycontext.Provider value={{
      time,
      dayInfo,
      addTolocalStorgae,
      allTabs
    }}>
      {children}
    </Mycontext.Provider>
  )
}

const useMyContext = () => {
  return useContext(Mycontext)
}

export { useMyContext, MyContextProvider }