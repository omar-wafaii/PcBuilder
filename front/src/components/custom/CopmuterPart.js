import React from 'react'
import {Link} from 'react-router-dom'
import {useContext, useState, useEffect} from 'react';
import { context } from '../context/Context.js';

function CopmuterPart({name,item}) {
  
  const {citem,setCitem,computerParts,setComputerParts} = useContext(context);
  const [data,setData] = useState([]);
  const [index,setIndex] = useState(-1);

  const getPart =  async () => {
    try {
      const response = await fetch(`http://localhost:5000/product/${item}/${index}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }
  
  useEffect(()=> {
    computerParts.forEach(com => {
     if((com["part"]== item)){
      setIndex(com["id"]);
      getPart();
     }
    });
     
      
    },[]);
  
  console.log(data);
  return (
    <div className="compo" ><div className='pname'> {name}</div>  
      
        {data==[]? <div className='savcomp' >{data[0]}  </div> :
          <Link to ={`/products/${item}`}><button className="linkb" >choose a {name}</button></Link>} 
    </div>
  )
}

export default CopmuterPart;