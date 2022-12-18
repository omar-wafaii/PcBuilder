import React,{useEffect, useState} from 'react'
import { useParams,Link,useLocation } from 'react-router-dom';

function Product() {

  const location = useLocation();
  const [pronum,setPronum] = useState(-1);
  const [item,setItem] = useState("");
  const [data, setData] = useState([]);
  setPronum(location.state.pronum);
  setItem(location.state.item);
     
    const getPcPart = async () => {
      try {
        const response = await fetch(`http://localhost:5000/product/${item}/${pronum}`);
        const jsonData = await response.json();
        setData(jsonData);
      }catch (err) {
        console.error(err.message);
      }
    };

    useEffect(()=> {
      getPcPart();
    },[]);

    let prokey = [];
    let info = [];
    let j =0;
    for(var key in data){
      if(data.hasOwnProperty(key)){
        info[j]=data[key];
        j++;
      }
    }
    
    
    
    
    let i =0;
    for(var key in data){
      if(data.hasOwnProperty(key)){
        prokey=Object.keys(data);
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