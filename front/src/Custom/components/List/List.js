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

   },[])

 
  
  
  return (
      
      <div className='list'>
        <div className='spec'> <div className='compos'><div className='compol'>Component</div><div className='selec'>Selection</div></div><div className='pri'>Price</div></div>
        <CopmuterPart name={"Processor"} index={0} choose={"choose item"} chosen={false} cpart={computerParts[0] ? computerParts[0] : false}/>
        <CopmuterPart name={"Motherboard"} index={1} choose={"choose item"} chosen={false} cpart={computerParts[1] ? computerParts[1] : false}/>
        <CopmuterPart name={"CPU Cooler"} index={2} choose={"choose item"} chosen={false} cpart={computerParts[2] ? computerParts[2] : false}/>
        <CopmuterPart name={"Ram"} index={3} choose={"choose item"} chosen={false} cpart={computerParts[3] ? computerParts[3] : false}/>
        <CopmuterPart name={"Storage"} index={4} choose={"choose item"} chosen={false} cpart={computerParts[4] ? computerParts[4] : false}/>
        <CopmuterPart name={"Graphics Card"} index={5} choose={"choose item"} chosen={false} cpart={computerParts[5] ? computerParts[5] : false}/>
        <CopmuterPart name={"Power Supply"} index={6} choose={"choose item"} chosen={false} cpart={computerParts[6] ? computerParts[6] : false}/>
        <CopmuterPart name={"Case"} index={7} choose={"choose item"} chosen={false} cpart={computerParts[7] ? computerParts[7] : false}/>
        
      </div>
    
  )
}

export default List;