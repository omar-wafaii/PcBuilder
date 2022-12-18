import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

function AddBtn({pro,item}) {

  const [bnum,setBnum] = useState(-1);
  const navigate = useNavigate();

    const handleAdd = () =>{
        setBnum(pro.id);
      }

    useEffect(()=> {
        if(!(bnum==-1 )){
            navigate("/list",
            {
              state:{
                bnum,
                item,
              } 
            }
            )  
        }
      })
  return (
    <div className="addb" >
        <button onClick={()=>handleAdd} id={"b-" + bnum} >+</button>
    </div>
  )
}

export default AddBtn;