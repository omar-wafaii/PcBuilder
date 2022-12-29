import React from 'react'
import {Link} from 'react-router-dom'
import {useContext, useState, useEffect} from 'react';
import { context } from '../../../../Context.js';

function CopmuterPart({name, index,cpart ,item}) {
  
  const {citem, setCitem,computerParts,setComputerParts} = useContext(context);
  const [data,setData] = useState([])

  const getPart =  async () => {
    try {
      const response = await fetch(`http://localhost:5000/product/${item}/${cpart}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }
  
  useEffect(()=> {
    if(citem==item){
      getPart();
      if(data){
      let items=  JSON.parse(localStorage.getItem("computerparts"))
      setComputerParts(items);
      let lpart = computerParts;
      lpart[index] = cpart;
      setComputerParts(lpart);
      localStorage.setItem("computerparts" , JSON.stringify(computerParts));
      console.log("hi");
      console.log(data);
      }
     
      
    }
  },[])
  
  return (
    <div className="compo" ><div className='pname'> {name}</div>  
      
        {data && cpart ? <div className='savcomp' >{data[0]}  </div> :
          <Link to ={`/products/${item}`}><button className="linkb" >choose a {name}</button></Link>} 
    </div>
  )
}

export default CopmuterPart;