import React, { useContext, useState, useEffect} from 'react';
import List from '../components/custom/List.js';
import Compatible from '../components/custom/Compatible.js';
import { context } from '../components/context/Context.js';
import Order from '../components/custom/Order.js';

function Custom() {
  const {computerParts,setComputerParts} = useContext(context);
  var totalWattage =0;

  function calculateTotalWattage(components) {
    return components.reduce((totalWattage, component) => {
      if (component.tdp && typeof component.tdp === 'string') {
        const wattage = parseInt(component.tdp, 10);
        if (!isNaN(wattage)) {
          return totalWattage + wattage;
        }
      }
      return totalWattage;
    }, 0);
  }
  
  
  
  const [watt, setWatt] = useState(0);
  const [compa,setCompa]= useState('no comaptibility issue');
  useEffect(()=>{
    
    totalWattage = calculateTotalWattage(computerParts);
    setWatt(totalWattage);
  },[computerParts]);
  

  return (
    <div className='custom'>
      
      <Compatible compa={compa} watt={watt}/>
      <List />
      <Order parts = {computerParts}/>
    </div>
  )
}

export default Custom;