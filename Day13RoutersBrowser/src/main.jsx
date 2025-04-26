import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Component/Navbar.jsx'
import About from './Component/About.jsx'
import Contect from './Component/Contect.jsx'
import Layout from './Component/Layout.jsx'


const react=createBrowserRouter([
  {
        path: '/',
        element: <Layout/>,
        children: [
         
          {
            path: "about",
            element: <About />
          },
          {
            path: "contact",
            element: <Contect />
          }`                                                              `
        ]
      }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={react} />
      
  </StrictMode>,
)
