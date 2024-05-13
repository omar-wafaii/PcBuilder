import React from 'react'
import custompc from '../imgs/background.webp';
import prepc from '../imgs/prepc.jpeg';
import laptop from '../imgs/laptop.jpeg';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('List');
  }
  return (
    <div className='body'>
      <div className='buildop'><img src={custompc}></img>
        <button className='op' onClick={handleClick}><p>Build your computer</p></button>
      </div>
    </div>
  )
}
