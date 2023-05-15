import React from 'react'
import './Button.scss'

const Button = ({text, onButtonClick}) => {

  return (
    <button className='button' onClick={() => onButtonClick()}>
      {text}
    </button>
  )
}

export default Button