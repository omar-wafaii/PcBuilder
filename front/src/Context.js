
import React,{createContext, useState } from 'react'
export const context = createContext();

function ContextProvider({children}) {
    const [citem,setCitem] = useState('');
    const [cname, setCname] = useState("");
    
    const [computerParts , setComputerParts] = useState({
      cpu:-1,
      motherboard:-1,
      cpuCooler:-1,
      ram:-1,
      storage:-1,
      gpu:-1,
      powerSupply:-1,
      case:-1
    })
    
    
  return (
   <context.Provider value={{citem, setCitem,cname,setCname,tdp,setTdp,price,setPrice,savedl,setSavedl,savlist,setSavlist,computerParts,setComputerParts}}>
      {children}
   </context.Provider>
    
  )
}

export default ContextProvider;