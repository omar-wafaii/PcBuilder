import React from 'react'
import { useParams,Link,useLocation } from 'react-router-dom';

function Product() {
  const location = useLocation();
  let data = 0; 
  switch(location.state.item){
    case "Processor":
      data = require("./usedata/cpu.json");
      break;
    case "Motherboard":
      data = require("./usedata/motherboard.json");
      break;
    case "CPU Cooler":
      data = require("./usedata/cpu-cooler.json");
      break;
    case "Ram":
      data = require("./usedata/memory.json");
      break;
    case "Storage":
      data = require("./usedata/internal-hard-drive.json");
      break;
    case "Graphics Card":
      data = require("./usedata/video-card.json");
      break;
    case "Power Supply":
      data = require("./usedata/power-supply.json");
      break;
    case "Case":
      data = require("./usedata/case.json");
      break;
  };
    const {prod} = useParams();
    let prokey = [];
    let info = [];
    let j =0;
    for(var key in data[location.state.pronum]){
      if(data[location.state.pronum].hasOwnProperty(key)){
        info[j]=data[location.state.pronum][key];
        j++;
      }
    }
    let proc =0;
    if(proc==1){
      
    }
    
    
    
    let i =0;
    for(var key in data[location.state.pronum]){
      if(data[location.state.pronum].hasOwnProperty(key)){
        prokey=Object.keys(data[0]);
        i++;
      }
    }
    for (i=0;i< info.length;i++){
      if(info[i] == null){
        info[i] = "none";
      }else if(info[i]== true) {
        info[i] = "yes";
      }
    }
    
    var gendiv = prokey.map((pkey,k) => <div>{pkey} : {info[k] }</div>)
  return (
    <div>{gendiv}</div>
  )
}

export default Product;