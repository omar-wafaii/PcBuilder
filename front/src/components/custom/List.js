import React,{useContext, useState, useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import { context } from '../context/Context';
import CopmuterPart from './CopmuterPart';

function List() {
  const {computerParts,setComputerParts,cpart,setCpart} = useContext(context)
  
  
  

  useEffect(()=>{
     if(!localStorage.getItem("computerparts") ){
       localStorage.setItem("computerparts", JSON.stringify(computerParts) );
       
     }else{
       let items=  JSON.parse(localStorage.getItem("computerparts"));
       items.push(cpart);
       setComputerParts(items);
       localStorage.setItem("computerparts",JSON.stringify(items));
       
       console.log(computerParts);
     }
    
   },[cpart]);

   

  
  return (
      
      <div className='list'>
        <div className='spec'> <div className='compos'><div className='compol'>Component</div><div className='selec'>Selection</div></div><div className='pri'>Price</div></div>
        <CopmuterPart name={"Processor"} item={"cpu"} index={0}  />
        <CopmuterPart name={"Motherboard"} item={"motherboard"} index={1}  chosen={null} cpart={computerParts[1] ? computerParts[1] : null}/>
        <CopmuterPart name={"CPU Cooler"} item={"cooler"} index={2}  chosen={null} cpart={computerParts[2] ? computerParts[2] : null}/>
        <CopmuterPart name={"Ram"} item={"ram"} index={3}  chosen={null} cpart={computerParts[3] ? computerParts[3] : null}/>
        <CopmuterPart name={"Storage"} item={"storage"} index={4}  chosen={null} cpart={computerParts[4] ? computerParts[4] : null}/>
        <CopmuterPart name={"Graphics Card"} item={"gpu"} index={5}  chosen={null} cpart={computerParts[5] ? computerParts[5] : null}/>
        <CopmuterPart name={"Power Supply"} item={"psu"} index={6}  chosen={null} cpart={computerParts[6] ? computerParts[6] : null}/>
        <CopmuterPart name={"Case"} item={"case"} index={7}  chosen={null} cpart={computerParts[7] ? computerParts[7] : null}/>
        
      </div>
    
  )
}

export default List;