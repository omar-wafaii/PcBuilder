
import React,{createContext, useState } from 'react'
export const context = createContext();

function ContextProvider({children}) {
    const [citem,setCitem] = useState('');
    const [cname, setCname] = useState("");
    const [cpart,setCpart] = useState([]);
    const [bnum,setBnum] = useState(-1);
    
    
    const [computerParts , setComputerParts] = useState([])
    
    
  return (
   <context.Provider value={{citem, setCitem,cname,setCname,computerParts,setComputerParts,cpart,setCpart,cpart,setCpart,bnum,setBnum}}>
      {children}
   </context.Provider>
    
  )
}

export default ContextProvider;