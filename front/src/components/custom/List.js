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
       let items23=  JSON.parse(localStorage.getItem("computerparts"));
       if (!Array.isArray(items23)) { 
        items23 = [items23];
      }
       if(cpart != null){
       items23.push(cpart);
       };
       setComputerParts(items23);
       localStorage.setItem("computerparts",JSON.stringify(items23));
       
       
     }
    
   },[cpart]);

   

  
  return (
      
      <div className='list'>
        <div className='spec'> <div className='compos'><div className='compol'>Component</div><div className='selec'>Selection</div></div><div className='pri'>Price</div></div>
        <CopmuterPart name={"Processor"} item={"cpu"} index={0}  cpart={computerParts ? computerParts : null}/>
        <CopmuterPart name={"Motherboard"} item={"motherboard"} index={1}  chosen={null} cpart={computerParts ? computerParts : null}/>
        <CopmuterPart name={"CPU Cooler"} item={"cooler"} index={2}  chosen={null} cpart={computerParts ? computerParts : null}/>
        <CopmuterPart name={"Ram"} item={"ram"} index={3}  chosen={null} cpart={computerParts ? computerParts : null}/>
        <CopmuterPart name={"Storage"} item={"storage"} index={4}  chosen={null} cpart={computerParts ? computerParts : null}/>
        <CopmuterPart name={"Graphics Card"} item={"gpu"} index={5}  chosen={null} cpart={computerParts ? computerParts : null}/>
        <CopmuterPart name={"Power Supply"} item={"psu"} index={6}  chosen={null} cpart={computerParts ? computerParts : null}/>
        <CopmuterPart name={"Case"} item={"case"} index={7}  chosen={null} cpart={computerParts ? computerParts : null}/>
        
      </div>
    
  )
}

export default List;