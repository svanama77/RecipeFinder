import React from 'react'

const Menu = ({label, calories, cuisineType, imageUri}) => {
  return (
    <div>
      <h1 className="name">Name: {label}</h1>
      <p className="calories">calories :{calories}</p>
      <p className="cuisine">cuisine :{cuisineType}</p>
      <img src={imageUri} alt={label} />
    </div>
  )
}

export default Menu