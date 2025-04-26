import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContexProvide from './Component/UserContexProvide'
import Login from './Component/Login'
import Profile from './Component/Profile'
function App() {


  return (
  <UserContexProvide>
    <h1>React with Hussain akhter</h1>
    <Login />
    <Profile />
  </UserContexProvide>  )
}

export default App
