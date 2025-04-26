import { useState } from 'react'

import PropTypes from 'prop-types'
import './App.css'
import { prototype } from 'postcss/lib/previous-map'

function App({ProductName,Price,check}) {
  const [count, setCount] = useState(0)

  return (
   <>
  
  {check?<h1 className='font-bold text-[50px] text-lime-600'>Cource Price</h1> :"note  Cource name"}
   
    <div className="isolate relative bg-white px-6 lg:px-2 sm:py-32">
     
      
      <div className="items-center gap-y-6 grid grid-cols-1 lg:grid-cols-2 mx-auto mt-16 sm:mt-20 max-w-lg lg:max-w-4xl">
       
        <div className="relative bg-gray-900 shadow-2xl p-8 sm:p-10 rounded-3xl ring-1 ring-gray-900/10">
          <h3 className="font-semibold text-indigo-400 text-base/7">{ProductName.toUpperCase()}</h3>
          <p className="flex items-baseline gap-x-2 mt-4">
            <span className="font-semibold text-white text-5xl tracking-tight">Rs:{Price}</span>
            <span className="text-gray-400 text-base">/Life Time</span>
          </p>
          <p className="mt-6 text-gray-300 text-base/7">Dedicated support and infrastructure for your company.</p>
          <ul className="space-y-3 mt-8 text-gray-300 text-sm/6">
            <li>✔ Unlimited products</li>
            <li>✔ Unlimited subscribers</li>
            <li>✔ Advanced analytics</li>
            <li>✔ Dedicated support representative</li>
            <li>✔ Marketing automations</li>
            <li>✔ Custom integrations</li>
          </ul>
          <a
            href="#"
            className="block bg-indigo-500 hover:bg-indigo-400 mt-8 px-3.5 py-2.5 rounded-md font-semibold text-white text-sm text-center"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
   </>
  )
}


export default App
