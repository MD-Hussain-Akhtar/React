import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Contex/Theme'
import ThemeBtn from './Components/ThemeBtn'

import Card from './Components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("lightTheme")
  
 const lightTheme =()=>{
  setThemeMode("light")
 }

 const darkTheme =()=>{
  setThemeMode("dark")
 }

 //actualy  change in theme

 useEffect(() => {
  document.querySelector('html').classList.remove('dark','dark')
  document.querySelector('html').classList.add(themeMode)

}, [themeMode])
 


  return (
<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap items-center min-h-screen">
      <div className="w-full">
        <div className="flex justify-end mx-auto mb-4 w-full max-w-sm">
       
          <ThemeBtn />
       
        </div>

        <div className="mx-auto w-full max-w-sm">
          <Card />
        </div>
      </div>
    </div>
</ThemeProvider>
  )
}

export default App
