import React from 'react';


function Compatible({compa,watt}) {
  

  return (
    <div className='compatible'>
        <div className='check'>{compa}</div>
        <div className='watt'>{watt} watt</div>
    </div>
  )
}

export default Compatible