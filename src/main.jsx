import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Header from '../src/components/Header.jsx'
import Home from './pages/Home page/Home.jsx'
import Footer from "./components/Footer.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header/>
   <Home/>
   <Footer/>
  </React.StrictMode>
)
