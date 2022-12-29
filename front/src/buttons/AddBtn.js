import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

function AddBtn({pro,item}) {

  const [bnum,setBnum] = useState(-1);
  const navigate = useNavigate();
  console.log("addbtn");
    const handleAdd = () =>{
        setBnum(pro.id);
        console.log("added");
      }

    useEffect(()=> {
        if(!(bnum==-1 )){
            console.log("nav");
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
        <button onClick={handleAdd} id={bnum} >+</button>
    </div>
  )
}

export default AddBtn;