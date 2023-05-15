import './App.scss'
import Header from "./header/Header"
import {useEffect} from "react"
import {useTelegram} from "../hooks/useTelegram"

function App() {
  const {tg} = useTelegram()
  console.log(tg)
  
  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header/>
    </div>
  )
}

export default App
