import React from 'react'

const Menu = ({label, shareAs, source, imageUri}) => {
  return (
    <div>
      <h1>{label}</h1>
      <p>{shareAs}</p>
      <p>{source}</p>
      <img src={imageUri} alt={label} />
    </div>
  )
}

export default Menu