import React,{ useState, useEffect, useContext } from 'react';
import { useParams,Link,useNavigate, useLocation } from 'react-router-dom';
import ProductGenerate from './components/ProductGenerate/ProductGenerate.js';
import ProductSpec from './components/ProductSpec.js';
import { context } from '../Context.js';




function Products() {
    const { item } = useParams();
    const {citem, setCitem,computerParts,setComputerParts} = useContext(context);
   
    
   const [data,setData] = useState([]);

    
   
    const getParts =  async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${item}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    }
    
    useEffect(()=> {
      getParts();
      setCitem(item);
    }, []);
   
    let info = [];
    let i =0;
    for (var key in data[0]) {
      if(data[0].hasOwnProperty(key)){
        info[i] = key;
        i++;
      }
    }
    
   
    
   
    const navigate = useNavigate();
    const [pronum,setPronum]= useState(-1);
    const [prod,setProd] = useState("hi");
    const [bnum,setBnum] = useState(-1);
    
    

   

    
    
    
    
    
  return (
    
    <div className='products'>
      <div className='pheader'><h2>choose a {item}</h2></div>
      <div className="procon">
      <ProductSpec spec = {info}/>
      <ProductGenerate data ={data} item={citem}/>

     
     
      </div>
    </div>
    
  )
}

export default Products;