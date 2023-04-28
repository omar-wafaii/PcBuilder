import React from 'react'

function GenBtn({text,color,border,height,width,radius,onClick}) {
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: color,
        border:border,
        borderRadius: radius,
        height: height,
        width: width
      }}>
        {text}
      </button>
  )
}

export default GenBtn;