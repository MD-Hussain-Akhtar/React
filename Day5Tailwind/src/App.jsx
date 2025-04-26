import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componebt/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <Card />
  <Card userName="hussain" branch="Computer Scince"/>
   </>
  )
}

export default App
