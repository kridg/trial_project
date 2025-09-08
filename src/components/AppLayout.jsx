import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const AppLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>  
        <div>
            <NavBar/>
        </div>
        <div className='flex-1'><Outlet/></div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default AppLayout