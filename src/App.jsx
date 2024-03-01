import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Copyright from './components/Copyright/Copyright'
import Home from './pages/Home/Home'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'


function App() {
  

  return (
    <div>
      <h1>This is restaurant project</h1>
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
       
      </Routes>
      <Footer/>
      <Copyright/>
     

    </div>
  )
}

export default App
