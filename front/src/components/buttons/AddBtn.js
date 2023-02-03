import React,{useState, useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import {context} from "../context/Context.js"

function AddBtn({pro,item}) {
  const {cpart,setCpart} = useContext(context)
 
  const navigate = useNavigate();
  
    const handleAdd = () =>{
        setCpart(pro);
        navigate("/list");

        
      }

    

       
  return (
    <div className="addb" >
        <button onClick={handleAdd} id={pro.id} >+</button>
    </div>
  )
}

export default AddBtn;