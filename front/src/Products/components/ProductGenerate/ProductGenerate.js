import React from 'react'

function ProductGenerate({data,item}) {

  
  useEffect(()=> {
    if(bnum != -1){
      setCname(data[bnum-1].name); 
     
    };
  },[bnum]);

  
    let genpro = '';
    
    switch(item){
      case "Processor":
        genpro = data.slice(0,20).map(pro => <div className="progrid"><div className="proname" onClick={ navPro} id={data.indexOf(pro)} >{pro.name}</div><div className='specdiv'>{pro.core_count}</div><div className='specdiv'>{pro.core_clock}</div><div className='specdiv'>{pro.boost_clock}</div><div className='specdiv'>{pro.tdp}</div><div className='specdiv'>{pro.integrated_graphics ? pro.integrated_graphics : 'none'}</div><div className='specdiv'>{pro.smt ? 'yes' : 'no'}</div><div className='specdiv'>${pro.price_usd}</div><div className="addb" ><button onClick={handleAdd} id={"b-" + pro.id} >+</button></div> </div>);
        break;
      case "Motherboard":
        genpro = data.slice(0,20).map(pro => <div className="progrid"><div className="proname" onClick={ navPro} id={data.indexOf(pro)} >{pro.name}</div><div className='specdiv'>{pro["socket_/_cpu"]}</div><div className='specdiv'>{pro.form_factor}</div><div className='specdiv'>{pro.memory_max}</div><div className='specdiv'>{pro.memory_slots}</div><div className='specdiv'>{pro.color}</div><div className='specdiv'></div><div className='specdiv'>${pro.price_usd}</div><div className="addb" ><button onClick={handleAdd} id={"b-" + pro.id} >+</button></div> </div>);
        break;
      case "CPU Cooler":
        genpro = data.slice(0,20).map(pro => <div className="progrid"><div className="proname" onClick={ navPro} id={data.indexOf(pro)} >{pro.name}</div><div className='specdiv'>{pro.fan_rpm} RPM</div><div className='specdiv'>{pro.noise_level}</div><div className='specdiv'>{pro.color}</div><div className='specdiv'>{pro.radiator_size}</div><div className='specdiv'></div><div className='specdiv'></div><div className='specdiv'>${pro.price_usd}</div><div className="addb" ><button onClick={handleAdd} id={"b-" + pro.id} >+</button></div> </div>);
        break;
      case "Ram":
        genpro = data.slice(0,20).map(pro => <div className="progrid"><div className="proname" onClick={ navPro} id={data.indexOf(pro)} >{pro.name}</div><div className='specdiv'>{pro.speed}</div><div className='specdiv'>{pro.modules}</div><div className='specdiv'>{pro["price_/_gb"]}</div><div className='specdiv'>{pro.color}</div><div className='specdiv'>{pro.first_word_latency}</div><div className='specdiv'>{pro.cas_latency}</div><div className='specdiv'>${pro.price_usd}</div><div className="addb" ><button onClick={handleAdd} id={"b-" + pro.id} >+</button></div> </div>);
        break;
      case "Storage":
        genpro = data.slice(0,20).map(pro => <div className="progrid"><div className="proname" onClick={ navPro} id={data.indexOf(pro)} >{pro.name}</div><div className='specdiv'>{pro.capacity}</div><div className='specdiv'>{pro["price_/_gb"]}</div><div className='specdiv'>{pro.type}</div><div className='specdiv'>{pro.interface}</div><div className='specdiv'>{pro.cache ? pro.cache : 'none'}</div><div className='specdiv'>{pro["form_factor"]}</div><div className='specdiv'>${pro.price_usd}</div><div className="addb" ><button onClick={handleAdd} id={"b-" + pro.id} >+</button></div> </div>);
        break;
      case "Graphics Card":
        genpro = data.slice(0,20).map(pro => <div className="progrid"><div className="proname" onClick={ navPro} id={data.indexOf(pro)} >{pro.name}</div><div className='specdiv'>{pro.chipset}</div><div className='specdiv'>{pro.memory}</div><div className='specdiv'>{pro.core_clock}</div><div className='specdiv'>{pro.boost_clock}</div><div className='specdiv'>{pro.color}</div><div className='specdiv'>{pro.length}</div><div className='specdiv'>${pro.price_usd}</div> <div className="addb" ><button onClick={handleAdd} id={"b-" + pro.id} >+</button></div></div>);
        break;
      case "Power Supply":
        genpro = data.slice(0,20).map(pro => <div className="progrid"><div className="proname" onClick={ navPro} id={data.indexOf(pro)} >{pro.name}</div><div className='specdiv'>{pro.form_factor}</div><div className='specdiv'>{pro.efficiency_rating}</div><div className='specdiv'>{pro.wattage}</div><div className='specdiv'>{pro.modular}</div><div className='specdiv'>{pro.color}</div><div className='specdiv'>{}</div><div className='specdiv'>${pro.price_usd}</div> <div className="addb" ><button onClick={handleAdd} id={"b-" + pro.id} >+</button></div></div>);
        break;
      case "Case":
        genpro = data.slice(0,20).map(pro => <div className="progrid"><div className="proname" onClick={ navPro} id={data.indexOf(pro)} >{pro.name}</div><div className='specdiv'>{pro.type}</div><div className='specdiv'>{pro.color}</div><div className='specdiv'>{pro.power_supply ? pro.power_supply : 'none'}</div><div className='specdiv'>{pro.side_panel_window}</div><div className='specdiv'>{pro["external_5.25\"_bays"]}</div><div className='specdiv'>{ pro["internal_3.5\"_bays"]}</div><div className='specdiv'>${pro.price_usd}</div> <div className="addb" ><button  onClick={handleAdd} id={"b-" + pro.id} >+</button></div></div>);
        break;
    }
  return (
    {genpro}
    
  )
}

export default ProductGenerate;