import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Navigation/Header'
import Footer from './Navigation/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <Footer></Footer>
    </>
  )
}

export default App
