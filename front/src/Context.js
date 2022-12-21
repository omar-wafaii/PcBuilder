
import React,{createContext, useState } from 'react'
export const context = createContext();

function ContextProvider({children}) {
    const [citem,setCitem] = useState('');
    const [cname, setCname] = useState("");
    
    
    const [computerParts , setComputerParts] = useState([,,,,,,,])
    
    
  return (
   <context.Provider value={{citem, setCitem,cname,setCname,computerParts,setComputerParts}}>
      {children}
   </context.Provider>
    
  )
}

export default ContextProvider;