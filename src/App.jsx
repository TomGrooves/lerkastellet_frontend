import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {MainPage} from '../src/pages/MainPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage/>
    </>
  )
}

export default App
