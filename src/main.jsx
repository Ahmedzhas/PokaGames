import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CardContextProvider from './PokaGame/context/CardcontextProvider.jsx'
import Welcome from './WelcomePage/Welcome'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import App from './App.jsx'
import About from './About/About.jsx'
import NotFound from './PageNotFound/NotFound.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Welcome/>
    
  },
  {
    path:'/game',
    element:<App/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'*',
    element:<NotFound/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <CardContextProvider>
    <RouterProvider router={router} />
  </CardContextProvider>
  // </React.StrictMode> 
)
