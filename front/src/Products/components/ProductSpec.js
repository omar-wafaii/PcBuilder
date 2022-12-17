import React from 'react'

function ProductSpec({spec}) {
  return (
    <div className="prospec"><div className="proname">name</div><div className='specdiv'>{spec[4]}</div><div className='specdiv'>{spec[5]}</div><div className='specdiv'>{spec[6]}</div><div className='specdiv'>{spec[7]}</div><div className='specdiv'>{spec[8]}</div><div className='specdiv'>{spec[9]}</div><div className='specdiv'>Price</div></div>
  )
}

export default ProductSpec