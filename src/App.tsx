import { Content } from "./Content"
import { Template } from './css/styled'
import React, { useEffect } from "react"
import Aos from "aos"
import { Header } from "./components/Header/Header"
import { GlobalStyle } from "./css/global";
import { ToastContainer } from "react-toastify";

function App() {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Template>
        <Header />
        <Content />
      </Template>
    </>
  )
}

export default App
