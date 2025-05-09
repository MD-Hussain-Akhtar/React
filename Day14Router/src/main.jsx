import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home.jsx'


import User from './component/User.jsx'
import Github, { githubInfoLoader } from 'Component/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
 
    <Route path='user/:userid' element={<User />} />
    <Route 
    loader={githubInfoLoader}
    path='github' 
    element={<Github />}
    />
    </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>,
)