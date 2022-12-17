import React,{useContext, useState, useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import { context } from '../../../Context';
import CopmuterPart from './components/CopmuterPart';

function List() {
  const {citem, setCitem,computerParts,setComputerParts} = useContext(context)
  const location = useLocation();
 


  useEffect(()=>{
     if(!localStorage.getItem("computerparts") ){
       localStorage.setItem("computerparts", JSON.stringify(computerParts) );
     }else{
       let items=  JSON.parse(localStorage.getItem("computerparts"))
       setComputerParts(items)
     }
    
   },[])

   useEffect(()=>{
     localStorage.setItem("computerparts" , JSON.stringify(computerParts))

   },[])

 
  
  
  return (
      
      <div className='list'>
        <div className='spec'> <div className='compos'><div className='compol'>Component</div><div className='selec'>Selection</div></div><div className='pri'>Price</div></div>
        <CopmuterPart name={"Processor"} choose={"choose item"} chosen={false} cpart={computerParts.cpu ? computerParts : false}/>
        <CopmuterPart name={"Motherboard"} choose={"choose item"} chosen={false} cpart={computerParts.motherboard ? computerParts.motherboard : false}/>
        <CopmuterPart name={"CPU Cooler"} choose={"choose item"} chosen={false} cpart={computerParts.cpuCooler ? computerParts.cpuCooler : false}/>
        <CopmuterPart name={"Ram"} choose={"choose item"} chosen={false} cpart={computerParts.ram ? computerParts.ram : false}/>
        <CopmuterPart name={"Storage"} choose={"choose item"} chosen={false} cpart={computerParts.storage ? computerParts.storage : false}/>
        <CopmuterPart name={"Graphics Card"} choose={"choose item"} chosen={false} cpart={computerParts.gpu ? computerParts.gpu : false}/>
        <CopmuterPart name={"Power Supply"} choose={"choose item"} chosen={false} cpart={computerParts.powerSupply ? computerParts.powerSupply : false}/>
        <CopmuterPart name={"Case"} choose={"choose item"} chosen={false} cpart={computerParts.case ? computerParts.case : false}/>
        
      </div>
    
  )
}

export default List;