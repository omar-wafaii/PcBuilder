import React from 'react'
import custompc from './imgs/custompc.jpeg';
import prepc from './imgs/prepc.jpeg';
import laptop from './imgs/laptop.jpeg';
import { useNavigate } from 'react-router-dom';


export default function Body() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('List');
  }
  return (
    <div className='body'>
      <div className='buildop'>
        <div className='op' onClick={handleClick}><div className='opimg'><img src={custompc}></img></div><div className="optext">Build your own custom pc !!!</div></div>
        <div className='op'><div className='opimg'><img src={prepc}></img></div><div className="optext">choose from our prebuilt collection !!!</div></div>
        <div className='op'><div className='opimg'><img src={laptop}></img></div><div className="optext">you can find the laptop that meets your needs here !!!</div></div>
      </div>
    </div>
  )
}
