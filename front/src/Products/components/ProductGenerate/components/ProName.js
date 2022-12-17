import React from 'react'

function ProName({pro}) {

    const [pronum,setPronum] = useState(-1);
    const [prod,setProd] = useState("hi");

    const navPro = (e) =>{
        setProd(e.target.textContent);
        setPronum(e.target.id);
        
      }

      useEffect(()=> {
        if(bnum != -1){
          setCname(pro.name); 
         
        };
      },[bnum]);
    
      
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
    <div className="proname" onClick={ navPro} id={pro.id} >{pro.name}</div>
  )
}

export default ProName;