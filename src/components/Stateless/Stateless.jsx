import React from 'react';
import './Stateless.css'

const Stateless = ({ color, text }) => {

  return (
    <h2 className={color === 'rojo' ? 'rojo' : 'verde'}>Soy un stateless {text}</h2>
  )
}

export default Stateless;