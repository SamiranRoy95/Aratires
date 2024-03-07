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
import Detail from './pages/Detail/Detail'


function App() {
  

  return (
    <div>
      
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
       
      </Routes>
      <Footer/>
      <Copyright/>
     

    </div>
  )
}

export default App
