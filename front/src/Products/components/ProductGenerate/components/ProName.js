import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

function ProName({pro,item}) {

    const navigate = useNavigate();
    const [pronum,setPronum] = useState(-1);
    const [prod,setProd] = useState("hi");

    const navPro = () =>{
        setProd(pro.name);
        setPronum(pro.id);
        
      }
    
      useEffect(()=> {
        if(!(prod=="hi" && pronum==-1 && item!=null)){
          const url = "/product/"+ prod ;
          navigate(url, 
            {
              state:{
                pronum,
                item,
              }
            });
         
        }
      },[prod]);
  return (
    <div className="proname" onClick={()=> navPro} id={pro.id} >{pro.name}</div>
  )
}

export default ProName;