import React, {useEffect} from "react"
import './App.scss'
import Header from "./header/Header"
import {useTelegram} from "../hooks/useTelegram"
import {Route, Routes} from "react-router-dom"
import ProductList from "./productList/ProductList"
import Form from "./form/Form"

function App() {
  const {tg} = useTelegram()
  console.log(tg)

  useEffect(() => {
    tg.ready()
  }, [tg])

  return (
    <>
      <Header/>
      <main className="main">
        <Routes>
          <Route index element={<ProductList/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
