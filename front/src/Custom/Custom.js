import React, { useState} from 'react';
import List from './components/List/List.js';
import Compatible from './components/Compatible.js';

function Custom() {
  const [watt, setWatt] = useState(0);
  const [compa,setCompa]= useState('no comaptibility issue')

  return (
    <div className='custom'>
      <Compatible compa={compa} watt={watt}/>
      <List />
    </div>
  )
}

export default Custom;