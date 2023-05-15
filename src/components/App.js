import './App.scss'
import Header from "./header/Header"
import React, {useEffect} from "react"
import {useTelegram} from "../hooks/useTelegram"

function App() {
  const {tg, onToggleMainButton} = useTelegram()
  console.log(tg)

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleMainButton}>Toggle</button>
    </div>
  )
}

export default App
