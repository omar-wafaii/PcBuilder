import React from 'react'
import {Link} from 'react-router-dom'
import {useContext, useState, useEffect} from 'react';
import { context } from '../context/Context.js';
import GenBtn from '../buttons/genBtn.js';

function CopmuterPart({name,item,cpart}) {
  
  const {citem,setCitem,computerParts,setComputerParts,setCpart} = useContext(context);

  const [data,setData] = useState(false);
  const [index,setIndex] = useState(-1);
  useEffect(()=>{
    if(cpart != null){
      for(let i=0;i<cpart.length;i++){
        if(cpart[i]?.part == item){
          setData(cpart[i]);
      }
    }
  };
  },[cpart]);

  function deletec(data){
    var temp = cpart;
    for(let i=0;i<cpart.length;i++){
      if(temp[i]== data){
        temp.splice(i,1);
      }
    }
    localStorage.setItem("computerparts",JSON.stringify(temp));
    setData(false);
    
    
  }
  
  
  return (
    <div className="compo" ><div className='pname'> {name}</div>  
      
        {data ? <div className='savcomp' ><div className='cname'>{data.name}</div>  <div className='cprice'>{data.price_usd}</div>
          <div className='delbtn'><GenBtn text={"delete"} color={"cyan"} border={"3px solid cyan"} radius={"15%"} height={"80%"} width={"60px"} onClick={()=>deletec(data)}/></div>
        </div> :
          <Link to ={`/products/${item}`}><button className="linkb" >choose a {name}</button></Link>} 
    </div>
  )
}

export default CopmuterPart;