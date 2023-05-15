import React from 'react'
import './Header.scss'
import Button from "../button/Button"
import {useTelegram} from "../../hooks/useTelegram"

const Header = () => {
  const {userName, onClose} = useTelegram()

  return (
    <header className='header'>
      <div className='header__user-info'><span>{userName}</span></div>
      <Button onButtonClick={onClose} text={'Close App'}/>
    </header>
  )
}

export default Header