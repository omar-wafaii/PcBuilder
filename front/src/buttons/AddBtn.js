import React from 'react'

function AddBtn({pro}) {

    

    const handleAdd = (e) =>{
        setBnum((e.target.id).replace(/^\D+/g, ''));
        setCitem(item);
        
      }

    useEffect(()=> {
        if(!(bnum==-1 )){
            navigate("/list",
            {
              state:{
                bnum,
              } 
            }
            )  
        }
      })
  return (
    <div className="addb" >
        <button onClick={handleAdd} id={"b-" + pro.id} >+</button>
    </div>
  )
}

export default AddBtn;