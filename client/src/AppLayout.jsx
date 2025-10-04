import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = ({logoutUser}) => {
  return (
    <>
        <Navbar logoutUser={logoutUser}/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default AppLayout
