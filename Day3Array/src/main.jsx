import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function S(){
  <h1>hellp Asalam Walikom </h1>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <S/>
  </StrictMode>,
)
