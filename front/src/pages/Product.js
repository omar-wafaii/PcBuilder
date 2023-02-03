import React,{useEffect, useState,Fragment} from 'react'
import { useParams,Link,useLocation } from 'react-router-dom';
import AddBtn from '../components/buttons/AddBtn.js';

function Product() {

  const location = useLocation();
  const [pronum,setPronum] = useState(location.state.pronum);
  const [item,setItem] = useState(location.state.item);
  const [data, setData] = useState([]);
  
     
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
    <Fragment>
      <div>{gendiv}</div>
      <AddBtn pro ={data} item={item} />
    </Fragment>
  )
}

export default Product;