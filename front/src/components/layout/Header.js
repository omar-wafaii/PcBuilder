import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
  const storedUserData = localStorage.getItem('userData');


  const gosign = () => {
    navigate('signup');
  }
  const handleClick = () => {
    navigate('Home');
  }


if (storedUserData) {
  const parsedUserData = JSON.parse(storedUserData);
    return (
      <div className='header'>
          <div className='home' onClick={handleClick}>
              Pc Builder
          </div>
          <div className='search'><input typeof='text'></input></div>
          <div>{parsedUserData.username}</div>
          </div>
    )
} else {
  return (
    <div className='header'>
        <div className='home' onClick={handleClick}>
            Pc Builder
        </div>
        <div className='search'><input typeof='text'></input></div>
        <div className='signclick' onClick={gosign}>signup</div>
        </div>
  )
}
  
}
