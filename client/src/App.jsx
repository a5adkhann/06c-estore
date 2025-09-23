import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardLayout from './dashboard/DashboardLayout'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout/>}>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/about" element={<About/>}></Route>
                  <Route path="/products" element={<Products/>}></Route>
                  <Route path="/contact" element={<Contact/>}></Route>
              </Route>

              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>


              <Route path="/dashboard" element={<DashboardLayout/>}>
              
              </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
