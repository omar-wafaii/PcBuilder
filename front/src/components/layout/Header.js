import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('Home');
  }
  return (
    <div className='header'>
        <div className='home' onClick={handleClick}>
            Pc Builder
        </div>
        <div className='search'><input typeof='text'></input></div>
        <div className='login'>login</div>
        </div>
  )
}
