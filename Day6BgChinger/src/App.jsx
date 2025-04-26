import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  function sh(){
    <h1>Hello Words....first-letter:</h1>
  }

  return (
    <>
      <div className="justify-center content-end min-h-screen tems-center" style={{ backgroundColor: color }}>
     
        <div className='flex justify-between bg-white m-8 mb-6 p-9 rounded-2xl'>
          <button></button>
      <button onClick={()=>setColor('blue')} className='bg-blue-700 p-4 rounded-full text-white text-lg'>Color Change to Blue</button>
      <button onClick={()=>setColor('red')} className='bg-red-600 p-4 rounded-full text-white text-lg'>Color Change to red</button>
      <button onClick={()=>setColor('Green')} className='bg-green-800 p-4 rounded-full text-white text-lg'>Color Change to Green</button>
      <button onClick={()=>setColor('Yellow')} className='bg-yellow-400 p-4 rounded-full text-white text-lg'>Color Change to Yellow</button>
      <button onClick={()=>setColor('pink')} className='bg-pink-600 p-4 rounded-full text-white text-lg'>Color Change to Pink</button>
      </div>
      </div>
    </>
  )
}
export default App
