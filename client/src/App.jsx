import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardLayout from './dashboard/DashboardLayout'
import Categories from './dashboard/Categories'
import AddCategory from './dashboard/AddCategory'
import ProductsTable from './dashboard/ProductsTable'
import AddProduct from './dashboard/AddProduct'
import { CartProvider } from './components/CartContext'

const App = () => {

  const [loggedUser, setLoggedUser] = useState(localStorage.getItem("user") || "");

  const loginUser = (data) => {
    localStorage.setItem("user", data);
    setLoggedUser(data);
  }

  const logoutUser = () => {
    localStorage.removeItem("user");
    setLoggedUser("");
  }


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout logoutUser={logoutUser} />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Route>

            <Route path="/login" element={<Login loginUser={loginUser} />}></Route>
            <Route path="/register" element={<Register />}></Route>


            <Route path="/dashboard" element={loggedUser ? <DashboardLayout /> : <Navigate to="/login" />}>
              <Route path="categories" element={<Categories />}></Route>
              <Route path="categories/addcategory" element={<AddCategory />}></Route>
              <Route path="products" element={<ProductsTable />}></Route>
              <Route path="products/addproduct" element={<AddProduct />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
