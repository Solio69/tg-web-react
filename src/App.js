import './App.scss'
import {useEffect} from "react"
import Button from "./components/button/Button"

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <Button onButtonClick={onClose} text={'Close App'}/>
    </div>
  )
}

export default App
