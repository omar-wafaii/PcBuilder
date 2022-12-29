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
       setComputerParts(items);
     }
    
   },[])

   useEffect(()=>{
     localStorage.setItem("computerparts" , JSON.stringify(computerParts))
     if(computerParts !=false){console.log(computerParts);}

   },[])

 
  
  
  return (
      
      <div className='list'>
        <div className='spec'> <div className='compos'><div className='compol'>Component</div><div className='selec'>Selection</div></div><div className='pri'>Price</div></div>
        <CopmuterPart name={"Processor"} item={"cpu"} index={0}  chosen={false} cpart={computerParts[0] ? computerParts[0] : false}/>
        <CopmuterPart name={"Motherboard"} item={"motherboard"} index={1}  chosen={false} cpart={computerParts[1] ? computerParts[1] : false}/>
        <CopmuterPart name={"CPU Cooler"} item={"cooler"} index={2}  chosen={false} cpart={computerParts[2] ? computerParts[2] : false}/>
        <CopmuterPart name={"Ram"} item={"ram"} index={3}  chosen={false} cpart={computerParts[3] ? computerParts[3] : false}/>
        <CopmuterPart name={"Storage"} item={"storage"} index={4}  chosen={false} cpart={computerParts[4] ? computerParts[4] : false}/>
        <CopmuterPart name={"Graphics Card"} item={"gpu"} index={5}  chosen={false} cpart={computerParts[5] ? computerParts[5] : false}/>
        <CopmuterPart name={"Power Supply"} item={"psu"} index={6}  chosen={false} cpart={computerParts[6] ? computerParts[6] : false}/>
        <CopmuterPart name={"Case"} item={"case"} index={7}  chosen={false} cpart={computerParts[7] ? computerParts[7] : false}/>
        
      </div>
    
  )
}

export default List;