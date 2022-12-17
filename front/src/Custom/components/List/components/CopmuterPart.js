import React from 'react'
import {Link} from 'react-router-dom'
import {useContext, useState, useEffect} from 'react';
import { context } from '../../../../Context.js';

function CopmuterPart({name, choose,cpart }) {
  
  const {citem, setCitem,computerParts,setComputerParts,cname,setCname,price,setPrice,tdp,setTdp} = useContext(context);
  let comp = [cname,price,tdp,citem];
  useEffect(()=> {
    if(citem==cname){
      let items=  JSON.parse(localStorage.getItem("computerparts"))
      cpart.set(comp)
      items.set(cpart);
      setComputerParts(items);
      
    }
  },[])
  
  return (
    <div className="compo" ><div className='pname'> {name}</div>  
      
        {cpart ? <div className='savcomp' >{cpart[0]}  </div> :
          <Link to ={`/products/${name}`}><button className="linkb" >choose a {name}</button></Link>} 
    </div>
  )
}

export default CopmuterPart;