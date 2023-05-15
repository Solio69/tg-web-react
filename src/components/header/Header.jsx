import React, {useEffect} from 'react'
import './Header.scss'
import Button from "../button/Button"

const tg = window.Telegram.WebApp

const Header = () => {
  console.log(tg)

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <header className='header'>
      <div className='header__user-info'><span>{tg.initDataUnsafe?.user?.username}</span></div>
      <Button onButtonClick={onClose} text={'Close App'}/>
    </header>
  )
}

export default Header